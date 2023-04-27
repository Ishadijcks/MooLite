import {CharacterAbility} from "src/MooLite/core/abilities/CharacterAbility";
import {AbilityHrid} from "src/MooLite/core/abilities/AbilityHrid";
import {Ability} from "src/MooLite/core/abilities/Ability";

export class Abilities {
    _abilities: CharacterAbility[] = [];

    public abilityDetailMap: Record<AbilityHrid, Ability> = {};
}
