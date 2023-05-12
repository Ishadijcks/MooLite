import { CharacterItem } from "src/MooLite/core/inventory/CharacterItem";

export interface LootBoxOpened {
    lootBox: CharacterItem;
    gainedItems: CharacterItem[];
}
