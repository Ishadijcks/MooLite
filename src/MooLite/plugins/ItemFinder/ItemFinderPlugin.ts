import {MooLitePlugin} from "src/MooLite/core/plugins/MooLitePlugin";
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";
import {markRaw} from "vue";
import ItemFinderPluginDisplay from "src/MooLite/plugins/ItemFinder/ItemFinderPluginDisplay.vue";
import {ItemDetail} from "src/MooLite/core/inventory/items/ItemDetail";

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

}
