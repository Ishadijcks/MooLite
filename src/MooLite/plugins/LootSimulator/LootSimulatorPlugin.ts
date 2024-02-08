import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import LootSimulatorPluginDisplay from "src/MooLite/plugins/LootSimulator/LootSimulatorPluginDisplay.vue";
import { markRaw } from "vue";
import { MonsterHrid } from "src/MooLite/core/combat/monsters/MonsterHrid";
import { MonsterDetail } from "src/MooLite/core/combat/monsters/MonsterDetail";
import { ItemAmount } from "src/MooLite/core/inventory/items/ItemAmount";
import { LootSimulator } from "src/MooLite/plugins/LootSimulator/LootSimulator";
import { PluginAuthorCredits } from "src/MooLite/core/plugins/PluginAuthorCredits";
import { ItemDetail } from "src/MooLite/core/inventory/items/ItemDetail";
import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";

export class LootSimulatorPlugin extends MooLitePlugin {
    name: string = "Loot Simulator";
    key = "loot-simulator";
    description: string = "Try your 'luck' against some of the monsters in the game!";

    credits: PluginAuthorCredits = {
        author: "Isha",
        maintainer: "Isha",
    };

    tab: MooLiteTab = {
        icon: "👩‍💻",
        pluginName: this.name,
        componentName: "LootSimulatorPluginDisplay",
        component: markRaw(LootSimulatorPluginDisplay),
    };

    public get allMonsters(): MonsterDetail[] {
        return this._game.combat.monsterDetailList;
    }

    public get itemDetailMap(): Record<ItemHrid, ItemDetail> {
        return this._game.inventory.itemDetailMap;
    }

    simulate(monsterHrid: MonsterHrid, iterations: number): ItemAmount[] {
        const monster = this._game.combat.monsterDetailMap[monsterHrid];
        return LootSimulator.simulate(monster, iterations);
    }
}
