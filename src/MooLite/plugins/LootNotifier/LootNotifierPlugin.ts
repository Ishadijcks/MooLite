import {MooLitePlugin} from "src/MooLite/core/plugins/MooLitePlugin";
import {ItemGained} from "src/MooLite/core/inventory/Inventory";
import {PluginConfig} from "src/MooLite/core/plugins/config/PluginConfig";
import {PluginConfigType} from "src/MooLite/core/plugins/config/PluginConfigType";
import {ItemHrid} from "src/MooLite/core/inventory/ItemHrid";
import {PluginBuiltinOption} from "src/MooLite/core/plugins/config/PluginBuiltinOption";

enum AbilityNotifierOptions {
    Never = "never",
    New = "new",
    Always = "always",
}

export class LootNotifierPlugin extends MooLitePlugin {
    name: string = "Loot Notifier";
    key = "loot-notifier";
    description: string = "Notifies you whenever you get certain drops";

    _isEnabled: boolean = true;


    config: PluginConfig[] = [
        {
            type: PluginConfigType.Choice,
            name: "Items",
            description: "Select the item to highlight",
            key: "highlighted-items",
            value: "",
            options: PluginBuiltinOption.Items,
        },
        {
            type: PluginConfigType.Choice,
            name: "Abilities",
            description: "Send a notification whenever you loot an ability",
            key: "highlight-abilities",
            value: AbilityNotifierOptions.New,
            options: [
                {text: "Never", value: AbilityNotifierOptions.Never},
                {text: "New", value: AbilityNotifierOptions.New},
                {text: "Always", value: AbilityNotifierOptions.Always},
            ]
        }
    ];

    public get highlightedItemHrids(): ItemHrid[] {
        return this.getConfig("highlighted-items").value.replaceAll(", ", ",").split(",")
    }

    onItemGained(itemGained: ItemGained) {
        console.log(itemGained);
        this.highlightedItemHrids.forEach(hrid => {
            if (itemGained.itemHrid === hrid) {
                const name = this._game.inventory.itemDetailMap[hrid].name;
                this._game.notifier.sendBrowserNotification(`Highlighted drop: ${itemGained.delta} ${name}`)
                return;
            }
            if (this._game.inventory.isAbilityBook(itemGained.itemHrid)) {
                const name = this._game.inventory.itemDetailMap[hrid].name;
                this._game.notifier.sendBrowserNotification(`Ability book: ${name}`)
            }
        });
    }

}
