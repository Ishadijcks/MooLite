import {CharacterItem} from "src/MooLite/core/inventory/CharacterItem";
import {ItemDetail} from "src/MooLite/core/inventory/items/ItemDetail";
import {ItemHrid} from "src/MooLite/core/inventory/ItemHrid";
import {ItemCategoryHrid} from "src/MooLite/core/inventory/items/ItemCategoryHrid";
import {ItemCategoryDetail} from "src/MooLite/core/inventory/items/ItemCategoryDetail";
import {SimpleEventDispatcher} from "strongly-typed-events";

export interface ItemGained extends CharacterItem {
    delta: number;
}

export class Inventory {
    _characterItems: CharacterItem[] = [];

    private _onItemGained = new SimpleEventDispatcher<ItemGained>();

    public get onItemGained() {
        return this._onItemGained.asEvent();
    }

    public readonly itemDetailMap: Record<ItemHrid, ItemDetail>;
    public readonly itemCategoryDetailMap: Record<ItemCategoryHrid, ItemCategoryDetail>;
    public readonly sortedItems: ItemDetail[];
    public readonly sortedAlphabeticalItems: ItemDetail[];


    constructor(itemDetailMap: Record<ItemHrid, ItemDetail>, itemCategoryDetailMap: Record<ItemCategoryHrid, ItemCategoryDetail>) {
        this.itemDetailMap = itemDetailMap;
        this.itemCategoryDetailMap = itemCategoryDetailMap;

        this.sortedItems = Object.values(this.itemDetailMap).sort((a, b) => {
            return a.sortIndex - b.sortIndex;
        })
        this.sortedAlphabeticalItems = Object.values(this.itemDetailMap).sort((a, b) => {
            return a.name.localeCompare(b.name);
        })
    }

    updateCharacterItems(items: CharacterItem[], notify: boolean = true) {
        // TODO(@Isha): Add events
        items.forEach(newItem => {
            const itemInInventory = this._characterItems.find(item => {
                return item.id === newItem.id;
            });

            // If not in the inventory, add it and we're done
            if (!itemInInventory) {
                this._characterItems.push(newItem)
                if (notify) {
                    this._onItemGained.dispatch({
                        ...newItem,
                        delta: newItem.count,
                    });
                }

                return;
            }

            const index = this._characterItems.indexOf(itemInInventory);

            // If we have it, and it's at count 0, we must remove it
            if (newItem.count === 0) {
                this._characterItems.splice(index, 1);
                return;
            }

            // Otherwise just update it
            const delta = newItem.count - this._characterItems[index].count;
            this._characterItems[index] = newItem;

            if (notify) {
                this._onItemGained.dispatch({
                    ...this._characterItems[index],
                    delta: delta,
                });
            }
        })
    }

    public isAbilityBook(itemHrid: ItemHrid): boolean {
        return this.itemDetailMap[itemHrid].abilityBookDetail?.abilityHrid.toString().length > 0;
    }
}
