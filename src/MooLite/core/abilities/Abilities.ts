import {CharacterAbility} from "src/MooLite/core/abilities/CharacterAbility";
import {AbilityHrid} from "src/MooLite/core/abilities/AbilityHrid";
import {AbilityDetail} from "src/MooLite/core/abilities/AbilityDetail";

export class Abilities {
    _abilities: CharacterAbility[] = [];

    public abilityDetailMap: Record<AbilityHrid, AbilityDetail> = {};
}
