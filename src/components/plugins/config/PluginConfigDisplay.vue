<script setup lang="ts">
import {PluginConfig} from "src/MooLite/core/plugins/config/PluginConfig";
import {PluginConfigType} from "src/MooLite/core/plugins/config/PluginConfigType";

const props = defineProps<{
    config: PluginConfig;
}>()

</script>

<template>
    <div class="flex flex-row">
        <span :title="config.description">{{ config.name }}</span>
        <span class="flex-1"></span>
        <input v-if="config.type === PluginConfigType.CheckBox" type="checkbox" v-model="config.value">
    </div>
</template>
