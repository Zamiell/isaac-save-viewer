import { readFile } from "./readFile";
import { getSelectSaveFileButton } from "./selectSaveFileSubroutines";

export function selectSaveFileButtonInit() {
  const chooseSaveFileButton = getSelectSaveFileButton();
  chooseSaveFileButton.addEventListener("change", chooseSaveFileButtonUsed);
}

function chooseSaveFileButtonUsed(event: Event) {
  if (event.target === null) {
    return;
  }

  const inputElement = event.target as HTMLInputElement;
  const { files } = inputElement;
  if (files === null) {
    return;
  }

  if (files.length === 0) {
    return;
  }

  readFile(files);
}
