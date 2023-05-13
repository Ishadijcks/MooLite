import { markRaw } from "vue";
import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import EquipmentExporterPluginDisplay from "src/MooLite/plugins/EquipmentExporter/EquipmentExporterPluginDisplay.vue";
import { CharacterItem } from "src/MooLite/core/inventory/CharacterItem";
import { CharacterConsumable } from "src/MooLite/core/inventory/items/CharacterConsumable";
import { CharacterAbility } from "src/MooLite/core/abilities/CharacterAbility";
import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";
import { SkillHrid } from "src/MooLite/core/skills/SkillHrid";
import { ActionTypeHrid } from "src/MooLite/core/actions/ActionTypeHrid";

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
            if (
                !String(itemLocations[location].hrid).includes("tool") &&
                !String(itemLocations[location].hrid).includes("inventory")
            ) {
                let index = allItems.findIndex((item: CharacterItem) => String(item.itemLocationHrid) === location);
                if (index != -1) {
                    equippedItems.push(allItems[index]);
                }
            }
        }
        return equippedItems;
    }

    getFoodSummary(): Record<ActionTypeHrid, CharacterConsumable[]> | null {
        return this._game.inventory.getEquippedFood();
    }

    getDrinkSummary(): Record<ActionTypeHrid, CharacterConsumable[]> | null {
        return this._game.inventory.getEquippedDrinks();
    }

    getLevel(skillHrid: SkillHrid): number {
        return this._game.skills.getLevel(skillHrid);
    }

    getAbilities(): CharacterAbility[] | null {
        return this._game.abilities.equippedAbilities;
    }

    getItemName(itemHrid: ItemHrid): String | null {
        return this._game.inventory.itemDetailMap[itemHrid].name;
    }

    exportDetails() {
        const equipmentData = this.getEquipmentSummary();
        const skillDetailMap = this._game.skills.skillDetailMap;
        let drinks = this.getDrinkSummary();
        let food = this.getFoodSummary();
        let abilities = this.getAbilities();
        let levels = [];
        for (let skill in skillDetailMap) {
            const skillName = String(skillDetailMap[skill].hrid);
            const skillLevel = this.getLevel(skillDetailMap[skill].hrid);
            levels.push({ skillName, skillLevel });
        }
        let attackLevel = levels.find((skill) => skill.skillName === "/skills/attack")?.skillLevel;
        let staminaLevel = levels.find((skill) => skill.skillName === "/skills/stamina")?.skillLevel;
        let intelligenceLevel = levels.find((skill) => skill.skillName === "/skills/intelligence")?.skillLevel;
        let powerLevel = levels.find((skill) => skill.skillName === "/skills/power")?.skillLevel;
        let defenseLevel = levels.find((skill) => skill.skillName === "/skills/defense")?.skillLevel;
        let rangedLevel = levels.find((skill) => skill.skillName === "/skills/ranged")?.skillLevel;
        let magicLevel = levels.find((skill) => skill.skillName === "/skills/magic")?.skillLevel;
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
