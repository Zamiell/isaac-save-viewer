import { getElement, hide, show } from "./util";

const CHOOSE_SAVE_FILE_BUTTON_ID = "choose-save-file";
const CHOOSE_SAVE_FILE_ERROR_ID = "choose-save-file-error";
const CHOOSE_SAVE_FILE_ERROR_TEXT_ID = "choose-save-file-error-text";
const CHOOSE_SAVE_FILE_COLUMN_ID = "choose-save-file-column";

export function getSelectSaveFileButton(): HTMLElement {
  return getElement(CHOOSE_SAVE_FILE_BUTTON_ID);
}

export function selectSaveFileError(err: unknown): void {
  const errorElement = getElement(CHOOSE_SAVE_FILE_ERROR_ID);
  show(errorElement);
  const errorTextElement = getElement(CHOOSE_SAVE_FILE_ERROR_TEXT_ID);
  errorTextElement.innerHTML = `${err}`;
}

export function hideSelectSaveFileArea(): void {
  const saveFileArea = getElement(CHOOSE_SAVE_FILE_COLUMN_ID);
  hide(saveFileArea);
}
