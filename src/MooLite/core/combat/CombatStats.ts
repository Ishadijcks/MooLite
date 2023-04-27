import {CombatStyleHrid} from "src/MooLite/core/combat/CombatStyleHrid";
import {DamageTypeHrid} from "src/MooLite/core/combat/DamageTypeHrid";

export interface CombatStats {
    HPRegen: number;
    MPRegen: number;
    armor: number;
    attackInterval: number;
    combatDropQuantity: number;
    combatDropRate: number;
    combatExperience: number;
    combatRareFind: number;
    combatStyleHrids: CombatStyleHrid[];
    criticalDamage: number;
    criticalRate: number;
    damageType: DamageTypeHrid;
    drinkSlots: number
    fireAmplify: number
    fireResistance: number
    foodSlots: number
    healingAmplify: number
    lifeSteal: number
    magicDamage: number
    maxHitpoints: number
    maxManapoints: number
    natureAmplify: number
    natureResistance: number
    physicalAmplify: number
    physicalReflectPower: number
    rangedAccuracy: number
    rangedDamage: number
    rangedEvasion: number
    slashAccuracy: number
    slashDamage: number
    slashEvasion: number
    smashAccuracy: number
    smashDamage: number
    smashEvasion: number
    stabAccuracy: number
    stabDamage: number
    stabEvasion: number
    waterAmplify: number
    waterResistance: number
}
