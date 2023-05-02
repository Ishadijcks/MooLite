import { ActionTypeHrid } from "src/MooLite/core/actions/ActionTypeHrid";
import { ConsumableSlotTypeHrid } from "src/MooLite/core/inventory/ConsumableSlotTypeHrid";
import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";

export interface DrinkDetail {
    actionTypeHrid: ActionTypeHrid;
    characterID: number;
    consumableSlotTypeHrid: ConsumableSlotTypeHrid;
    duration: number;
    isActive: boolean;
    itemHrid: ItemHrid;
    slotIndex: number;
}
