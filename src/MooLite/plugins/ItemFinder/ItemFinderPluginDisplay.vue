<script setup lang="ts">
import {computed, ref} from "vue";
import {ItemFinderPlugin} from "src/MooLite/plugins/ItemFinder/ItemFinderPlugin";
import MooDivider from "src/components/atoms/MooDivider.vue";

const props = defineProps<{
    plugin: ItemFinderPlugin
}>()


const options = computed(() => {
    return props.plugin.allItems.map(item => {
        return {
            text: item.name,
            value: item.hrid
        }
    })
})

const selectedHrid = ref(options.value[0].value)

const monsters = computed(() => {
    return props.plugin.findItemInLoot(selectedHrid.value);
});

const actions = computed(() => {
    return props.plugin.findItemInActions(selectedHrid.value);
});

const actionsInput = computed(() => {
    return actions.value.filter(action => {
        return action.type === "input";
    })
})
const actionsOutput = computed(() => {
    return actions.value.filter(action => {
        return action.type === "output";
    })
})

</script>

<template>
    <div class="flex flex-col">
        <span>{{ plugin.name }}</span>
        <br>
        <select v-model="selectedHrid" class="bg-divider">
            <option v-for="option in options" :value="option.value" class="bg-divider">
                {{ option.text }}
            </option>
        </select>

        <br>

        <div class="flex flex-col space-y-4">
            <div v-if="monsters.length > 0" class="flex flex-col">
                <span>Combat</span>
                <MooDivider/>
                <div v-for="monster in monsters" class="flex flex-row justify-between">
                    <span>{{ monster.monsterName }}</span>
                    <span>{{ monster.loot.dropRate }}%</span>
                    <span>
                    <span>{{ monster.loot.minCount }}</span>
                    <span v-if="monster.loot.minCount !== monster.loot.maxCount">-</span>
                    <span v-if="monster.loot.minCount !== monster.loot.maxCount">{{ monster.loot.maxCount }}</span>
                </span>
                </div>
            </div>

            <div v-if="actionsInput.length > 0" class="flex flex-col">
                <span>Input</span>
                <MooDivider/>
                <div v-for="action in actionsInput" class="flex flex-row justify-between">
                    <span>{{ action.action.name }}</span>
                </div>
            </div>

            <div v-if="actionsOutput.length > 0" class="flex flex-col">
                <span>Output</span>
                <MooDivider/>
                <div v-for="action in actionsOutput" class="flex flex-row justify-between">
                    <span>{{ action.action.category }}</span>
                    <span>{{ action.action.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
