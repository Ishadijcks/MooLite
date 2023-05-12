import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { CharacterConsumable } from "src/MooLite/core/inventory/items/CharacterConsumable";

export class ConsumableNotifierPlugin extends MooLitePlugin {
    name = "Consumable Notifier";
    key = "consumable-notifier";
    description = "Notifies you when a consumable is used up completely";

    onConsumableDepleted(consumable: CharacterConsumable): void {
        this._game.notifier.sendBrowserNotification(`Consumable depleted`, {
            body: `${consumable.actionTypeHrid}, Slot ${consumable.slotIndex + 1} (${consumable.itemHrid})`,
        });
    }
}
