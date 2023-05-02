import { ActionTypeHrid } from "src/MooLite/core/actions/ActionTypeHrid";
import { ConsumableSlotTypeHrid } from "src/MooLite/core/inventory/ConsumableSlotTypeHrid";
import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";

export interface CharacterConsumable {
    actionTypeHrid: ActionTypeHrid;
    consumableSlotTypeHrid: ConsumableSlotTypeHrid;
    duration: number;
    isActive: boolean;
    itemHrid: ItemHrid;
    slotIndex: number;
}
