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
import { PluginAuthorCredits } from "src/MooLite/core/plugins/PluginAuthorCredits";

export class EquipmentExporterPlugin extends MooLitePlugin {
    name: string = "Equipment Exporter";
    key = "equipment-exporter";
    description: string = "Export your equipment details for the Combat Sim";

    tab: MooLiteTab = {
        icon: "🗡",
        pluginName: this.name,
        componentName: "EquipmentExporterPluginDisplay",
        component: markRaw(EquipmentExporterPluginDisplay),
    };

    credits: PluginAuthorCredits = {
        author: "Void",
        maintainer: "Isha",
    };

    getEquipmentSummary(): CharacterItem[] | null {
        const equippedItems = [];
        const allItems = this._game.inventory._characterItems;
        const itemLocations = this._game.inventory.itemLocationDetailMap;
        for (let location in itemLocations) {
            const locationName = itemLocations[location].hrid.toString();
            if (!locationName.includes("tool") && !locationName.includes("inventory")) {
                let index = allItems.findIndex((item: CharacterItem) => item.itemLocationHrid.toString() === location);
                if (index != -1) {
                    equippedItems.push(allItems[index]);
                }
            }
        }
        return equippedItems;
    }

    getFoodSummary(): Record<ActionTypeHrid, (CharacterConsumable | null)[]> {
        return this._game.inventory.getEquippedFood();
    }

    getDrinkSummary(): Record<ActionTypeHrid, (CharacterConsumable | null)[]> {
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
        const drinks = this.getDrinkSummary();
        const food = this.getFoodSummary();
        const abilities = this.getAbilities();
        const zone = "/actions/combat/fly";
        const simulationTime = "100";
        const exportSet = {
            player: {
                attackLevel: this.getLevel("/skills/attack"),
                magicLevel: this.getLevel("/skills/magic"),
                powerLevel: this.getLevel("/skills/power"),
                rangedLevel: this.getLevel("/skills/ranged"),
                defenseLevel: this.getLevel("/skills/defense"),
                staminaLevel: this.getLevel("/skills/stamina"),
                intelligenceLevel: this.getLevel("/skills/intelligence"),
                equipment: equipmentData,
            },
            drinks,
            food,
            abilities,
            zone,
            simulationTime,
        };
        const copyValue = JSON.stringify(exportSet);
        if (!navigator.clipboard) {
            throw new Error("Browser don't have support for native clipboard.");
        }

        try {
            void navigator.clipboard
                .writeText(copyValue)
                .then(() => alert("Current set has been copied to clipboard."));
        } catch (err) {
            alert("Error copying to clipboard: " + err);
        }
    }
}
