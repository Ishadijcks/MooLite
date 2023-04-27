import {ItemCategoryHrid} from "src/MooLite/core/inventory/items/ItemCategoryHrid";

export interface ItemCategoryDetail {
    hrid: ItemCategoryHrid;
    name: string;
    pluralName: string;
    sortIndex: number;
}
