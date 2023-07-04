import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { CharacterConsumable } from "src/MooLite/core/inventory/items/CharacterConsumable";
import { PluginAuthorCredits } from "src/MooLite/core/plugins/PluginAuthorCredits";

export class ConsumableNotifierPlugin extends MooLitePlugin {
    name = "Consumable Notifier";
    key = "consumable-notifier";
    description = "Notifies you when a consumable is used up completely";

    credits: PluginAuthorCredits = {
        author: "Granttank2",
        maintainer: "Isha",
    };

    onConsumableDepleted(consumable: CharacterConsumable): void {
        this._game.notifier.sendBrowserNotification(`Consumable depleted`, {
            body: `${consumable.actionTypeHrid}, Slot ${consumable.slotIndex + 1} (${consumable.itemHrid})`,
        });
    }
}
