import { getElement, hide, show } from "./util";

const CHOOSE_SAVE_FILE_BUTTON_ID = "choose-save-file";
const CHOOSE_SAVE_FILE_ERROR_ID = "choose-save-file-error";
const CHOOSE_SAVE_FILE_ERROR_TEXT_ID = "choose-save-file-error-text";
const CHOOSE_SAVE_FILE_COLUMN_ID = "choose-save-file-column";

export function getSelectSaveFileButton() {
  return getElement(CHOOSE_SAVE_FILE_BUTTON_ID);
}

export function selectSaveFileError(msg: string) {
  const errorElement = getElement(CHOOSE_SAVE_FILE_ERROR_ID);
  show(errorElement);
  const errorTextElement = getElement(CHOOSE_SAVE_FILE_ERROR_TEXT_ID);
  errorTextElement.innerHTML = msg;
}

export function hideSelectSaveFileArea() {
  const saveFileArea = getElement(CHOOSE_SAVE_FILE_COLUMN_ID);
  hide(saveFileArea);
}
