import {CombatTrigger} from "src/MooLite/core/combat/triggers/CombatTrigger";

export interface ConsumableDetail {
    // TODO(@Isha): Or what?
    buffs: null
    cooldownDuration: number;
    defaultCombatTriggers: CombatTrigger[] | null;
    hitpointsRestore: number;
    manapointRestore: number;
    recoveryDuration: number;
    // TODO(@Isha): Or what?
    usableInActionTypeMap: null
}
