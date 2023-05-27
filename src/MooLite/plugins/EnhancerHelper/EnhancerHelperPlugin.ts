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

    getBlessedTeaTable(successTable: number[]): number[] {
        return this._game.enhancing.getBlessedTeaTable(successTable, 0.01);
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
        blessedTeaTable: number[],
        targetItemLevel: number,
        currentEnhancementLevel: number,
        totalMaterialCost: number
    ): number {
        const useProtection = <HTMLInputElement>document.getElementById("useProtect");
        const useBlessedTea = <HTMLInputElement>document.getElementById("blessedTea");
        let actionAmount = 0;
        if (useProtection.checked) {
            actionAmount = actionAmountTable[targetItemLevel] - actionAmountTable[currentEnhancementLevel];
        } else {
            actionAmount =
                (enhancementCostTable[targetItemLevel] - enhancementCostTable[currentEnhancementLevel]) /
                totalMaterialCost;
        }
        if (useBlessedTea.checked) {
            return actionAmount / blessedTeaTable[targetItemLevel];
        }
        return actionAmount;
    }

    getExperience(
        sTable: number[],
        actionAmount: number,
        itemLevel: number,
        currentLevel: number,
        targetLevel: number
    ): number {
        const wisdomTea = <HTMLInputElement>document.getElementById("wisdomTea");
        let experience = 0;
        const baseExpRate = 1.4 * itemLevel + 14;
        let remainingActionAmount = actionAmount;
        for (let i = currentLevel + 1; i < targetLevel; i++) {
            experience +=
                baseExpRate * i * actionAmount * sTable[i] +
                baseExpRate * i * (remainingActionAmount - actionAmount * sTable[i]) * (1 - sTable[i]) * 0.1;
            remainingActionAmount = actionAmount * sTable[i];
        }
        experience += baseExpRate * targetLevel;
        if (remainingActionAmount - 1 > 0) {
            experience += baseExpRate * targetLevel * (remainingActionAmount - 1) * 0.1;
        }
        if (wisdomTea.checked) {
            experience *= 1.15;
        }
        return experience;
    }

    getTimeTaken(actionAmount: number, enhancingLevel: number, itemLevel: number): number {
        let actionSpeedBonus = 1;
        if (enhancingLevel - itemLevel >= 0) {
            actionSpeedBonus = 1 + (enhancingLevel - itemLevel) / 100;
        }
        const baseTime = 12;
        return (baseTime / actionSpeedBonus) * actionAmount;
    }

    getTimeTakenString(totalSeconds: number): String {
        const totalMinutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = Math.floor(totalMinutes % 60);
        return hours + "h " + minutes + "m " + seconds + "s";
    }
}
