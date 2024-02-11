<script setup lang="ts">
import { computed, ref } from "vue";
import { MooLite } from "src/MooLite/core/MooLite";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import PluginManagerDisplay from "src/components/PluginManagerDisplay.vue";
import MooDivider from "src/components/atoms/MooDivider.vue";
import PluginTabItem from "src/components/plugins/PluginTabItem.vue";
import { PluginTabWidth } from "src/MooLite/core/plugins/PluginTabWidth";
import PluginCreditsDisplay from "src/components/plugins/PluginCreditsDisplay.vue";
import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";

const defaultPluginWidth: PluginTabWidth = "w-64";

const props = defineProps<{
    client: MooLite;
}>();

const pluginManager = computed(() => {
    return props.client.pluginManager;
});

const tabs = computed(() => {
    return pluginManager.value.tabs;
});

const activeTab = ref(0);

const findPlugin = (name: string): MooLitePlugin => {
    return pluginManager.value.plugins.find((plugin) => plugin.name === name) as unknown as MooLitePlugin;
};

const setActiveTab = (index: number) => {
    if (activeTab.value === index) {
        activeTab.value = -1;
    } else {
        activeTab.value = index;
    }
};

if (findPlugin("MooLite").getConfig("mooliteclient/start-collapsed").value === true) {
    setActiveTab(-1);
}
</script>

<template>
    <div class="flex flex-col h-full shadow-sm overflow-clip bg-background-game text-dark-mode shadow-space-200">
        <MooDivider class="border-b-4" />

        <div id="moolite-container" class="flex flex-row h-full">
            <div v-if="activeTab > -1" class="flex flex-col flex-grow p-2 overflow-auto">
                <PluginManagerDisplay
                    v-if="activeTab === 0"
                    :manager="pluginManager"
                    :class="defaultPluginWidth"
                ></PluginManagerDisplay>
                <div
                    v-for="(tab, index) in tabs"
                    v-show="index + 1 === activeTab"
                    class="flex flex-col justify-between"
                    :class="(tab.width ?? defaultPluginWidth) + ' h-full'"
                >
                    <component v-bind:is="tab.componentName" :plugin="findPlugin(tab.pluginName)"></component>
                    <div class="flex flex-col">
                        <MooDivider class="mb-1" />
                        <PluginCreditsDisplay :plugin="findPlugin(tab.pluginName)" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col h-full overflow-auto shrink-0 bg-divider">
                <template v-for="(tab, index) in tabs">
                    <PluginTabItem
                        v-if="index === 1"
                        @click="setActiveTab(0)"
                        :tab="{pluginName: 'Plugins', icon: '🔧'} as MooLiteTab"
                        :class="{ 'bg-space-950': 0 === activeTab }"
                    ></PluginTabItem>
                    <PluginTabItem
                        @click="setActiveTab(index + 1)"
                        :tab="tab"
                        :class="{ 'bg-space-950': index + 1 === activeTab }"
                    ></PluginTabItem>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
