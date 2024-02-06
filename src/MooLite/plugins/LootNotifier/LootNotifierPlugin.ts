import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { ItemGained } from "src/MooLite/core/inventory/Inventory";
import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";
import { PluginAuthorCredits } from "src/MooLite/core/plugins/PluginAuthorCredits";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import { markRaw } from "vue";
import { ItemDetail } from "src/MooLite/core/inventory/items/ItemDetail";
import LootNotifierPluginDisplay from "src/MooLite/plugins/LootNotifier/LootNotifierPluginDisplay.vue";
import { AbilityNotifierOptions } from "./AbilityNotifierOptions";

interface LootNotifierPluginData {
    highlightAbilities: AbilityNotifierOptions;
    highlightedItemHrids: ItemHrid[];
}

export class LootNotifierPlugin extends MooLitePlugin {
    name: string = "Loot Notifier";
    key = "loot-notifier";
    description: string = "Notifies you whenever you get certain drops";

    credits: PluginAuthorCredits = {
        author: "Isha",
        maintainer: "Isha",
    };

    tab: MooLiteTab = {
        icon: "🪙",
        pluginName: this.name,
        componentName: "LootNotifierPluginDisplay",
        component: markRaw(LootNotifierPluginDisplay),
    };

    save(): LootNotifierPluginData {
        return {
            highlightAbilities: this.highlightAbilities,
            highlightedItemHrids: this.highlightedItemHrids,
        };
    }

    load(data: LootNotifierPluginData): void {
        this.highlightAbilities = data.highlightAbilities;
        this.highlightedItemHrids = data.highlightedItemHrids;
    }

    highlightAbilities: AbilityNotifierOptions = AbilityNotifierOptions.New;
    highlightedItemHrids: ItemHrid[] = [];

    public get allItems(): ItemDetail[] {
        return this._game.inventory.sortedAlphabeticalItems;
    }

    addHighlightedItemHrid(itemHrid: ItemHrid) {
        this.highlightedItemHrids.push(itemHrid);
    }

    removeHighlightedItemHrid(itemHrid: ItemHrid) {
        const i = this.highlightedItemHrids.indexOf(itemHrid, 0);
        if (i > -1) {
            this.highlightedItemHrids.splice(i, 1);
        }
    }

    onItemGained(itemGained: ItemGained) {
        this.highlightedItemHrids.forEach((hrid) => {
            if (itemGained.itemHrid === hrid) {
                const name = this._game.inventory.itemDetailMap[hrid].name;
                this._game.notifier.sendBrowserNotification(`Highlighted drop: ${itemGained.delta} ${name}`);
                return;
            }
        });

        if (this._game.inventory.isAbilityBook(itemGained.itemHrid)) {
            const itemDetail = this._game.inventory.itemDetailMap[itemGained.itemHrid];
            const name = itemDetail.name;
            const abilityHrid = itemDetail.abilityBookDetail.abilityHrid;
            const isNew = !this._game.abilities.hasUnlockedAbility(abilityHrid);

            switch (this.highlightAbilities) {
                case AbilityNotifierOptions.Never:
                    break;
                case AbilityNotifierOptions.New:
                    if (isNew) {
                        this._game.notifier.sendBrowserNotification(`New ability book: ${name}`);
                    }
                    break;
                case AbilityNotifierOptions.Always:
                    this._game.notifier.sendBrowserNotification(`${isNew ? "New a" : "A"}bility book: ${name}`);
                    break;
            }
        }
    }
}
