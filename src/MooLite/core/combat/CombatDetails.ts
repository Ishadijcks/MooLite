import {CombatStats} from "src/MooLite/core/combat/CombatStats";

export interface CombatDetails {
    attackLevel: number;
    combatLevel: number;
    combatStats: CombatStats;
    currentHitpoints: number;
    currentManapoints: number;
    defenseLevel: number;
    intelligenceLevel: number;
    magicLevel: number;
    magicMaxDamage: number;
    maxHitpoints: number;
    maxManapoints: number;
    powerLevel: number;
    rangedAccuracyRating: number;
    rangedEvasionRating: number;
    rangedLevel: number;
    rangedMaxDamage: number;
    slashAccuracyRating: number;
    slashEvasionRating: number;
    slashMaxDamage: number;
    smashAccuracyRating: number;
    smashEvasionRating: number;
    smashMaxDamage: number;
    stabAccuracyRating: number;
    stabEvasionRating: number;
    stabMaxDamage: number;
    staminaLevel: number;
    totalArmor: number;
    totalFireResistance: number;
    totalNatureResistance: number;
    totalWaterResistance: number;
}
