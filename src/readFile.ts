import { fillPage } from "./fillPage";
import { SaveFile, SAVE_FILE_STRUCT } from "./saveFileFormat";
import { selectSaveFileError } from "./selectSaveFileSubroutines";
import { DataType } from "./types/DataType";
import { ensureAllCases } from "./util";

const CORRECT_HEADER = "ISAACNGSAVE09R";

const textDecoder = new TextDecoder("utf-8");

export function readFile(files: FileList) {
  const file = files[0];
  const inputReader = new FileReader();
  inputReader.addEventListener("load", loadedFile);
  inputReader.readAsArrayBuffer(file);
}

function loadedFile(this: FileReader) {
  const fileArrayBuffer = this.result;
  if (fileArrayBuffer === null || typeof fileArrayBuffer === "string") {
    return;
  }

  const parsedFields: Record<string, unknown> = {};

  for (const [fieldName, tuple] of Object.entries(SAVE_FILE_STRUCT)) {
    const [startByte, endByte, dataType] = tuple;
    const fieldArrayBuffer = fileArrayBuffer.slice(startByte, endByte);
    const field = convertArrayBufferToPrimitive(fieldArrayBuffer, dataType);
    parsedFields[fieldName] = field;
  }

  const saveFile = parsedFields as unknown as SaveFile;

  if (saveFile.header !== CORRECT_HEADER) {
    selectSaveFileError(
      "Error: That is not a valid save file for <i>The Binding of Isaac: Repentance</i>.",
    );
    return;
  }

  fillPage(saveFile);
}

function convertArrayBufferToPrimitive(
  arrayBuffer: ArrayBuffer,
  dataType: DataType,
) {
  switch (dataType) {
    case DataType.STRING: {
      return textDecoder.decode(arrayBuffer).trim();
    }

    case DataType.INT_ARRAY: {
      const typedArray = new Uint8Array(arrayBuffer);
      return Array.from(typedArray);
    }

    case DataType.UNKNOWN: {
      return arrayBuffer;
    }

    default: {
      ensureAllCases(dataType);
      return null;
    }
  }
}
