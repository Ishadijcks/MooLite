<script setup lang="ts">
import {computed, ref} from "vue";
import {ItemFinderPlugin} from "src/MooLite/plugins/ItemFinder/ItemFinderPlugin";

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

        <span>Item info</span>
    </div>
</template>
