import {AbilityHrid} from "src/MooLite/core/abilities/AbilityHrid";

export interface CharacterAbility {
    abilityHrid: AbilityHrid;
    experience: number;
    level: number;
    slotNumber: number;
}
