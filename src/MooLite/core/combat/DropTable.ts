import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";

export interface DropTableLoot {
    dropRate: number;
    itemHrid: ItemHrid;
    maxCount: number;
    minCount: number;
}
