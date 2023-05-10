import { CombatDetails } from "src/MooLite/core/combat/CombatDetails";
import { CharacterAbility } from "src/MooLite/core/abilities/CharacterAbility";

export interface CombatUnit {
    abilityUsedCounter: number;
    autoAttackCounter: number;
    baseCombatDetails: CombatDetails;
    combatAbilities: CharacterAbility[];
}
