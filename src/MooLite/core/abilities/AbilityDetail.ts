import {AbilityEffect} from "src/MooLite/core/abilities/AbilityEffect";
import {CombatTrigger} from "src/MooLite/core/combat/triggers/CombatTrigger";
import {AbilityHrid} from "src/MooLite/core/abilities/AbilityHrid";

export interface AbilityDetail {
    abilityEffects: AbilityEffect[];
    cooldownDuration: number;
    defaultCombatTriggers: CombatTrigger[]
    description: string;
    hasSpecialEffects: boolean;
    hrid: AbilityHrid;
    manaCost: number;
    name: string;
    sortIndex: number;
}
