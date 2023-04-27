import {MooLitePlugin} from "src/MooLite/core/plugins/MooLitePlugin";
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";
import {markRaw} from "vue";
import ItemFinderPluginDisplay from "src/MooLite/plugins/ItemFinder/ItemFinderPluginDisplay.vue";
import {ItemDetail} from "src/MooLite/core/inventory/items/ItemDetail";
import {ItemHrid} from "src/MooLite/core/inventory/ItemHrid";
import {ItemFoundInLoot} from "src/MooLite/plugins/ItemFinder/ItemFoundInLoot";
import {DropTableLoot} from "src/MooLite/core/combat/DropTable";

export class ItemFinderPlugin extends MooLitePlugin {
    name: string = "Item Finder";
    description: string = "Inspect the possible ways to obtain items";


    tab: MooLiteTab = {
        icon: '📖',
        pluginName: this.name,
        componentName: "ItemFinderPluginDisplay",
        component: markRaw(ItemFinderPluginDisplay),
    };

    public get allItems(): ItemDetail[] {
        return this._game.inventory.sortedAlphabeticalItems;
    }

    public findItemInLoot(item: ItemHrid): ItemFoundInLoot[] {
        return this._game.combat.monsterDetailList.filter(monster => {
            const dropTable = monster.dropTable.concat(monster.rareDropTable);
            const foundItem = dropTable.find(loot => loot.itemHrid === item);
            return foundItem != undefined;
        }).map(monster => {
            return {
                monsterName: monster.name,
                loot: monster.dropTable.concat(monster.rareDropTable).find(loot => loot.itemHrid === item) as DropTableLoot,
            }
        });

    }

    findItemInActions(item: ItemHrid) {
        return undefined;
    }
}
