<script setup lang="ts">

import PluginManagerDisplay from "src/components/PluginManagerDisplay.vue";

const pluginManager = window.mooLite.pluginManager
</script>

<template>
    <div class="w-64 flex flex-col">
        <span class="text-center">MooLite</span>
        <hr class="border-black mb-2"/>
        <div class="flex flex-row">

            <div class="flex flex-col flex-grow">
                <PluginManagerDisplay :manager="pluginManager"></PluginManagerDisplay>
            </div>
            <div class="flex flex-col items-end space-y-2">
                <span class="p-2 border-2 border-black bg-gray-300">P</span>
                <span class="p-2 border-2 border-black">X</span>
                <span class="p-2 border-2 border-black">Y</span>
                <span class="p-2 border-2 border-black">N</span>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
