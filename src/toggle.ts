import { getElement, toggle } from "./util";

const ACHIEVEMENTS_TOGGLE_ID = "achievements-toggle";
const COLLECTIBLES_TOGGLE_ID = "collectibles-toggle";
const ACHIEVEMENTS_SECTION_ID = "achievements-section";
const COLLECTIBLES_SECTION_ID = "collectibles-section";
const HIDE_TEXT = "Hide";
const SHOW_TEXT = "Show";

export function toggleLinksInit() {
  const achievementsToggle = getElement(ACHIEVEMENTS_TOGGLE_ID);
  achievementsToggle.addEventListener("click", () => {
    const achievementsTable = getElement(ACHIEVEMENTS_SECTION_ID);
    toggle(achievementsTable);
    swapLinkText(achievementsToggle);
  });

  const collectiblesToggle = getElement(COLLECTIBLES_TOGGLE_ID);
  collectiblesToggle.addEventListener("click", () => {
    const collectiblesTable = getElement(COLLECTIBLES_SECTION_ID);
    toggle(collectiblesTable);
    swapLinkText(collectiblesToggle);
  });
}

function swapLinkText(element: HTMLElement) {
  const newLinkText = element.innerHTML === HIDE_TEXT ? SHOW_TEXT : HIDE_TEXT;
  element.innerHTML = newLinkText;
}
