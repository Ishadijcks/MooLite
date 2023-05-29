import { BuffTypeHrid } from "src/MooLite/core/combat/buffs/BuffTypeHrid";
import { BuffUniqueHrid } from "src/MooLite/core/combat/buffs/BuffUniqueHrid";

export interface Buffs {
    duration: number;
    flatBoost: number;
    flatBoostLevelBonus: number;
    ratioBoost: number;
    ratioBoostLevelBonus: number;
    startTime: Date;
    typeHrid: BuffTypeHrid;
    uniqueHrid: BuffUniqueHrid;
}
