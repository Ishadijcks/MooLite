<script setup lang="ts">
import {PluginConfig} from "src/MooLite/core/plugins/config/PluginConfig";
import {PluginConfigType} from "src/MooLite/core/plugins/config/PluginConfigType";
import {computed} from "vue";
import {PluginConfigOption} from "src/MooLite/core/plugins/config/PluginConfigOption";

const props = defineProps<{
    config: PluginConfig;
}>()

const options = computed(() => {
    console.log("yaeee", props.config.options)
    return props.config.options as PluginConfigOption;
})

</script>

<template>
    <div class="flex flex-row">
        <span :title="config.description">{{ config.name }}</span>
        <span class="flex-1"></span>
        <input v-if="config.type === PluginConfigType.CheckBox" type="checkbox" v-model="config.value">


        <select v-if="config.type === PluginConfigType.Choice" v-model="config.value" class="bg-divider">
            {{ options }}
            <option v-for="option in options" :value="option.value" class="bg-divider">
                {{ option.text }}
            </option>
        </select>
    </div>
</template>
