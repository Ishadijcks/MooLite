import { CharacterAbility } from "src/MooLite/core/abilities/CharacterAbility";
import { AbilityHrid } from "src/MooLite/core/abilities/AbilityHrid";
import { AbilityDetail } from "src/MooLite/core/abilities/AbilityDetail";
import { SimpleEventDispatcher } from "strongly-typed-events";
import { CombatTrigger } from "src/MooLite/core/combat/triggers/CombatTrigger";

export interface AbilityXpGained extends CharacterAbility {
    delta: number;
}

export interface AbilityLvlGained extends CharacterAbility {
    delta: number;
}

export interface AbilitySlotChanged extends CharacterAbility {
    delta: number;
}

export class Abilities {
    private _characterAbilities: Record<AbilityHrid, CharacterAbility | null> = {};
    private _abilityCombatTriggers: Record<AbilityHrid, CombatTrigger> = {};

    private _onAbilityXpGained = new SimpleEventDispatcher<AbilityXpGained>();
    private _onAbilityLvlGained = new SimpleEventDispatcher<AbilityLvlGained>();
    private _onAbilitySlotChanged = new SimpleEventDispatcher<AbilitySlotChanged>();

    public get onAbilityXpGained() {
        return this._onAbilityXpGained.asEvent();
    }

    public get onAbilityLvlGained() {
        return this._onAbilityLvlGained.asEvent();
    }

    public get onAbilitySlotChanged() {
        return this._onAbilitySlotChanged.asEvent();
    }

    public readonly abilityDetailMap: Record<AbilityHrid, AbilityDetail>;
    public readonly abilitySlotsLevelRequirementList: number[];
    public readonly sortedAbilities: AbilityDetail[];

    public get unlockedAbilities(): CharacterAbility[] {
        const abilityList = Object.values(this._characterAbilities);
        return abilityList.filter((ability) => ability != null) as CharacterAbility[];
    }

    public get equippedAbilities(): CharacterAbility[] {
        const equippedAbilities = this.unlockedAbilities.filter((ability) => ability.slotNumber > 0);
        return equippedAbilities.sort((a, b) => a.slotNumber - b.slotNumber);
    }

    constructor(abilityDetailMap: Record<AbilityHrid, AbilityDetail>, abilitySlotsLevelRequirementList: number[]) {
        this.abilityDetailMap = abilityDetailMap;
        this.abilitySlotsLevelRequirementList = abilitySlotsLevelRequirementList;

        this.sortedAbilities = Object.values(this.abilityDetailMap).sort((a, b) => {
            return a.sortIndex - b.sortIndex;
        });
    }

    updateCharacterAbilities(abilities: CharacterAbility[] | null, notify: boolean = true) {
        abilities?.forEach((ability) => {
            const xpChanged = ability.experience - (this._characterAbilities[ability.abilityHrid]?.experience ?? 0);
            const lvlChanged = ability.level - (this._characterAbilities[ability.abilityHrid]?.level ?? 0);
            const slotChanged = ability.slotNumber - (this._characterAbilities[ability.abilityHrid]?.slotNumber ?? 0)

            this._characterAbilities[ability.abilityHrid] = ability;

            if (!notify) {
                return;
            }
            if (xpChanged !== 0) {
                this._onAbilityXpGained.dispatch({
                    ...(this._characterAbilities[ability.abilityHrid] as CharacterAbility),
                    delta: xpChanged,
                });
            }
            if (lvlChanged !== 0) {
                this._onAbilityLvlGained.dispatch({
                    ...(this._characterAbilities[ability.abilityHrid] as CharacterAbility),
                    delta: lvlChanged,
                });
            }
            if (slotChanged !== 0) {
                this._onAbilitySlotChanged.dispatch({
                    ...(this._characterAbilities[ability.abilityHrid] as CharacterAbility),
                    delta: slotChanged,
                });
            }
        });
    }

    public updateCombatTriggers(abilityCombatTriggersMap: Record<AbilityHrid, CombatTrigger>) {
        this._abilityCombatTriggers = abilityCombatTriggersMap;
    }

    public hasUnlockedAbility(abilityHrid: AbilityHrid): boolean {
        return this._characterAbilities[abilityHrid] != null;
    }
}
