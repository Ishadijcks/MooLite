import { markRaw } from "vue";
import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import EquipmentExporterPluginDisplay from "src/MooLite/plugins/EquipmentExporter/EquipmentExporterPluginDisplay.vue";
import { CharacterItem } from "src/MooLite/core/inventory/CharacterItem";
import { CharacterConsumable } from "src/MooLite/core/inventory/items/CharacterConsumable";
import { CharacterAbility } from "src/MooLite/core/abilities/CharacterAbility";

export class EquipmentExporterPlugin extends MooLitePlugin {
    name: string = "Equipment Exporter";
    key = "equipment-exporter";
    description: string = "Export your equipment details for the Combat Sim - By Void";

    tab: MooLiteTab = {
        icon: "🗡",
        pluginName: this.name,
        componentName: "EquipmentExporterPluginDisplay",
        component: markRaw(EquipmentExporterPluginDisplay),
    };

    getEquipmentSummary(): CharacterItem[] | null {
        const equippedItems = [];
        const allItems = this._game.inventory._characterItems;
        const itemLocations = this._game.inventory.itemLocationDetailMap;
        for (let location in itemLocations) {
            if (!itemLocations[location].hrid.includes("tool")) {
                let index = allItems.findIndex((item) => item.itemLocationHrid === location);
                if (index != -1) {
                    equippedItems.push(allItems[index]);
                }
            }
        }
        return equippedItems;
    }

    getFoodSummary(): Array<CharacterConsumable> | null {
        return this._game.inventory.getEquippedFood();
    }

    getDrinkSummary(): Array<CharacterConsumable> | null {
        return this._game.inventory.getEquippedDrinks();
    }

    getLevel(skillHrid): String {
        return this._game.skills.getLevel(skillHrid);
    }

    getAbilities(): Array<CharacterAbility> | null {
        return this._game.abilities.equippedAbilities;
    }

    getItemName(itemHrid): String | null {
        return this._game.inventory.itemDetailMap[itemHrid].name;
    }

    exportDetails() {
        const equipmentData = this.getEquipmentSummary();
        let drinks = this.getDrinkSummary();
        let food = this.getFoodSummary();
        let abilities = this.getAbilities();
        let attackLevel = this.getLevel("/skills/attack");
        let staminaLevel = this.getLevel("/skills/stamina");
        let intelligenceLevel = this.getLevel("/skills/intelligence");
        let powerLevel = this.getLevel("/skills/power");
        let defenseLevel = this.getLevel("/skills/defense");
        let rangedLevel = this.getLevel("/skills/ranged");
        let magicLevel = this.getLevel("/skills/magic");
        const zone = "/actions/combat/fly";
        const simulationTime = "100";
        const exportSet = {
            player: {
                attackLevel,
                magicLevel,
                powerLevel,
                rangedLevel,
                defenseLevel,
                staminaLevel,
                intelligenceLevel,
                equipment: equipmentData,
            },
            drinks,
            food,
            abilities,
            zone,
            simulationTime,
        };
        let copyValue = JSON.stringify(exportSet);
        if (!navigator.clipboard) {
            throw new Error("Browser don't have support for native clipboard.");
        }

        navigator.clipboard.writeText(copyValue);
        alert("Copied Equipment to Clipboard");
    }
}
