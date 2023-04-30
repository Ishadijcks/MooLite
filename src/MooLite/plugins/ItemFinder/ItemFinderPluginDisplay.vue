<script setup lang="ts">
import {computed, ref} from "vue";
import {ItemFinderPlugin} from "src/MooLite/plugins/ItemFinder/ItemFinderPlugin";
import MooDivider from "src/components/atoms/MooDivider.vue";
import {ItemHrid} from "src/MooLite/core/inventory/ItemHrid";
import ItemAmountDisplay from "src/components/atoms/ItemAmountDisplay.vue";
import MonsterIcon from "src/components/atoms/MonsterIcon.vue";
import ActionIcon from "src/components/atoms/ActionIcon.vue";

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

const actionsDropTable = computed(() => {
    return props.plugin.findItemInActionDropTable(selectedHrid.value);
})

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

const getItemName = (itemHrid: ItemHrid): string => {
    return props.plugin.allItems.find(item => {
        return item.hrid === itemHrid
    })?.name as string;
}

</script>

<template>
    <div class="flex flex-col">
        <span class="text-center">{{ plugin.name }}</span>
        <MooDivider class="mb-2"/>
        <select v-model="selectedHrid" class="bg-divider p-2">
            <option v-for="option in options" :value="option.value" class="bg-divider">
                {{ option.text }}
            </option>
        </select>

        <br>

        <div class="flex flex-col space-y-8">
            <div v-if="monsters.length">
                <span class="font-bold">Combat</span>
                <div class="bg-divider p-2">
                    <table class="w-full">
                        <tr v-for="monster in monsters">
                            <td>
                                <MonsterIcon class="w-6 h-6" :monster="monster.monsterHrid"></MonsterIcon>
                            </td>
                            <td class="text-left">{{ monster.monsterName }}</td>
                            <td :title="'1/' + Math.round(1 / (monster.loot.dropRate))">
                                {{ monster.loot.dropRate * 100 }}%
                            </td>
                            <td>
                                <span>{{ monster.loot.minCount }}</span>
                                <span v-if="monster.loot.minCount !== monster.loot.maxCount">-</span>
                                <span v-if="monster.loot.minCount !== monster.loot.maxCount">{{
                                    monster.loot.maxCount
                                    }}</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>


            <div v-if="actionsDropTable.length">
                <span class="font-bold">Gathering</span>
                <div class="bg-divider p-2">
                    <table class="w-full">
                        <tr v-for="action in actionsDropTable">
                            <td>
                                <ActionIcon class="w-6 h-6"
                                            :actionHrid="action.action.hrid"
                                            :itemHrid="action.loot.itemHrid"
                                            :showAction="action.action.dropTable?.length > 1"
                                ></ActionIcon>
                            </td>
                            <td>{{ action.action.name }}</td>
                            <td :title="'1/' + Math.round(1 / (action.loot.dropRate))">
                                {{ action.loot.dropRate * 100 }}%
                            </td>
                            <td>
                                <span>{{ action.loot.minCount }}</span>
                                <span v-if="action.loot.minCount !== action.loot.maxCount">-</span>
                                <span v-if="action.loot.minCount !== action.loot.maxCount">{{
                                    action.loot.maxCount
                                    }}</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>


            <div v-if="actionsInput.length">
                <span class="font-bold">Ingredient</span>
                <div class="flex flex-col space-y-4">
                    <div v-for="action in actionsInput" class="bg-divider p-1 flex flex-col">
                        <span class="text-center w-full">{{ action.action.name }}</span>
                        <div class="flex flex-row justify-around items-center">
                            <ItemAmountDisplay
                                    :name="getItemName(input.itemHrid)"
                                    :item-amount="input"
                                    v-for="input in action.action.inputItems"/>
                            <span class="text-xxs">➡</span>
                            <ItemAmountDisplay
                                    :name="getItemName(output.itemHrid)"
                                    :item-amount="output"
                                    v-for="output in action.action.outputItems"/>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="actionsOutput.length">
                <span class="font-bold">Product</span>
                <MooDivider/>
                <div class="flex flex-col space-y-4">
                    <div v-for="action in actionsOutput" class="bg-divider p-1 flex flex-col">
                        <span class="text-center w-full">{{ action.action.name }}</span>
                        <div class="flex flex-row justify-around items-center">
                            <ItemAmountDisplay
                                    :name="getItemName(input.itemHrid)"
                                    :item-amount="input"
                                    v-for="input in action.action.inputItems"/>
                            <span class="text-xxs">➡</span>
                            <ItemAmountDisplay
                                    :name="getItemName(output.itemHrid)"
                                    :item-amount="output"
                                    v-for="output in action.action.outputItems"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
