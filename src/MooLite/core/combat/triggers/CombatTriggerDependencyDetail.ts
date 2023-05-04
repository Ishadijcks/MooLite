import { CombatTriggerDependencyHrid } from "src/MooLite/core/combat/triggers/CombatTriggerDepedencyHrid";

export interface CombatTriggerDependencyDetail {
    hrid: CombatTriggerDependencyHrid;
    isMultiTarget: boolean;
    isSingleTarget: boolean;
    name: string;
    sortIndex: number;
}
