import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import { markRaw } from "vue";
import EnhancerHelperPluginDisplay from "src/MooLite/plugins/EnhancerHelper/EnhancerHelperPluginDisplay.vue";
import { ItemDetail } from "src/MooLite/core/inventory/items/ItemDetail";
import { ItemAmount } from "src/MooLite/core/inventory/items/ItemAmount";
import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";
import { CharacterItem } from "src/MooLite/core/inventory/CharacterItem";
import { DateFormatter } from "src/MooLite/util/DateFormatter";
import { EnhancingConstants } from "src/MooLite/core/enhancing/EnhancingConstants";

export class EnhancerHelperPlugin extends MooLitePlugin {
    name: string = "Enhancer Helper";
    key = "enhancer-helper";
    description: string = "Various enhancing tools - By Void";

    tab: MooLiteTab = {
        icon: "📡",
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
        return this._game.skills.getEnhancingLevel();
    }

    getEnhancementSuccessTable(
        enhancingLevel: number,
        itemLevel: number,
        toolBonus: number,
        useEnhancingTea: boolean,
        useSuperEnhancingTea: boolean
    ): number[] {
        let enhancementLevelBonus = 0;
        const enhancingTeaBuff =
            this._game.inventory.itemDetailMap[<ItemHrid>(<unknown>"/items/enhancing_tea")].consumableDetail.buffs[0]
                .flatBoost;
        const superEnhancingTeaBuff =
            this._game.inventory.itemDetailMap[<ItemHrid>(<unknown>"/items/super_enhancing_tea")].consumableDetail
                .buffs[0].flatBoost;
        if (useSuperEnhancingTea) {
            enhancementLevelBonus = superEnhancingTeaBuff;
        } else if (useEnhancingTea) {
            enhancementLevelBonus = enhancingTeaBuff;
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
        const blessedTeaBoost =
            this._game.inventory.itemDetailMap[<ItemHrid>(<unknown>"/items/blessed_tea")].consumableDetail.buffs[0]
                .flatBoost;
        return this._game.enhancing.getBlessedTeaTable(successTable, blessedTeaBoost);
    }

    getTotalMaterialCost(materials: { name: String | null; amount: number; value: number }[] | undefined): number {
        let totalCost = 0;
        if (materials) {
            for (let i = 0; i < materials.length; i++) {
                totalCost += materials[i].value * materials[i].amount;
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
        return this._game.inventory.getEnhancingTool();
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
        currentEnhancementLevel: number,
        useProtection: boolean
    ): number {
        if (useProtection) {
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
        totalMaterialCost: number,
        useProtection: boolean,
        useBlessedTea: boolean
    ): number {
        let actionAmount = 0;
        if (useProtection) {
            actionAmount = actionAmountTable[targetItemLevel] - actionAmountTable[currentEnhancementLevel];
        } else {
            actionAmount =
                (enhancementCostTable[targetItemLevel] - enhancementCostTable[currentEnhancementLevel]) /
                totalMaterialCost;
        }
        if (useBlessedTea) {
            return actionAmount / blessedTeaTable[targetItemLevel];
        }
        return actionAmount;
    }

    getExperience(
        sTable: number[],
        actionAmount: number,
        itemLevel: number,
        currentLevel: number,
        targetLevel: number,
        useWisdomTea: boolean
    ): number {
        const wisdomTeaBuff =
            1 +
            this._game.inventory.itemDetailMap[<ItemHrid>(<unknown>"/items/wisdom_tea")].consumableDetail.buffs[0]
                .flatBoost;
        let experience = 0;
        const baseExpRate = EnhancingConstants.experiencePerLevel * itemLevel + EnhancingConstants.experienceBonus;
        let remainingActionAmount = actionAmount;
        for (let i = currentLevel + 1; i < targetLevel; i++) {
            experience +=
                baseExpRate * i * actionAmount * sTable[i] +
                baseExpRate *
                    i *
                    (remainingActionAmount - actionAmount * sTable[i]) *
                    (1 - sTable[i]) *
                    EnhancingConstants.failureExperienceRate;
            remainingActionAmount = actionAmount * sTable[i];
        }
        experience += baseExpRate * targetLevel;
        if (remainingActionAmount - 1 > 0) {
            experience +=
                baseExpRate * targetLevel * (remainingActionAmount - 1) * EnhancingConstants.failureExperienceRate;
        }
        if (useWisdomTea) {
            experience *= wisdomTeaBuff;
        }
        return experience;
    }

    getTimeTaken(actionAmount: number, enhancingLevel: number, itemLevel: number): number {
        let actionSpeedBonus = 1 + this._game.skills.getSkillEfficiencyBonusRatio(itemLevel, enhancingLevel);
        const baseTime = EnhancingConstants.actionSpeed;
        return (baseTime / actionSpeedBonus) * actionAmount;
    }

    getTimeTakenString(totalSeconds: number): String {
        return DateFormatter.secondsToHHMMSS(totalSeconds);
    }
}
