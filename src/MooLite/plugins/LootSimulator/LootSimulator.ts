import {MonsterDetail} from "src/MooLite/core/combat/monsters/MonsterDetail";
import {ItemHrid} from "src/MooLite/core/inventory/ItemHrid";
import {Random} from "src/MooLite/util/Random";
import {ItemAmount} from "src/MooLite/core/inventory/items/ItemAmount";

export class LootSimulator {
    public static simulate(monster: MonsterDetail, iterations: number): ItemAmount[] {
        const totalLoot: Record<ItemHrid, number> = {}

        for (let i = 0; i < iterations; i++) {
            monster.dropTable.concat(monster.rareDropTable).forEach(entry => {
                const success = Random.booleanWithProbability(entry.dropRate);
                if (!success) {
                    return;
                }

                // MaxCount + 1 as it is inclusive
                const count = Random.intBetween(entry.minCount, entry.maxCount + 1);
                if (totalLoot[entry.itemHrid]) {
                    totalLoot[entry.itemHrid] += count;
                } else {
                    totalLoot[entry.itemHrid] = count;
                }
            })
        }
        return Object.keys(totalLoot).map(itemHrid => {
            return {
                itemHrid: itemHrid as unknown as ItemHrid,
                count: totalLoot[itemHrid as unknown as ItemHrid],
            }
        }).sort((a, b) => {
            return b.count - a.count
        });
    }
}
