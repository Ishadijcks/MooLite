import { BuffTypeHrid } from "src/MooLite/core/combat/buffs/BuffTypeHrid";
import { BuffHrid } from "src/MooLite/core/combat/buffs/BuffHrid";

export interface CombatBuff {
    duration: number;
    flatBoost: number;
    flatBoostLevelBonus: number;
    ratioBoost: number;
    ratioBoostLevelBonus: number;
    startTime: string;
    typeHrid: BuffTypeHrid;
    uniqueHrid: BuffHrid;
}
