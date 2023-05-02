import { CombatTriggerComparatorHrid } from "src/MooLite/core/combat/triggers/CombatTriggerComparatorHrid";
import { CombatTriggerConditionHrid } from "src/MooLite/core/combat/triggers/CombatTriggerConditionHrid";

export interface CombatTriggerConditionDetail {
    allowedComparatorHrids: CombatTriggerComparatorHrid;
    hrid: CombatTriggerConditionHrid;
    isMultiTarget: boolean;
    isSingleTarget: boolean;
    name: string;
    sortIndex: number;
}
