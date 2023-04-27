<script setup lang="ts">

import {PluginManager} from "src/MooLite/core/plugins/PluginManager";
import PluginListItem from "src/components/plugins/PluginListItem.vue";

const props = defineProps<{
    manager: PluginManager
}>()

</script>

<template>
    <div class="flex flex-col w-full">
        <PluginListItem v-for="plugin in manager.plugins" :plugin="plugin" :key="plugin.name"/>
    </div>
</template>

<style scoped>

</style>
