import { SimpleEventDispatcher } from "strongly-typed-events";
import { CharacterItem } from "src/MooLite/core/inventory/CharacterItem";
import { LootBoxOpened } from "src/MooLite/core/lootboxes/LootBoxOpened";

export class LootBoxes {
    private _onLootBoxOpened = new SimpleEventDispatcher<LootBoxOpened>();

    public get onLootBoxOpened() {
        return this._onLootBoxOpened.asEvent();
    }

    public lootBoxOpened(openedItem: CharacterItem, gainedItems: CharacterItem[]) {
        this._onLootBoxOpened.dispatch({
            lootBox: openedItem,
            gainedItems: gainedItems,
        });
    }
}
