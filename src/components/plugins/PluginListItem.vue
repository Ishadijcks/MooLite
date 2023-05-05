<script setup lang="ts">
import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import PluginConfigDisplay from "src/components/plugins/config/PluginConfigDisplay.vue";
import { computed, ref } from "vue";

const props = defineProps<{
    plugin: MooLitePlugin;
}>();

const showConfig = ref(false);

const hasConfig = computed(() => {
    return props.plugin.hasConfig;
});
const toggleConfig = () => {
    showConfig.value = !showConfig.value;
};
</script>

<template>
    <div class="flex flex-row space-x-1 items-center py-2">
        <span :title="plugin.description">{{ plugin.name }}</span>
        <span class="flex-1"></span>
        <span class="text-xs hover:opacity-40 cursor-pointer" @click="toggleConfig">
            <span v-show="hasConfig">⚙️</span>
        </span>
        <input class="cursor-pointer" type="checkbox" v-model="plugin.isEnabled" :disabled="!plugin.canBeDisabled" />
    </div>
    <div v-if="hasConfig && showConfig" class="flex flex-col pl-2 py-2 space-y-2">
        <PluginConfigDisplay v-for="config in plugin.config" :config="config"></PluginConfigDisplay>
    </div>
</template>

<style></style>
