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

</script>

<template>
    <div class="flex flex-col">
        <span>Loot Simulator</span>
        <select v-model="selectedHrid" class="bg-divider">
            <option v-for="option in options" :value="option.value" class="bg-divider">
                {{ option.text }}
            </option>
        </select>

        <br>

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

<!--        <div v-if="actions.length > 0" class="flex flex-col">-->
<!--            <span>Actions</span>-->
<!--            <MooDivider/>-->
<!--            <div v-for="action in actions" class="flex flex-row justify-between">-->
<!--                <span>{{ monster.monsterName }}</span>-->
<!--                <span>{{ monster.loot.dropRate }}%</span>-->
<!--                <span>-->
<!--                    <span>{{ monster.loot.minCount }}</span>-->
<!--                    <span v-if="monster.loot.minCount !== monster.loot.maxCount">-</span>-->
<!--                    <span v-if="monster.loot.minCount !== monster.loot.maxCount">{{ monster.loot.maxCount }}</span>-->
<!--                </span>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>
