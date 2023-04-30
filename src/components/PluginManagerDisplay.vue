<script setup lang="ts">
import { PluginManager } from "src/MooLite/core/plugins/PluginManager";
import PluginListItem from "src/components/plugins/PluginListItem.vue";

const props = defineProps<{
    manager: PluginManager;
}>();
</script>

<template>
    <div class="flex flex-col w-full space-y-2">
        <div v-for="plugin in manager.plugins" class="px-2 border-r-2 border-divider">
            <PluginListItem :plugin="plugin" :key="plugin.name" />
        </div>
    </div>
</template>

<style scoped></style>
