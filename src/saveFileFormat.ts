import { HIGHEST_COLLECTIBLE_ID, NUM_ACHIEVEMENTS } from "./constants";
import { DataType } from "./types/DataType";

export interface SaveFile {
  header: string;
  unknown: ArrayBuffer;
  achievements: number[];
  touchedCollectibles: number[];
  checksum: ArrayBuffer;
}

/** Each field is specified by a 3-tuple of start byte, end byte, and data type. */
export const SAVE_FILE_STRUCT: Record<
  keyof SaveFile,
  [number, number, DataType]
> = {
  // Contains "ISAACNGSAVE09R", with the final three characters being the version of the save file
  header: [0, 15, DataType.STRING],

  // 4 bytes after the header that always change as soon as the file is saved again
  // Might be a checksum of some kind?
  unknown: [16, 19, DataType.UNKNOWN],

  // One byte per achievement, in order
  // The byte is set to 0 if they don't have the achievement
  // The byte is set to 1 if they do have the achievement
  achievements: [33, 33 + NUM_ACHIEVEMENTS, DataType.INT_ARRAY],

  // One byte per touched collectible, in order
  // The byte is set to 0 if they have not yet touched the collectible
  // The byte is set to 1 if they have touched the collectible
  touchedCollectibles: [
    2747,
    2747 + HIGHEST_COLLECTIBLE_ID,
    DataType.INT_ARRAY,
  ],

  // The last 8 bytes are a CRC32 checksum of the rest of the data
  // The offset of this will change depending on how large the save file is
  // See: https://github.com/bladecoding/IsaacSaveFileCrc
  checksum: [0, 0, DataType.UNKNOWN],
};
