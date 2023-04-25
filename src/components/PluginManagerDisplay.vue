<script setup lang="ts">

import {PluginManager} from "src/MooLite/core/plugins/PluginManager";

const props = defineProps<{
    manager: PluginManager
}>()

</script>

<template>
    <div class="flex flex-col w-full bg-red-300">
        <span v-for="plugin in manager.plugins">
            <span>{{ plugin.name }}</span><br>
        </span>

    </div>
</template>

<style scoped>

</style>
