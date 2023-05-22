<script setup lang="ts">
import { computed, ref } from "vue";
import MooDivider from "src/components/atoms/MooDivider.vue";
import { EnhancerHelperPlugin } from "src/MooLite/plugins/EnhancerHelper/EnhancerHelperPlugin";

const props = defineProps<{
    plugin: EnhancerHelperPlugin;
}>();

const options = computed(() => {
    return props.plugin.getEnhanceableItems().map((item) => {
        return {
            text: item.name,
            value: item.hrid,
            itemLevel: item.itemLevel,
        };
    });
});

const materials = computed(() => {
    estimatedTotalCost.value = null;
    return props.plugin.getEnhancementMaterials(selectedHrid.value)?.map((item) => {
        return {
            name: props.plugin.getItemName(item.itemHrid),
            amount: item.count,
        };
    });
});

const currentEnhancingLevel = ref(props.plugin.getEnhancingLevel());
const currentToolBonus = ref(props.plugin.getEnhancingToolBonus(props.plugin.getEnhancingTool()));
const currentEnhancementLevel = ref(0);
const targetItemLevel = ref(1);
const protectCost = ref(1);
const selectedHrid = ref(options.value[0].value);
const protectLevel = ref();
const actionAmount = ref();
const protectionAmount = ref();
const estimatedTotalCost = ref();
const estimatedTotalExperience = ref();

const simulate = () => {
    //TODO BlessedTea Approximation and Experience Calculations
    let enhancementLevelBonus = 0;
    let totalMaterialCost = props.plugin.getTotalMaterialCost(
        <HTMLTableElement>document.getElementById("materialTable")
    );
    let itemLevel = props.plugin.getItemLevel(selectedHrid.value);
    let successTable = props.plugin.getEnhancementSuccessTable(
        currentEnhancingLevel.value + enhancementLevelBonus,
        itemLevel,
        currentToolBonus.value
    );
    let sTable = props.plugin.getEnhancementSTable(successTable);
    let zTable = props.plugin.getEnhancementZTable(successTable);
    let enhancementCostTable = props.plugin.getEnhancementCostTable(zTable, sTable, totalMaterialCost);
    let enhancementCostTableWithProtects = props.plugin.getEnhancementCostTableWithProtects(
        enhancementCostTable,
        successTable,
        protectCost.value,
        totalMaterialCost
    );
    protectLevel.value = props.plugin.getProtectLevel(enhancementCostTable, enhancementCostTableWithProtects);
    let actionAmountTable = props.plugin.getEnhancementActionsRequiredTable(
        enhancementCostTable,
        successTable,
        protectLevel.value,
        totalMaterialCost
    );
    let protectionAmountTable = props.plugin.getEnhancementProtectionsRequiredTable(
        enhancementCostTableWithProtects,
        actionAmountTable,
        protectCost.value,
        totalMaterialCost
    );
    protectionAmount.value = props.plugin.getProtectionAmount(
        protectionAmountTable,
        targetItemLevel.value,
        currentEnhancementLevel.value
    );
    actionAmount.value = props.plugin.getActionAmount(
        actionAmountTable,
        enhancementCostTable,
        targetItemLevel.value,
        currentEnhancementLevel.value,
        totalMaterialCost
    );
    estimatedTotalCost.value = totalMaterialCost * actionAmount.value + protectCost.value * protectionAmount.value;
    estimatedTotalExperience.value = props.plugin.getExperience();
};
</script>

<template>
    <div class="flex flex-col">
        <span>Voids Enhancement Helper</span>
        <MooDivider />
        <br />
        <span
            >Current Enhancing Level:
            <input
                class="bg-divider"
                style="width: 20%; float: right; color: white"
                type="number"
                v-model="currentEnhancingLevel"
        /></span>
        <span
            >Tool Bonus:
            <input
                class="bg-divider"
                style="width: 35%; float: right; color: white; text-align: right"
                type="number"
                v-model="currentToolBonus"
        /></span>
        <br />
        <span>Select Item to Enhance:</span>
        <select v-model="selectedHrid" class="bg-divider p-2" style="color: white">
            <option v-for="option in options" :value="option.value" class="bg-divider">
                {{ option.text }}
            </option>
        </select>
        <br />
        <span
            >Current Enhancement:
            <input
                type="number"
                class="bg-divider"
                style="width: 15%; float: right; color: white"
                v-model="currentEnhancementLevel"
        /></span>
        <span
            >Target Enhancement:
            <input
                type="number"
                class="bg-divider"
                style="width: 15%; float: right; color: white"
                v-model="targetItemLevel"
        /></span>
        <span>Enhancement Materials:</span>
        <table id="materialTable" v-if="materials">
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Cost Each</th>
            </tr>
            <tr v-for="entry in materials">
                <th class="text-left">{{ entry.name }}</th>
                <th>{{ entry.amount.toLocaleString() }}</th>
                <th><input class="bg-divider" style="width: 60%; color: white" type="number" value="1" /></th>
            </tr>
        </table>
        <br />
        <span
            >Protect Item Cost:
            <input
                class="bg-divider"
                type="number"
                style="width: 35%; float: right; color: white"
                v-model="protectCost"
            />
        </span>
        <br />
        <MooDivider />
        <span class="text-center">Options:</span>
        <span
            ><label for="useProtect"> Use protection item</label
            ><input type="checkbox" style="float: right" id="useProtect" name="useProtect"
        /></span>
        <span
            ><label for="enhancingTea">Enhancing Tea</label
            ><input type="checkbox" style="float: right" id="enhancingTea" name="enhancingTea"
        /></span>
        <span
            ><label for="superEnhancingTea">Super Enhancing Tea</label
            ><input type="checkbox" style="float: right" id="superEnhancingTea" name="superEnhancingTea"
        /></span>
        <span
            ><label for="wisdomTea">(WIP) Wisdom Tea</label
            ><input type="checkbox" style="float: right" id="wisdomTea" name="wisdomTea"
        /></span>
        <span
            ><label for="blessedTea">(WIP) Blessed Tea</label
            ><input type="checkbox" style="float: right" id="blessedTea" name="blessedTea"
        /></span>
    </div>
    <br />
    <div style="text-align: center; color: red"><button @click="simulate">Simulate!</button></div>
    <MooDivider />
    <br />
    <div v-if="estimatedTotalCost" class="flex flex-col">
        <div class="flex flex-col justify-between">
            <span class="text-center">Materials Used: </span>
            <table id="totalMaterialTable" v-if="materials">
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                </tr>
                <tr v-for="entry in materials">
                    <th class="text-left">{{ entry.name }}</th>
                    <th>{{ Math.round(entry.amount * actionAmount).toLocaleString() }}</th>
                </tr>
                <tr>
                    <th class="text-left">Protection Item</th>
                    <th>{{ Math.round(protectionAmount).toLocaleString() }}</th>
                </tr>
            </table>
            <MooDivider />
            <br />
            <span>Average Actions: {{ Math.round(actionAmount).toLocaleString() }}</span>
            <span>Total Cost: {{ Math.round(estimatedTotalCost).toLocaleString() }}</span>
            <span>Best Protection Level: {{ protectLevel }}</span>
            <!--<span>Experience Approximation: {{ Math.round(estimatedTotalExperience).toLocaleString() }}</span>-->
        </div>
    </div>
</template>
