declare class IsaacSaveFile {
  header: SaveHeader;
  chunks: Chunk[];

  constructor(kaitaiStream: KaitaiStream);
}

interface SaveHeader {
  magic: Uint8Array;
}

interface Chunk {
  body: Chunks;
  len: number;
  type: ChunkType;
}

interface AchievementsChunk {
  achievements: number[];
  count: number;
}

interface CountersChunk {
  counters: number[];
  count: number;
}

interface LevelCountersChunk {
  counters: number[];
  count: number;
}

interface CollectiblesChunk {
  /** This is misnamed; collectibles have to actually be touched for this variable to change. */
  seenById: number[];
  count: number;
}

interface MinibossesChunk {
  seenById: number[];
  count: number;
}

interface BossesChunk {
  seenById: number[];
  count: number;
}

interface ChallengeCountersChunk {
  completedById: number[];
  count: number;
}

interface CutsceneCountersChunk {
  countById: number[];
  count: number;
}

interface GameSettingsChunk {
  unk: number[];
  count: number;
}

interface SpecialSeedCountersChunk {
  countById: number[];
  count: number;
}

interface BestiaryCountersChunk {
  counters: BestiaryCounter[];
  count: number;
}

interface BestiaryCounter {
  body: BestiaryDeaths;
  count: number;
}

interface BestiaryDeaths {
  values: EntityValue[];
}

interface EntityValue {
  entity: number;
  value: number;
}

type Chunks =
  | AchievementsChunk
  | CountersChunk
  | LevelCountersChunk
  | CollectiblesChunk
  | MinibossesChunk
  | BossesChunk
  | ChallengeCountersChunk
  | CutsceneCountersChunk
  | GameSettingsChunk
  | SpecialSeedCountersChunk
  | BestiaryCountersChunk;
