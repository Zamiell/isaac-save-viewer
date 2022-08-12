import { fillPage } from "./fillPage";
import { selectSaveFileError } from "./selectSaveFileSubroutines";

const HEADER_LENGTH = 16;

// Run files are ones that contain data for a run that has been exited mid-way through.
// e.g. gamestate1.dat
const REBIRTH_RUN_HEADER = "ISAACNG_GSR0018";
const AFTERBIRTH_RUN_HEADER = "ISAACNG_GSR0034";
const AFTERBIRTH_PLUS_RUN_HEADER = "ISAACNG_GSR0065";
const REPENTANCE_RUN_HEADER = "ISAACNG_GSR0142";
const RUN_HEADERS = new Set([
  REBIRTH_RUN_HEADER,
  AFTERBIRTH_RUN_HEADER,
  AFTERBIRTH_PLUS_RUN_HEADER,
  REPENTANCE_RUN_HEADER,
]);

// Persistent files are ones that contain data for the entire save file.
// e.g. persistentgamedata1.dat
const REBIRTH_PERSISTENT_HEADER = "ISAACNGSAVE06R";
const AFTERBIRTH_PERSISTENT_HEADER = "ISAACNGSAVE08R";
const AFTERBIRTH_PLUS_AND_REPENTANCE_PERSISTENT_HEADER = "ISAACNGSAVE09R";

// Afterbirth+ actually has 403 achievements, but the size of the array is 404 because there is no
// 0th achievement.
const NUM_AFTERBIRTH_PLUS_ACHIEVEMENTS = 404;

export function readFile(files: FileList): void {
  const firstFile = files[0];
  if (firstFile === undefined) {
    throw new Error("Failed to get the first file from the file list.");
  }

  const inputReader = new FileReader();
  inputReader.addEventListener("load", inputReaderLoad);
  inputReader.readAsArrayBuffer(firstFile);
}

function inputReaderLoad(this: FileReader) {
  try {
    const isaacSaveFile = parseSaveFile(this);
    fillPage(isaacSaveFile);
  } catch (err) {
    selectSaveFileError(err);
  }
}

function parseSaveFile(fileReader: FileReader): IsaacSaveFile {
  const arrayBuffer = fileReader.result;
  if (arrayBuffer === null || typeof arrayBuffer === "string") {
    throw new Error("The file array buffer was an unknown type.");
  }

  verifyHeader(arrayBuffer);

  // The format of the save file was reversed by Blade using: https://ide.kaitai.io/
  // It produces a JavaScript decoder that we leverage here.
  const kaitaiStream = new KaitaiStream(arrayBuffer);
  const isaacSaveFile = new IsaacSaveFile(kaitaiStream);

  verifyNotAfterbirthPlus(isaacSaveFile);

  return isaacSaveFile;
}

function verifyHeader(arrayBuffer: ArrayBuffer) {
  // Before we invoke the real parser, we manually extract the header (for the purposes of showing a
  // better error message).
  const headerBytes = arrayBuffer.slice(0, HEADER_LENGTH);
  const header = arrayBufferToString(headerBytes);

  if (RUN_HEADERS.has(header)) {
    throw new Error(
      'That is a file that stores the temporary game state for a specific run.<br />You need to instead select the "persistent" file that contains the data for the entire save file.',
    );
  }

  let headerGameType: string | undefined;
  if (header === REBIRTH_PERSISTENT_HEADER) {
    headerGameType = "Rebirth";
  } else if (header === AFTERBIRTH_PERSISTENT_HEADER) {
    headerGameType = "Afterbirth";
  }

  if (headerGameType !== undefined) {
    errorWrongGameType(headerGameType);
  }

  if (header !== AFTERBIRTH_PLUS_AND_REPENTANCE_PERSISTENT_HEADER) {
    console.error("Unknown header:");
    console.error(header);
    throw new Error(
      "That is not a valid save file for <i>The Binding of Isaac: Repentance</i>.",
    );
  }
}

function arrayBufferToString(arrayBuffer: ArrayBuffer) {
  const textDecoder = new TextDecoder("utf-8");
  const string = textDecoder.decode(arrayBuffer).trim();
  return removeNullCharacters(string).trim();
}

function removeNullCharacters(string: string) {
  return string.replace(/\0/g, "");
}

function verifyNotAfterbirthPlus(isaacSaveFile: IsaacSaveFile) {
  // Since Afterbirth+ has the same save file header as Repentance, we must use some other save file
  // property to tell the difference.
  // eslint-disable-next-line isaacscript/strict-enums
  const chunk = isaacSaveFile.chunks[ChunkType.ACHIEVEMENTS - 1];
  if (chunk === undefined) {
    throw new Error("Failed to get the achievements chunk.");
  }

  if (chunk.len === NUM_AFTERBIRTH_PLUS_ACHIEVEMENTS) {
    errorWrongGameType("Afterbirth+");
  }
}

function errorWrongGameType(gameType: string) {
  throw new Error(
    `That is a save file for <i>The Binding of Isaac: ${gameType}</i>.<br />This site only supports save files for <i>The Binding of Isaac: Repentance</i>.`,
  );
}
