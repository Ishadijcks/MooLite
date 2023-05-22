import { ItemDetail } from "src/MooLite/core/inventory/items/ItemDetail";

export class Enhancing {
    public readonly enhancementLevelSuccessRateTable: number[];
    public readonly enhancementLevelTotalBonusMultiplierTable: number[];

    constructor(enhancementLevelSuccessRateTable: number[], enhancementLevelTotalBonusMultiplierTable: number[]) {
        this.enhancementLevelSuccessRateTable = enhancementLevelSuccessRateTable;
        this.enhancementLevelTotalBonusMultiplierTable = enhancementLevelTotalBonusMultiplierTable;
    }

    getSuccessChanceTable(currentEnhancingLevel: number, currentItemLevel: number, toolBonus: number): number[] {
        let successChanceTable: number[] = [0];
        for (let i = 0; i < this.enhancementLevelSuccessRateTable.length; i++) {
            let baseChance = this.enhancementLevelSuccessRateTable.at(i);
            const levelBuff = 0.0005 * Math.max(currentEnhancingLevel - currentItemLevel, 0);
            const levelDebuff = Math.min((currentEnhancingLevel / currentItemLevel + 1) / 2, 1);
            if (baseChance != undefined) {
                const actualChance = baseChance * (toolBonus + levelBuff + levelDebuff);
                successChanceTable.push(actualChance);
            }
        }
        successChanceTable.push(successChanceTable[successChanceTable.length - 1]);
        return successChanceTable;
    }

    getZScoreTable(successChanceTable: number[]): number[] {
        let zScoreTable = [];
        for (let i = 0; i < successChanceTable.length - 1; i++) {
            const zScore = (1 - successChanceTable[i + 1]) * this.multiply(successChanceTable.slice(1, i + 1));
            zScoreTable.push(zScore);
        }
        return zScoreTable;
    }

    getSTable(successChanceTable: number[]): number[] {
        let sTable = [1 - successChanceTable[1]];
        for (let i = 1; i < successChanceTable.length - 1; i++) {
            const sValue = this.multiply(successChanceTable.slice(1, i + 1));
            sTable.push(sValue);
        }
        return sTable;
    }

    getCostTable(zScoreTable: number[], sTable: number[], materialCost: number): number[] {
        let costs = [0];
        let multArray = [];
        let sumTable = [];
        for (let i = 0; i < zScoreTable.length; i++) {
            multArray[i] = zScoreTable[i] * (i + 1);
            sumTable.push(multArray.slice(0, i + 1).reduce((a, b) => a + b, 0));
        }
        for (let i = 1; i < sTable.length; i++) {
            const cost = ((sumTable[i - 1] + sTable[i] * i) / sTable[i]) * materialCost;
            costs.push(cost);
        }
        return costs;
    }

    getActionsRequiredTable(
        costTable: number[],
        successChanceTable: number[],
        protectLevel: number,
        enhancementCost: number
    ): number[] {
        let actions = [0];
        for (let i = 1; i < successChanceTable.length; i++) {
            let currentActionAmount = 0;
            if (protectLevel >= i) {
                currentActionAmount = costTable[i] / enhancementCost;
            } else {
                currentActionAmount =
                    (actions[i - 1] + 1 - (1 - successChanceTable[i]) * actions[i - 2]) / successChanceTable[i];
            }
            actions.push(currentActionAmount);
        }
        return actions;
    }

    getProtectsRequiredTable(
        costTable: number[],
        actionAmountTable: number[],
        protectCost: number,
        enhanceCost: number
    ): number[] {
        let protects = [];
        for (let i = 0; i < costTable.length; i++) {
            protects.push((costTable[i] - actionAmountTable[i] * enhanceCost) / protectCost);
        }
        return protects;
    }

    getCostWithProtects(
        costTable: number[],
        successChanceTable: number[],
        protectCost: number,
        materialCost: number
    ): number[] {
        let costsWithProtects = [costTable[0], costTable[1]];
        for (let i = 2; i < successChanceTable.length; i++) {
            const cost = Math.min(
                costTable[i],
                (costsWithProtects[i - 1] +
                    (protectCost * (1 - successChanceTable[i]) + materialCost) -
                    (1 - successChanceTable[i]) * costsWithProtects[i - 2]) /
                    successChanceTable[i]
            );
            costsWithProtects.push(cost);
        }
        return costsWithProtects;
    }

    recommendedProtectLevel(costTable: number[], costWithProtectTable: number[]): number {
        for (let i = 2; i < costTable.length; i++) {
            if (costTable[i] > costWithProtectTable[i]) {
                return i - 1;
            }
        }
        return 20;
    }

    private multiply(numbers: number[]): number {
        let result = 1;
        for (let num in numbers) {
            result = result * numbers[num];
        }
        return result;
    }

    getEnhancingToolBonus(enhancementLevel: number, itemDetails: ItemDetail): number {
        const enhancementLevelMulti = this.enhancementLevelTotalBonusMultiplierTable;
        const baseBonus = itemDetails.equipmentDetail.noncombatStats.enhancingSuccess;
        const enhancementBonus =
            itemDetails.equipmentDetail.noncombatEnhancementBonuses.enhancingSuccess *
            enhancementLevelMulti[enhancementLevel];
        return baseBonus + enhancementBonus;
    }
}
