import {CombatStyleHrid} from "src/MooLite/core/combat/CombatStyleHrid";
import {DamageTypeHrid} from "src/MooLite/core/combat/DamageTypeHrid";
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
    damageType: DamageTypeHrid;
    effectType: AbilityEffectType;
    stunChance: number;
    stunDuration: number;
    targetType: string;
}
