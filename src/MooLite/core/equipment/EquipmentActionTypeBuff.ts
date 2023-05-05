import { BuffTypeHrid } from "src/MooLite/core/combat/buffs/BuffTypeHrid";
import { BuffUniqueHrid } from "src/MooLite/core/combat/buffs/BuffUniqueHrid";

export interface EquipmentActionTypeBuff {
    duration: number;
    flatBoost: number;
    flatBoostLevelBonus: number;
    ratioBoost: number;
    startTime: string;
    typeHrid: BuffTypeHrid;
    uniqueHrid: BuffUniqueHrid;
}
