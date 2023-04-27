import {AbilityBookDetail} from "src/MooLite/core/abilities/AbilityBookDetail";
import {ItemCategoryHrid} from "src/MooLite/core/inventory/items/ItemCategoryHrid";
import {ConsumableDetail} from "src/MooLite/core/inventory/items/ConsumableDetail";
import {EquipmentDetail} from "src/MooLite/core/inventory/items/EquipmentDetail";
import {ItemHrid} from "src/MooLite/core/inventory/ItemHrid";
import {ItemAmount} from "src/MooLite/core/inventory/items/ItemAmount";

export interface ItemDetail {
    abilityBookDetail: AbilityBookDetail;
    categoryHrid: ItemCategoryHrid;
    consumableDetail: ConsumableDetail;
    description: string;
    // TODO(@Isha): Or what?
    enhancementCosts: ItemAmount[] | null;
    equipmentDetail: EquipmentDetail;
    hrid: ItemHrid;
    isOpenable: boolean;
    isTradable: true;
    itemLevel: number;
    name: string;
    sellPrice: number;
    sortIndex: number;
}
