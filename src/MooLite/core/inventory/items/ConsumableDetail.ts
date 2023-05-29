import { CombatTrigger } from "src/MooLite/core/combat/triggers/CombatTrigger";
import { Buffs } from "src/MooLite/core/inventory/items/Buffs";

export interface ConsumableDetail {
    buffs: Buffs[];
    cooldownDuration: number;
    defaultCombatTriggers: CombatTrigger[] | null;
    hitpointsRestore: number;
    manapointRestore: number;
    recoveryDuration: number;
    // TODO(@Isha): Or what?
    usableInActionTypeMap: null;
}
