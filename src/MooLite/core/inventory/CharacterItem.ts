import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";
import { ItemLocationHrid } from "src/MooLite/core/inventory/ItemLocationHrid";

export interface CharacterItem {
    count: number;
    enhancementLevel: number;
    hash: string;
    id: number;
    itemHrid: ItemHrid;
    itemLocationHrid: ItemLocationHrid;
    offlineCount: number;
}
