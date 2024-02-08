<script setup lang="ts">
import { Ref, ref } from "vue";
import { EnhancingTrackerPlugin } from "src/MooLite/plugins/EnhancingTracker/EnhancingTrackerPlugin";
import { ItemAmount } from "src/MooLite/core/inventory/items/ItemAmount";
import MooDivider from "src/components/atoms/MooDivider.vue";
import ItemIcon from "src/components/atoms/ItemIcon.vue";

const props = defineProps<{
    plugin: EnhancingTrackerPlugin;
}>();

const loot: Ref<ItemAmount[]> = ref([]);
</script>

<template>
    <div class="flex flex-col gap-2">
        <span class="text-center">{{ props.plugin.name }}</span>

        <MooDivider />

        <div v-if="plugin.itemBeingEnhancedHrid" class="flex flex-col gap-2">
            <div class="flex items-center justify-between">
                <p>Enhancing {{ plugin.itemDetailMap[plugin.itemBeingEnhancedHrid].name }}</p>
                <ItemIcon :item="plugin.itemBeingEnhancedHrid" class="inline" />
            </div>

            <hr />

            <div>
                <p>Items consumed</p>
                <p v-if="Object.keys(plugin.itemsConsumed).length === 0">None!</p>
                <div v-for="(value, key) in plugin.itemsConsumed" class="flex items-center justify-between">
                    <span>
                        <ItemIcon :item="key" class="inline" />
                        {{ plugin.itemDetailMap[key].name }}
                    </span>
                    <p>{{ value }}</p>
                </div>
            </div>

            <p>Best enhancement level: {{ plugin.bestEnhancementLevel }}</p>
            <p>Success rate: {{ plugin.successRate.toFixed(2) }}% ({{ plugin.successes }} / {{ plugin.failures }})</p>
        </div>

        <div v-if="!plugin.itemBeingEnhancedHrid" class="flex flex-col gap-2">
            <p>It doesn't look like you're enhancing anything at the moment. Try it out!</p>
        </div>
    </div>
</template>
