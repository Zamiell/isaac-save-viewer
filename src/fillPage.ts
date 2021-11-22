import * as achievements from "./data/achievements.json";
import * as easterEggs from "./data/easterEggs.json";
import * as itemPools from "./data/itempools.json";
import * as items from "./data/items.json";
import { ITEM_POOL_NAME_MAP } from "./itemPoolNameMap";
import { hideSelectSaveFileArea } from "./selectSaveFileSubroutines";
import { getElement, hide, parseIntSafe, show, toggle } from "./util";

type Prefix = "achievements" | "collectibles" | "easter-eggs";

const SAVE_FILE_STATS_ID = "save-file-stats";
const WIKI_PREFIX = "https://bindingofisaacrebirth.fandom.com/wiki/";
const HIDE_TEXT = "Hide";
const SHOW_TEXT = "Show";

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

  const pools = getPoolsForCollectible(i);
  const poolsText = getPoolsText(pools);
  rowData.push(poolsText);

  addRow(tBody, rowData);
}

function getCollectibleDescription(id: number) {
  const key = id as unknown as keyof typeof items;
  const itemDescription = items[key];

  return itemDescription;
}

function getPoolsForCollectible(i: number) {
  const id = i.toString();

  // The "itempools.json" file was generated automatically from the "itempools.xml" file using an
  // online converter
  const pools: string[] = [];
  for (const pool of itemPools.ItemPools.Pool) {
    // Convert e.g. "bossRoom" to "Boss Room"
    // eslint-disable-next-line no-underscore-dangle
    const poolNameEntry = ITEM_POOL_NAME_MAP.get(pool._Name);
    const poolName = poolNameEntry === undefined ? "Unknown" : poolNameEntry;

    for (const item of pool.Item) {
      // eslint-disable-next-line no-underscore-dangle
      if (item._Id === id) {
        pools.push(poolName);
        break;
      }
    }
  }

  return pools;
}

function getPoolsText(pools: string[]) {
  if (pools.length === 0) {
    return "n/a (not present in any pools)";
  }

  return pools.join(", ");
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
  const tableElement = getElement(`${prefix}-table`);
  const tBodyElement = getElement(`${prefix}-table-tbody`) as HTMLTableElement;
  const completedElement = getElement(`${prefix}-completed`);
  const numGottenElement = getElement(`${prefix}-gotten`);
  const numTotalElement = getElement(`${prefix}-total`);
  const toggleElement = getElement(`${prefix}-toggle`);
  const sectionElement = getElement(`${prefix}-section`);

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
      addRowFunc(i, tBodyElement);
    }
  }

  numGottenElement.innerHTML = numGotten.toString();
  numTotalElement.innerHTML = numTotal.toString();

  if (numGotten === numTotal) {
    hide(tableElement);
  } else {
    hide(completedElement);
  }

  toggleElement.addEventListener("click", () => {
    toggle(sectionElement);
    swapLinkText(toggleElement);
  });
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

function swapLinkText(element: HTMLElement) {
  const newLinkText = element.innerHTML === HIDE_TEXT ? SHOW_TEXT : HIDE_TEXT;
  element.innerHTML = newLinkText;
}
