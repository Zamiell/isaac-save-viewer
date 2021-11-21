import { NUM_ACHIEVEMENTS } from "./constants";
import * as achievements from "./data/achievements.json";
import * as items from "./data/items.json";
import { SaveFile } from "./saveFileFormat";
import { hideSelectSaveFileArea } from "./selectSaveFileSubroutines";
import { AchievementsJSONEntry } from "./types/AchievementsJSONEntry";
import { ItemsJSONEntry } from "./types/ItemsJSONEntry";
import { getElement, hide, parseIntSafe, show } from "./util";

const SAVE_FILE_STATS_ID = "save-file-stats";

const ACHIEVEMENTS_TABLE_ID = "achievements-table";
const ACHIEVEMENTS_TBODY_ID = "achievements-table-tbody";
const ACHIEVEMENTS_ALL_UNLOCKED_ID = "achievements-all-unlocked";
const NUM_ACHIEVEMENTS_UNLOCKED_ID = "num-achievements-unlocked";
const TOTAL_ACHIEVEMENTS_ID = "total-achievements";

const COLLECTIBLES_TABLE_ID = "collectibles-table";
const COLLECTIBLES_TBODY_ID = "collectibles-table-tbody";
const COLLECTIBLES_ALL_TOUCHED_ID = "collectibles-all-touched";
const NUM_COLLECTIBLES_TOUCHED_ID = "num-collectibles-touched";
const TOTAL_COLLECTIBLES_ID = "total-collectibles";

const WIKI_PREFIX = "https://bindingofisaacrebirth.fandom.com/wiki/";

export function fillPage(saveFile: SaveFile) {
  hideSelectSaveFileArea();

  const saveFileStats = getElement(SAVE_FILE_STATS_ID);
  show(saveFileStats);

  const numCollectibles = getNumCollectibles();

  fillAchievements(saveFile);
  fillCollectibles(saveFile, numCollectibles);
}

function getNumCollectibles() {
  let numCollectibles = 0;
  for (const key of Object.keys(items)) {
    const collectibleType = parseIntSafe(key);
    if (Number.isNaN(collectibleType)) {
      continue;
    }

    if (collectibleType > 0 && collectibleType < 1000) {
      numCollectibles += 1;
    }
  }

  return numCollectibles;
}

function fillAchievements(saveFile: SaveFile) {
  const achievementsTable = getElement(ACHIEVEMENTS_TABLE_ID);
  const achievementsTBody = getElement(
    ACHIEVEMENTS_TBODY_ID,
  ) as HTMLTableElement;
  const achievementsAllUnlockedElement = getElement(
    ACHIEVEMENTS_ALL_UNLOCKED_ID,
  );
  const numAchievementsUnlockedElement = getElement(
    NUM_ACHIEVEMENTS_UNLOCKED_ID,
  );
  const totalAchievementsElement = getElement(TOTAL_ACHIEVEMENTS_ID);

  let numAchievementsUnlocked = 0;
  for (let i = 0; i < saveFile.achievements.length; i++) {
    const achievementUnlocked = saveFile.achievements[i];
    if (achievementUnlocked !== 0) {
      numAchievementsUnlocked += 1;
      continue;
    }

    const row = achievementsTBody.insertRow();
    const rowData: string[] = [];

    const id = (i + 1).toString();
    rowData.push(id);

    const key = id as keyof typeof achievements;
    const achievementDescription = achievements[key] as AchievementsJSONEntry;

    const { name, link, inGameDescription, unlockDescription } =
      achievementDescription;

    const linkedName =
      link === "" ? name : `<a href=${WIKI_PREFIX}${link}>${name}</a>`;
    rowData.push(linkedName);
    const image = `<img src="img/achievements/${id}.png" />`;
    rowData.push(image);
    rowData.push(inGameDescription);
    rowData.push(unlockDescription);

    for (const data of rowData) {
      row.insertCell().innerHTML = data;
    }
  }

  numAchievementsUnlockedElement.innerHTML = numAchievementsUnlocked.toString();
  totalAchievementsElement.innerHTML = NUM_ACHIEVEMENTS.toString();

  if (numAchievementsUnlocked === NUM_ACHIEVEMENTS) {
    hide(achievementsTable);
  } else {
    hide(achievementsAllUnlockedElement);
  }
}

function fillCollectibles(saveFile: SaveFile, numCollectibles: number) {
  const collectiblesTable = getElement(COLLECTIBLES_TABLE_ID);
  const collectiblesTBody = getElement(
    COLLECTIBLES_TBODY_ID,
  ) as HTMLTableElement;
  const collectiblesAllTouchedElement = getElement(COLLECTIBLES_ALL_TOUCHED_ID);
  const numCollectiblesTouchedElement = getElement(NUM_COLLECTIBLES_TOUCHED_ID);
  const totalCollectiblesElement = getElement(TOTAL_COLLECTIBLES_ID);

  let numCollectiblesTouched = 0;
  for (let i = 0; i < saveFile.touchedCollectibles.length; i++) {
    const id = (i + 1).toString();
    const key = id as keyof typeof items;
    const itemDescription = items[key] as ItemsJSONEntry;
    if (itemDescription === undefined) {
      // The collectible IDs are not contiguous
      continue;
    }

    const collectibleTouched = saveFile.touchedCollectibles[i];
    if (collectibleTouched !== 0) {
      numCollectiblesTouched += 1;
      continue;
    }

    const row = collectiblesTBody.insertRow();
    const rowData: string[] = [];

    rowData.push(id);

    const { name } = itemDescription;
    rowData.push(name);

    const filename = id.padStart(3, "0");
    const image = `<img src="img/collectibles/collectibles_${filename}.png" />`;
    rowData.push(image);

    const pools = "Unknown"; // TODO
    rowData.push(pools);

    for (const data of rowData) {
      row.insertCell().innerHTML = data;
    }
  }

  numCollectiblesTouchedElement.innerHTML = numCollectiblesTouched.toString();
  totalCollectiblesElement.innerHTML = numCollectibles.toString();

  if (numCollectiblesTouched === numCollectibles) {
    hide(collectiblesTable);
  } else {
    hide(collectiblesAllTouchedElement);
  }
}
