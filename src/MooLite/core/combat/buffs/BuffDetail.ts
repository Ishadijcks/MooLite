import { BuffUniqueHrid } from "src/MooLite/core/combat/buffs/BuffUniqueHrid";
import { BuffTypeHrid } from "src/MooLite/core/combat/buffs/BuffTypeHrid";

export interface BuffDetail {
    duration: number;
    flatBoost: number;
    flatBoostLevelBonus: number;
    ratioBoost: number;
    ratioBoostLevelBonus: number;
    startTime: string;
    typeHrid: BuffTypeHrid;
    uniqueHrid: BuffUniqueHrid;
}
