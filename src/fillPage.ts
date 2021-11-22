import * as achievements from "./data/achievements.json";
import * as easterEggs from "./data/easterEggs.json";
import * as items from "./data/items.json";
import { hideSelectSaveFileArea } from "./selectSaveFileSubroutines";
import { getElement, hide, parseIntSafe, show } from "./util";

const SAVE_FILE_STATS_ID = "save-file-stats";
const WIKI_PREFIX = "https://bindingofisaacrebirth.fandom.com/wiki/";
type Prefix = "achievements" | "collectibles" | "easter-eggs";

export function fillPage(isaacSaveFile: IsaacSaveFile) {
  // Build out the tables on the page
  fillAchievements(isaacSaveFile);
  fillCollectibles(isaacSaveFile);
  fillEasterEggs(isaacSaveFile);

  // Show it
  hideSelectSaveFileArea();
  const saveFileStats = getElement(SAVE_FILE_STATS_ID);
  show(saveFileStats);
}

function fillAchievements(isaacSaveFile: IsaacSaveFile) {
  const achievementChunk = isaacSaveFile.chunks[ChunkType.ACHIEVEMENTS - 1]
    .body as AchievementsChunk;
  const ourAchievements = achievementChunk.achievements;
  const numAchievements = achievementChunk.count - 1; // Account for the 0th element

  fillTable(
    "achievements",
    ourAchievements,
    numAchievements,
    fillAchievementsAddRow,
  );
}

function fillAchievementsAddRow(i: number, tBody: HTMLTableElement) {
  const rowData: string[] = [];

  const id = i.toString();
  rowData.push(id);

  const key = id as keyof typeof achievements;
  const description = achievements[key];
  if (description === undefined) {
    throw new Error(`Failed to find the achievement for ID: ${id}`);
  }
  const { name, link, inGameDescription, unlockDescription } = description;

  const linkedName =
    link === "" ? name : `<a href=${WIKI_PREFIX}${link}>${name}</a>`;
  rowData.push(linkedName);

  const image = `<img src="img/achievements/${id}.png" />`;
  rowData.push(image);

  rowData.push(inGameDescription);
  rowData.push(unlockDescription);

  addRow(tBody, rowData);
}

function fillCollectibles(isaacSaveFile: IsaacSaveFile) {
  const collectiblesChunk = isaacSaveFile.chunks[ChunkType.COLLECTIBLES - 1]
    .body as CollectiblesChunk;
  const ourCollectibles = collectiblesChunk.seenById;

  // We can't derive the number of collectibles from the save file, because they are not contiguous
  // Instead, we derive it from the JSON file
  const numCollectibles = getNumCollectiblesFromJSON();

  fillTable(
    "collectibles",
    ourCollectibles,
    numCollectibles,
    fillCollectiblesAddRow,
  );
}

function getNumCollectiblesFromJSON() {
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

function fillCollectiblesAddRow(i: number, tBody: HTMLTableElement) {
  // The collectible IDs are not contiguous, so do nothing if this particular item does not exist
  const collectibleDescription = getCollectibleDescription(i);
  if (collectibleDescription === undefined) {
    return;
  }
  const { name } = collectibleDescription;

  const rowData: string[] = [];

  const id = i.toString();
  rowData.push(id);
  rowData.push(name);

  const filename = id.padStart(3, "0");
  const image = `<img src="img/collectibles/collectibles_${filename}.png" />`;
  rowData.push(image);

  const pools = "Unknown"; // TODO
  rowData.push(pools);

  addRow(tBody, rowData);
}

function getCollectibleDescription(id: number) {
  const key = id as unknown as keyof typeof items;
  const itemDescription = items[key];

  return itemDescription;
}

function fillEasterEggs(isaacSaveFile: IsaacSaveFile) {
  const easterEggChunk = isaacSaveFile.chunks[
    ChunkType.SPECIAL_SEED_COUNTERS - 1
  ].body as SpecialSeedCountersChunk;
  const ourEasterEggs = easterEggChunk.countById;

  // We can't derive the number of easter eggs from the save file, because they are not contiguous
  // Instead, we derive it from the JSON file
  const numEasterEggs = getNumEasterEggsFromJSON();

  fillTable("easter-eggs", ourEasterEggs, numEasterEggs, fillEasterEggsAddRow);
}

function getNumEasterEggsFromJSON() {
  let numEasterEggs = 0;
  for (const key of Object.keys(easterEggs)) {
    const collectibleType = parseIntSafe(key);
    if (Number.isNaN(collectibleType)) {
      continue;
    }

    numEasterEggs += 1;
  }

  return numEasterEggs;
}

function fillEasterEggsAddRow(i: number, tBody: HTMLTableElement) {
  // The easter eggs IDs are not contiguous, so do nothing if this particular item does not exist
  const easterEggDescription = getEasterEggDescription(i);
  if (easterEggDescription === undefined) {
    return;
  }
  const { seed, inGameDescription, effectsDescription } = easterEggDescription;

  const rowData: string[] = [];

  const id = i.toString();
  rowData.push(id);
  rowData.push(seed);
  rowData.push(inGameDescription);
  rowData.push(effectsDescription);

  addRow(tBody, rowData);
}

function getEasterEggDescription(id: number) {
  const key = id as unknown as keyof typeof easterEggs;
  const easterEggDescription = easterEggs[key];

  return easterEggDescription;
}

function fillTable(
  prefix: Prefix,
  things: number[],
  numTotal: number,
  addRowFunc: (i: number, tBody: HTMLTableElement) => void,
) {
  const table = getElement(`${prefix}-table`);
  const tBody = getElement(`${prefix}-table-tbody`) as HTMLTableElement;
  const completedElement = getElement(`${prefix}-completed`);
  const numGottenElement = getElement(`${prefix}-gotten`);
  const numTotalElement = getElement(`${prefix}-total`);

  let numGotten = 0;

  // There is never a thing corresponding to the 0th element in the array, so we skip it
  for (let i = 1; i < things.length; i++) {
    const gotten = things[i] !== 0;

    // Some arrays contain data that is not contiguous
    if (gotten) {
      if (
        (prefix === "collectibles" && !isValidCollectibleID(i)) ||
        (prefix === "easter-eggs" && !isValidEasterEgg(i))
      ) {
        continue;
      }

      numGotten += 1;
    } else {
      addRowFunc(i, tBody);
    }
  }

  numGottenElement.innerHTML = numGotten.toString();
  numTotalElement.innerHTML = numTotal.toString();

  if (numGotten === numTotal) {
    hide(table);
  } else {
    hide(completedElement);
  }
}

function addRow(tBody: HTMLTableElement, rowData: string[]) {
  const row = tBody.insertRow();
  for (const data of rowData) {
    row.insertCell().innerHTML = data;
  }
}

function isValidCollectibleID(id: number) {
  return getCollectibleDescription(id) !== undefined;
}

function isValidEasterEgg(id: number) {
  return getEasterEggDescription(id) !== undefined;
}
