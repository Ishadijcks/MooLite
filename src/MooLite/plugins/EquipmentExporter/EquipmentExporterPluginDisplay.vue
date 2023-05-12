<script setup lang="ts">
import MooDivider from "src/components/atoms/MooDivider.vue";
import { EquipmentExporterPlugin } from "src/MooLite/plugins/EquipmentExporter/EquipmentExporterPlugin";
import { computed } from "vue";

const props = defineProps<{
    plugin: EquipmentExporterPlugin;
}>();

const equipmentData = computed(() => {
    return props.plugin.getEquipmentSummary()?.map((item) => {
        return {
            name: props.plugin.getItemName(item.itemHrid),
            enhancementLevel: item.enhancementLevel,
        };
    });
});

const exportData = computed(() => {
    return props.plugin.exportDetails();
});
</script>

<template>
    <div class="flex flex-col">
        <span>Voids Equipment Exporter</span>
        <MooDivider />

        <div class="flex flex-col">
            <span>Current Equipment: </span>
            <table v-if="equipmentData">
                <tr>
                    <th>Name</th>
                    <th>Level</th>
                </tr>
                <tr v-for="entry in equipmentData">
                    <th class="text-left">{{ entry.name }}</th>
                    <th>{{ entry.enhancementLevel }}</th>
                </tr>
            </table>
            <span v-else class="italic text-xs">No Equipment data found</span>
            <MooDivider />
            <button @click="exportData">Export to Clipboard</button>
            <MooDivider />
            <a style="text-align: center" href="https://amvoidguy.github.io/MWICombatSimulator/" target="_blank">
                Open Combat Sim
            </a>
        </div>
    </div>
</template>
