import {CharacterItem} from "src/MooLite/core/inventory/CharacterItem";

export class Inventory {
    _items: CharacterItem[] = [];

    updateItems(items: CharacterItem[]) {
        items.forEach(newItem => {
            const itemInInventory = this._items.find(item => {
                return item.id === newItem.id;
            });

            // If not in the inventory, add it and we're done
            if (!itemInInventory) {
                this._items.push(newItem)
                return;
            }

            const index = this._items.indexOf(itemInInventory);

            // If we have it, and it's at count 0, we must remove it
            if (newItem.count === 0) {
                this._items.splice(index, 1);
                return;
            }

            // Otherwise just update it
            this._items[index] = newItem;
        })
    }
}
