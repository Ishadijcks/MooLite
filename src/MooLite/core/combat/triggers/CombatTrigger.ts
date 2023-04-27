import {CombatTriggerComparatorHrid} from "src/MooLite/core/combat/triggers/CombatTriggerComparatorHrid";
import {CombatTriggerDependencyHrid} from "src/MooLite/core/combat/triggers/CombatTriggerDepedencyHrid";
import {CombatTriggerConditionHrid} from "src/MooLite/core/combat/triggers/CombatTriggerConditionHrid";

export interface CombatTrigger {
    comparatorHrid: CombatTriggerComparatorHrid;
    conditionHrid: CombatTriggerConditionHrid;
    dependencyHrid: CombatTriggerDependencyHrid;
}
