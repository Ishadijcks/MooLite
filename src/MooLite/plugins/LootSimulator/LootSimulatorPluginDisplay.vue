<script setup lang="ts">
import { computed, Ref, ref } from "vue";
import { LootSimulatorPlugin } from "src/MooLite/plugins/LootSimulator/LootSimulatorPlugin";
import { ItemAmount } from "src/MooLite/core/inventory/items/ItemAmount";
import MooDivider from "src/components/atoms/MooDivider.vue";

const props = defineProps<{
    plugin: LootSimulatorPlugin;
}>();

const options = computed(() => {
    return props.plugin.allMonsters.sort().map((monsterDetail) => {
        return {
            text: monsterDetail.name,
            value: monsterDetail.hrid,
        };
    });
});

// TODO(@Isha): Improve by adding the monster you're currently fighting as default
const selectedHrid = ref(options.value[0].value);
const iterations = ref(1);

const loot: Ref<ItemAmount[]> = ref([]);

const simulate = () => {
    loot.value = props.plugin.simulate(selectedHrid.value, iterations.value);
};
</script>

<template>
    <div class="flex flex-col gap-2">
        <span class="text-center">{{ plugin.name }}</span>

        <MooDivider />

        <select v-model="selectedHrid" class="bg-divider p-2 text-dark-mode">
            <option v-for="option in options" :value="option.value" class="bg-divider">
                {{ option.text }}
            </option>
        </select>

        <input class="bg-divider p-2 text-dark-mode" type="number" v-model="iterations" />

        <button @click="simulate">Simulate!</button>

        <div class="flex flex-col">
            <div v-for="drop in loot" class="flex flex-row justify-between">
                <span>{{ plugin.itemDetailMap[drop.itemHrid].name }}</span>
                <span>{{ drop.count }}</span>
            </div>
        </div>
    </div>
</template>
