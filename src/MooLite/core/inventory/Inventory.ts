import { CharacterItem } from "src/MooLite/core/inventory/CharacterItem";
import { ItemDetail } from "src/MooLite/core/inventory/items/ItemDetail";
import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";
import { ItemCategoryHrid } from "src/MooLite/core/inventory/items/ItemCategoryHrid";
import { ItemCategoryDetail } from "src/MooLite/core/inventory/items/ItemCategoryDetail";
import { SimpleEventDispatcher } from "strongly-typed-events";
import { ActionTypeHrid } from "src/MooLite/core/actions/ActionTypeHrid";
import { CharacterConsumable } from "src/MooLite/core/inventory/items/CharacterConsumable";
import { ItemLocationHrid } from "src/MooLite/core/inventory/ItemLocationHrid";
import { ItemLocationDetail } from "src/MooLite/core/inventory/ItemLocationDetail";

export interface ItemGained extends CharacterItem {
    delta: number;
}

export class Inventory {
    _characterItems: CharacterItem[] = [];

    private _onItemGained = new SimpleEventDispatcher<ItemGained>();

    public get onItemGained() {
        return this._onItemGained.asEvent();
    }

    private _characterDrinks: Record<ActionTypeHrid, (CharacterConsumable | null)[]> = {};
    private _characterFoods: Record<ActionTypeHrid, (CharacterConsumable | null)[]> = {};

    private _onConsumableDepleted = new SimpleEventDispatcher<CharacterConsumable>();

    public get onConsumableDepleted() {
        return this._onConsumableDepleted.asEvent();
    }

    public readonly itemDetailMap: Record<ItemHrid, ItemDetail>;
    public readonly itemCategoryDetailMap: Record<ItemCategoryHrid, ItemCategoryDetail>;
    public readonly itemLocationDetailMap: Record<ItemLocationHrid, ItemLocationDetail>;
    public readonly sortedItems: ItemDetail[];
    public readonly sortedAlphabeticalItems: ItemDetail[];

    constructor(
        itemDetailMap: Record<ItemHrid, ItemDetail>,
        itemCategoryDetailMap: Record<ItemCategoryHrid, ItemCategoryDetail>,
        itemLocationDetailMap: Record<ItemLocationHrid, ItemLocationDetail>
    ) {
        this.itemDetailMap = itemDetailMap;
        this.itemCategoryDetailMap = itemCategoryDetailMap;
        this.itemLocationDetailMap = itemLocationDetailMap;

        this.sortedItems = Object.values(this.itemDetailMap).sort((a, b) => {
            return a.sortIndex - b.sortIndex;
        });
        this.sortedAlphabeticalItems = Object.values(this.itemDetailMap).sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    }

    updateCharacterItems(items: CharacterItem[], notify: boolean = true) {
        items.forEach((newItem) => {
            const itemInInventory = this._characterItems.find((item) => {
                return item.id === newItem.id;
            });

            // If not in the inventory, add it and we're done
            if (!itemInInventory) {
                this._characterItems.push(newItem);
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
        });
    }

    updateCharacterDrinks(
        actionTypeDrinkSlotsMap: Record<ActionTypeHrid, (CharacterConsumable | null)[]>,
        notify: boolean = true
    ) {
        for (const actionType in actionTypeDrinkSlotsMap) {
            if (!notify) {
                return;
            }
            const consumables = actionTypeDrinkSlotsMap[actionType];

            if (this._characterDrinks[actionType] == null) {
                this._characterDrinks[actionType] = consumables;
            }

            this._characterDrinks[actionType].forEach((storedConsumable, i) => {
                if (storedConsumable === null) {
                    return;
                }
                const newConsumable = actionTypeDrinkSlotsMap[actionType][i];

                // If stored consumable state is active and new state = inactive,
                // dispatch the event. Checking for the difference stops the notification
                // from being sent out every time updateCharacterDrink is called.
                if (!newConsumable?.isActive && storedConsumable.isActive) {
                    this._onConsumableDepleted.dispatch(storedConsumable);
                }
            });

            // Save the new consumable slots state
            this._characterDrinks[actionType] = actionTypeDrinkSlotsMap[actionType];
        }
    }

    updateCharacterFood(actionTypeFoodSlotsMap: Record<ActionTypeHrid, CharacterConsumable[]>, notify: boolean = true) {
        for (const actionType in actionTypeFoodSlotsMap) {
            if (!notify) {
                return;
            }
            const consumables = actionTypeFoodSlotsMap[actionType];

            if (this._characterFoods[actionType] == null) {
                this._characterFoods[actionType] = consumables;
            }

            this._characterFoods[actionType].forEach((storedConsumable, i) => {
                if (storedConsumable === null) return;
                const newConsumable = actionTypeFoodSlotsMap[actionType][i];

                // If stored consumable state is active and new state = inactive,
                // dispatch the event. Checking for the difference stops the notification
                // from being sent out every time updateCharacterDrink is called.
                if (!newConsumable?.isActive && storedConsumable.isActive) {
                    this._onConsumableDepleted.dispatch(storedConsumable);
                }
            });

            // Save the new consumable slots state
            this._characterFoods[actionType] = actionTypeFoodSlotsMap[actionType];
        }
    }

    public isAbilityBook(itemHrid: ItemHrid): boolean {
        return this.itemDetailMap[itemHrid].abilityBookDetail?.abilityHrid.toString().length > 0;
    }

    public getEquippedFood(): Record<ActionTypeHrid, (CharacterConsumable | null)[]> {
        return this._characterFoods;
    }

    public getEquippedDrinks(): Record<ActionTypeHrid, (CharacterConsumable | null)[]> {
        return this._characterDrinks;
    }
}
