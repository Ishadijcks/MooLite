<script setup lang="ts">
import MooDivider from "src/components/atoms/MooDivider.vue";
import {EquipmentExporterPlugin} from "src/MooLite/plugins/EquipmentExporter/EquipmentExporterPlugin";
import {computed} from "vue";

const props = defineProps<{
  plugin: EquipmentExporterPlugin;
}>();

const equipmentData = computed(() => {
  return props.plugin.getEquipmentSummary();
});

const exportDetails = () => {
  try {
    const equipmentData = props.plugin.getEquipmentSummary();
    let abilityLevel0 = "1";
    let abilityLevel1 = "1";
    let abilityLevel2 = "1";
    let abilityLevel3 = "1";
    let drinks = [];
    let food = [];
    let abilities = ["", "", "", ""];
    let equippedAbilities = props.plugin.getAbilities();
    let attackLevel = props.plugin.getLevel("/skills/attack");
    let staminaLevel = props.plugin.getLevel("/skills/stamina");
    let intelligenceLevel = props.plugin.getLevel("/skills/intelligence");
    let powerLevel = props.plugin.getLevel("/skills/power");
    let defenseLevel = props.plugin.getLevel("/skills/defense");
    let rangedLevel = props.plugin.getLevel("/skills/ranged");
    let magicLevel = props.plugin.getLevel("/skills/magic");
    const zone = "/actions/combat/fly";
    const simulationTime = "100";
    let equipment = {"/equipment_types/head": {hrid: "", enhancementLevel: 0},
      "/equipment_types/body": {hrid: "", enhancementLevel: 0},
      "/equipment_types/legs": {hrid: "", enhancementLevel: 0},
      "/equipment_types/feet": {hrid: "", enhancementLevel: 0},
      "/equipment_types/hands": {hrid: "", enhancementLevel: 0},
      "/equipment_types/main_hand": {hrid: "", enhancementLevel: 0},
      "/equipment_types/two_hand": {hrid: "", enhancementLevel: 0},
      "/equipment_types/off_hand": {hrid: "", enhancementLevel: 0},
      "/equipment_types/pouch": {hrid: "", enhancementLevel: 0},
      "/equipment_types/neck": {hrid: "", enhancementLevel: 0},
      "/equipment_types/earrings": {hrid: "", enhancementLevel: 0},
      "/equipment_types/ring": {hrid: "", enhancementLevel: 0},
    };
    if(equipmentData != null) {
      for (let i = 0; i < equipmentData?.length; i++) {
        if(equipmentData[i].name.includes("_hood") || equipmentData[i].name.includes("_hat") || equipmentData[i].name.includes("_helmet")){
          equipment["/equipment_types/head"].hrid = equipmentData[i].name;
          equipment["/equipment_types/head"].enhancementLevel = equipmentData[i].level;
        } else if(equipmentData[i].name.includes("_chaps") || equipmentData[i].name.includes("_bottoms") || equipmentData[i].name.includes("_legs")){
          equipment["/equipment_types/legs"].hrid = equipmentData[i].name;
          equipment["/equipment_types/legs"].enhancementLevel = equipmentData[i].level;
        } else if(equipmentData[i].name.includes("_tunic") || equipmentData[i].name.includes("_top") || equipmentData[i].name.includes("_body")){
          equipment["/equipment_types/body"].hrid = equipmentData[i].name;
          equipment["/equipment_types/body"].enhancementLevel = equipmentData[i].level;
        } else if(equipmentData[i].name.includes("_bracers") || equipmentData[i].name.includes("_gloves") || equipmentData[i].name.includes("_gauntlets")){
          equipment["/equipment_types/hands"].hrid = equipmentData[i].name;
          equipment["/equipment_types/hands"].enhancementLevel = equipmentData[i].level;
        } else if(equipmentData[i].name.includes("_boots")){
          equipment["/equipment_types/feet"].hrid = equipmentData[i].name;
          equipment["/equipment_types/feet"].enhancementLevel = equipmentData[i].level;
        } else if(equipmentData[i].name.includes("_pouch")){
          equipment["/equipment_types/pouch"].hrid = equipmentData[i].name;
          equipment["/equipment_types/pouch"].enhancementLevel = equipmentData[i].level;
        } else if(equipmentData[i].name.includes("necklace")){
          equipment["/equipment_types/neck"].hrid = equipmentData[i].name;
          equipment["/equipment_types/neck"].enhancementLevel = equipmentData[i].level;
        } else if(equipmentData[i].name.includes("earrings")){
          equipment["/equipment_types/earrings"].hrid = equipmentData[i].name;
          equipment["/equipment_types/earrings"].enhancementLevel = equipmentData[i].level;
        } else if(equipmentData[i].name.includes("ring_")){
          equipment["/equipment_types/ring"].hrid = equipmentData[i].name;
          equipment["/equipment_types/ring"].enhancementLevel = equipmentData[i].level;
        } else if(equipmentData[i].name.includes("_sword") || equipmentData[i].name.includes("_spear") || equipmentData[i].name.includes("_mace") || equipmentData[i].name.includes("_bludgeon")){
          equipment["/equipment_types/main_hand"].hrid = equipmentData[i].name;
          equipment["/equipment_types/main_hand"].enhancementLevel = equipmentData[i].level;
        } else if(equipmentData[i].name.includes("_bulwark") || equipmentData[i].name.includes("_slasher")){
          equipment["/equipment_types/main_hand"].hrid = equipmentData[i].name;
          equipment["/equipment_types/main_hand"].enhancementLevel = equipmentData[i].level;
        } else if(equipmentData[i].name.includes("_buckler") || equipmentData[i].name.includes("_dirk") || equipmentData[i].name.includes("_shield")) {
          equipment["/equipment_types/off_hand"].hrid = equipmentData[i].name;
          equipment["/equipment_types/off_hand"].enhancementLevel = equipmentData[i].level;
        } else if(equipmentData[i].name.includes("coffee")) {
          drinks.push(equipmentData[i].name);
        } else if(equipmentData[i].name.includes("donut") || equipmentData[i].name.includes("cake") || equipmentData[i].name.includes("gummy") || equipmentData[i].name.includes("yogurt")) {
          food.push(equipmentData[i].name);
        }
      }
    }
    for (let equip in equipment){
      if(equipment[equip].hrid === ""){
        equipment[equip] = null;
      }
    }
    while(drinks.length < 3){
      drinks.push("");
    }
    while(food.length < 3){
      food.push("");
    }
    let index = 0;
    for(let ability in equippedAbilities){
      abilities[index] = String(equippedAbilities[ability].abilityHrid);
      if(index == 0) {
        abilityLevel0 = String(equippedAbilities[ability].level);
      } else if(index == 1) {
        abilityLevel1 = String(equippedAbilities[ability].level);
      } else if(index == 2) {
        abilityLevel2 = String(equippedAbilities[ability].level);
      } else if(index == 3) {
        abilityLevel3 = String(equippedAbilities[ability].level);
      }
      index ++;
    }

    const exportSet = {"player": {attackLevel, magicLevel, powerLevel, rangedLevel, defenseLevel, staminaLevel, intelligenceLevel, "equipment": equipment}, drinks, food, abilities, abilityLevel0, abilityLevel1, abilityLevel2, abilityLevel3, zone, simulationTime};
    let copyValue = JSON.stringify(exportSet);

    if (!navigator.clipboard) {
      throw new Error("Browser don't have support for native clipboard.");
    }

    navigator.clipboard.writeText(copyValue);
    alert("Copied Equipment to Clipboard");
  } catch (error) {
    console.log(error.toString());
  }
};

</script>

<template>
  <div class="flex flex-col">
    <span>Equipment Exporter</span>
    <MooDivider />

    <div class="flex flex-col">
      <span>Current Equipment: </span>
      <table v-if="equipmentData">
        <tr>
          <th>Name</th>
          <th>Level</th>
        </tr>
        <tr v-for="entry in equipmentData">
          <th class="text-left">{{ entry.name.slice(entry.name.lastIndexOf("/") + 1) }}</th>
          <th>{{ entry.level }}</th>
        </tr>
      </table>
      <span v-else class="italic text-xs"
      >No Equipment data found</span
      >
      <MooDivider />
      <button @click="exportDetails">Export to Clipboard</button>
      <MooDivider />
      <a style="text-align:center" href="https://amvoidguy.github.io/MWICombatSimulator/" target="_blank">
        Open Combat Sim
      </a>
    </div>
  </div>
</template>
