import { CombatDetails } from "src/MooLite/core/combat/CombatDetails";
import { CharacterAbility } from "src/MooLite/core/abilities/CharacterAbility";
import { CombatConsumable } from "src/MooLite/core/inventory/items/CombatConsumable";

export interface CombatUnit {
    abilityUsedCounter: number;
    autoAttackCounter: number;
    baseCombatDetails: CombatDetails;
    combatAbilities: CharacterAbility[];
    combatConsumables: CombatConsumable[];
}
