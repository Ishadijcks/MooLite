import { EquipmentTypeHrid } from "src/MooLite/core/equipment/EquipmentTypeHrid";
import { ItemLocationHrid } from "src/MooLite/core/inventory/ItemLocationHrid";

export interface EquipmentTypeDetail {
    hrid: EquipmentTypeHrid;
    itemLocationHrid: ItemLocationHrid;
    name: string;
    sortIndex: number;
}
