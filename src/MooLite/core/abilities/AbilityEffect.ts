import {CombatStyleHrid} from "src/MooLite/core/combat/CombatStyleHrid";
import {DamageType} from "src/MooLite/core/combat/DamageType";
import {AbilityEffectType} from "src/MooLite/core/abilities/AbilityEffectType";

export interface AbilityEffect {
    baseDamageFlat: number;
    baseDamageFlatLevelBonus: number;
    baseDamageRatio: number
    baseDamageRatioLevelBonus: number
    bleedDuration: number;
    bleedRatio: number;
    bonusAccuracyRatio: number;
    bonusAccuracyRatioLevelBonus: number;
    combatStyleHrid: CombatStyleHrid;
    damageType: DamageType;
    effectType: AbilityEffectType;
    stunChance: number;
    stunDuration: number;
    targetType: string;
}
