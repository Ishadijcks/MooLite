import {CharacterAbility} from "src/MooLite/core/abilities/CharacterAbility";
import {AbilityHrid} from "src/MooLite/core/abilities/AbilityHrid";
import {AbilityDetail} from "src/MooLite/core/abilities/AbilityDetail";

export class Abilities {
    _characterAbilities: Record<AbilityHrid, CharacterAbility | null> = {};

    public readonly abilityDetailMap: Record<AbilityHrid, AbilityDetail>;
    public readonly abilitySlotsLevelRequirementList: number[];
    public readonly sortedAbilities: AbilityDetail[];

    public get unlockedAbilities(): CharacterAbility[] {
        const abilityList = Object.values(this._characterAbilities)
        return abilityList.filter(ability => ability != null) as CharacterAbility[];
    }

    public get equippedAbilities(): CharacterAbility[] {
        const equippedAbilities = this.unlockedAbilities.filter(ability => ability.slotNumber > 0);
        return equippedAbilities.sort((a, b) => a.slotNumber - b.slotNumber);
    }

    constructor(abilityDetailMap: Record<AbilityHrid, AbilityDetail>, abilitySlotsLevelRequirementList: number[]) {
        this.abilityDetailMap = abilityDetailMap;
        this.abilitySlotsLevelRequirementList = abilitySlotsLevelRequirementList

        this.sortedAbilities = Object.values(this.abilityDetailMap).sort((a, b) => {
            return a.sortIndex - b.sortIndex;
        });

    }

    updateCharacterAbilities(abilities: CharacterAbility[] | null) {
        abilities?.forEach(ability => {
            this._characterAbilities[ability.abilityHrid] = ability;

            // TODO(@Isha): Check for levelups and such, emit stuff
        })
    }


}
