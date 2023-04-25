<script setup lang="ts">

import {PluginManager} from "src/MooLite/core/plugins/PluginManager";

const props = defineProps<{
    manager: PluginManager
}>()

</script>

<template>
    <div class="flex flex-col">
        <span v-for="plugin in manager.plugins">{{ plugin.name }}</span>
    </div>
</template>

<style scoped>

</style>
