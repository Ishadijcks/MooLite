<script setup lang="ts">
import { computed } from "vue";
import MooDivider from "src/components/atoms/MooDivider.vue";
import { LootNotifierPlugin } from "./LootNotifierPlugin";
import { AbilityNotifierOptions } from "./AbilityNotifierOptions";

const props = defineProps<{
    plugin: LootNotifierPlugin;
}>();

const highlightAbilitiesOptions = [
    { text: "New", value: AbilityNotifierOptions.New },
    { text: "Never", value: AbilityNotifierOptions.Never },
    { text: "Always", value: AbilityNotifierOptions.Always },
];

const itemOptions = computed(() => {
    return props.plugin.allItems.map((item) => {
        return {
            text: item.name,
            value: item.hrid,
        };
    });
});

function selectedHridOnChange(event: any) {
    props.plugin.addHighlightedItemHrid(event.target.value);
}
</script>

<template>
    <div class="flex flex-col">
        <span class="text-center">{{ plugin.name }}</span>

        <MooDivider class="mb-2" />

        <div class="flex flex-row justify-between">
            <p>Highlight abilities</p>
            <select v-model="plugin.highlightAbilities" class="bg-divider w-24 text-dark-mode">
                <option v-for="option in highlightAbilitiesOptions" :value="option.value" class="bg-divider">
                    {{ option.text }}
                </option>
            </select>
        </div>

        <br />

        <div class="flex flex-row justify-between">
            <p>Item</p>
            <select @change="selectedHridOnChange($event)" class="bg-divider text-dark-mode">
                <option v-for="option in itemOptions" :value="option.value" class="bg-divider">
                    {{ option.text }}
                </option>
            </select>
        </div>

        <br />

        <p>Tracked items</p>

        <div v-for="itemHrid in props.plugin.highlightedItemHrids" class="flex flex-row justify-between">
            <p class="font-thin">
                {{ itemOptions.find((option) => (option.value as any) === itemHrid)?.text ?? "Unknown" }}
            </p>
            <button @click="plugin.removeHighlightedItemHrid(itemHrid)">🗑️</button>
        </div>
    </div>
</template>
