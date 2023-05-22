import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import { markRaw } from "vue";
import EnhancerHelperPluginDisplay from "src/MooLite/plugins/EnhancerHelper/EnhancerHelperPluginDisplay.vue";
import { ItemDetail } from "src/MooLite/core/inventory/items/ItemDetail";
import { ItemAmount } from "src/MooLite/core/inventory/items/ItemAmount";
import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";
import { CharacterItem } from "src/MooLite/core/inventory/CharacterItem";

export class EnhancerHelperPlugin extends MooLitePlugin {
    name: string = "Enhancer Helper";
    key = "enhancer-helper";
    description: string = "Various enhancing tools - By Void";

    tab: MooLiteTab = {
        icon: "💎",
        pluginName: this.name,
        componentName: "EnhancerHelperPluginDisplay",
        component: markRaw(EnhancerHelperPluginDisplay),
    };

    getEnhanceableItems(): ItemDetail[] {
        return this._game.inventory.sortedAlphabeticalItems.filter((item) => item.enhancementCosts != null);
    }

    getEnhancementMaterials(itemHrid: ItemHrid): ItemAmount[] | undefined | null {
        return this._game.inventory.sortedAlphabeticalItems.find((item) => item.hrid === itemHrid)?.enhancementCosts;
    }

    getItemName(itemHrid: ItemHrid): String | null {
        return this._game.inventory.itemDetailMap[itemHrid].name;
    }

    getEnhancingLevel(): number {
        return this._game.skills.getLevel("/skills/enhancing");
    }

    getEnhancementSuccessTable(enhancingLevel: number, itemLevel: number, toolBonus: number): number[] {
        let enhancementLevelBonus = 0;
        const enhancingTea = <HTMLInputElement>document.getElementById("enhancingTea");
        const superEnhancingTea = <HTMLInputElement>document.getElementById("superEnhancingTea");
        if (superEnhancingTea.checked) {
            enhancementLevelBonus = 6;
        } else if (enhancingTea.checked) {
            enhancementLevelBonus = 3;
        }
        return this._game.enhancing.getSuccessChanceTable(enhancingLevel + enhancementLevelBonus, itemLevel, toolBonus);
    }

    getEnhancementSTable(successTable: number[]): number[] {
        return this._game.enhancing.getSTable(successTable);
    }

    getEnhancementZTable(successTable: number[]): number[] {
        return this._game.enhancing.getZScoreTable(successTable);
    }

    getEnhancementCostTable(zTable: number[], sTable: number[], materialCost: number): number[] {
        return this._game.enhancing.getCostTable(zTable, sTable, materialCost);
    }

    getEnhancementCostTableWithProtects(
        costTable: number[],
        successTable: number[],
        protectCost: number,
        materialCost: number
    ): number[] {
        return this._game.enhancing.getCostWithProtects(costTable, successTable, protectCost, materialCost);
    }

    getEnhancementActionsRequiredTable(
        costTable: number[],
        successTable: number[],
        protectLevel: number,
        materialCost: number
    ): number[] {
        return this._game.enhancing.getActionsRequiredTable(costTable, successTable, protectLevel, materialCost);
    }

    getEnhancementProtectionsRequiredTable(
        costTable: number[],
        actionsTable: number[],
        protectCost: number,
        enhancementCost: number
    ): number[] {
        return this._game.enhancing.getProtectsRequiredTable(costTable, actionsTable, protectCost, enhancementCost);
    }

    getTotalMaterialCost(table: HTMLTableElement | null): number {
        let totalCost = 0;
        if (table) {
            for (let i = 1; i < table.rows.length; i++) {
                const amount = Number(table.rows[i].cells[1].innerHTML);
                const value = Object(table.rows[i].cells[2].firstChild).value;
                totalCost += amount * value;
            }
        }
        return totalCost;
    }

    getItemLevel(itemHrid: ItemHrid): number {
        return this._game.inventory.itemDetailMap[itemHrid].itemLevel;
    }

    getProtectLevel(costTable: number[], protectTable: number[]): number {
        return this._game.enhancing.recommendedProtectLevel(costTable, protectTable);
    }

    getEnhancingTool(): CharacterItem | null {
        const allItems = this._game.inventory._characterItems;
        let index = allItems.findIndex(
            (item: CharacterItem) => item.itemLocationHrid.toString() === "/item_locations/enhancing_tool"
        );
        if (index != -1) {
            return allItems[index];
        }
        return null;
    }

    getEnhancingToolBonus(item: CharacterItem | null): number {
        if (item == null) {
            return 0;
        } else {
            const enhancementLevel = item.enhancementLevel;
            const itemDetails = this._game.inventory.itemDetailMap[item.itemHrid];
            return this._game.enhancing.getEnhancingToolBonus(enhancementLevel, itemDetails);
        }
    }

    getProtectionAmount(
        protectionAmountTable: number[],
        targetItemLevel: number,
        currentEnhancementLevel: number
    ): number {
        const useProtection = <HTMLInputElement>document.getElementById("useProtect");
        if (useProtection.checked) {
            return protectionAmountTable[targetItemLevel] - protectionAmountTable[currentEnhancementLevel];
        }
        return 0;
    }

    getActionAmount(
        actionAmountTable: number[],
        enhancementCostTable: number[],
        targetItemLevel: number,
        currentEnhancementLevel: number,
        totalMaterialCost: number
    ): number {
        const useProtection = <HTMLInputElement>document.getElementById("useProtect");
        if (useProtection.checked) {
            return actionAmountTable[targetItemLevel] - actionAmountTable[currentEnhancementLevel];
        }
        return (
            (enhancementCostTable[targetItemLevel] - enhancementCostTable[currentEnhancementLevel]) / totalMaterialCost
        );
    }

    getExperience(): number {
        const wisdomTea = <HTMLInputElement>document.getElementById("wisdomTea");
        //TODO Big maths for experience
        let experience = 0;
        if (wisdomTea.checked) {
            experience *= 1.15;
        }
        return experience;
    }
}
