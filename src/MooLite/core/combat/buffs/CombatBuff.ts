import { BuffTypeHrid } from "src/MooLite/core/combat/buffs/BuffTypeHrid";
import { BuffUniqueHrid } from "src/MooLite/core/combat/buffs/BuffUniqueHrid";

export interface CombatBuff {
    duration: number;
    flatBoost: number;
    flatBoostLevelBonus: number;
    ratioBoost: number;
    ratioBoostLevelBonus: number;
    startTime: string;
    typeHrid: BuffTypeHrid;
    uniqueHrid: BuffUniqueHrid;
}
