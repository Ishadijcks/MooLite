import { ItemLocationHrid } from "src/MooLite/core/inventory/ItemLocationHrid";

export interface ItemLocationDetail {
    conflictingOtherItemLocationHrids: ItemLocationHrid[];
    hrid: ItemLocationHrid;
    isMultiItem: boolean;
    name: string;
    type: string;
}