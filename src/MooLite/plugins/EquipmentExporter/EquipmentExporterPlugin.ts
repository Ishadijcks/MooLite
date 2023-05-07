import { markRaw } from "vue";
import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import EquipmentExporterPluginDisplay from "src/MooLite/plugins/EquipmentExporter/EquipmentExporterPluginDisplay.vue";
import EquippedItems from "src/MooLite/core/inventory/items/EquippedItems";
import {CharacterAbility} from "src/MooLite/core/abilities/CharacterAbility";

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

    getEquipmentSummary(): Array<EquippedItems> | null {
        const equippedItems = new Array<EquippedItems>();
        const abilities = this._game.combat.getCombatUnit().combatAbilities;
        const combatFood = this._game.combat.getCombatUnit().combatConsumables;
        const allItems = this._game.inventory._characterItems;
        ["head", "body", "legs", "feet", "hands", "main_hand", "two_hand", "off_hand", "pouch", "neck", "earrings", "ring"].forEach((location) => {
            let equipmentLocation = "/item_locations/" + location;
            let index = allItems.findIndex(item => item.itemLocationHrid === equipmentLocation);
            if (index != -1) {
                equippedItems.push(new EquippedItems(String(allItems[index].itemHrid), allItems[index].enhancementLevel));
            }
        });
        for(let i = 0; i < abilities.length; i++) {
            equippedItems.push(new EquippedItems(String(abilities[i].abilityHrid), abilities[i].level));
        }
        for(let i = 0; i < combatFood.length; i++) {
            equippedItems.push(new EquippedItems(String(combatFood[i].itemHrid), 0));
        }
        return equippedItems;
    }

    getLevel(skillHrid): String {
        return this._game.skills.getLevel(skillHrid);
    }

    getAbilities(): CharacterAbility[] {
        return this._game.combat.getCombatUnit().combatAbilities;
    }

}