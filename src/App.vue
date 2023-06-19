<script setup lang="ts">
import { computed, ref } from "vue";
import { MooLite } from "src/MooLite/core/MooLite";
import { MooLiteTab } from "src/MooLite/core/plugins/MooLiteTab";
import PluginManagerDisplay from "src/components/PluginManagerDisplay.vue";
import MooDivider from "src/components/atoms/MooDivider.vue";
import PluginTabItem from "src/components/plugins/PluginTabItem.vue";

const defaultPluginWidth: string = "w-64";

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

const findPlugin = (name: string) => {
    return pluginManager.value.plugins.find((plugin) => plugin.name === name);
};

const setActiveTab = (index: number) => {
    if (activeTab.value === index) {
        activeTab.value = -1;
    } else {
        activeTab.value = index;
    }
};
</script>

<template>
    <div
        class="flex flex-col h-full shadow-sm overflow-clip bg-background-game text-dark-mode shadow-space-200"
        
    >
        <MooDivider class="border-b-4" />

        <div class="flex flex-row h-full">
            <div v-if="activeTab > -1" class="flex flex-col flex-grow p-2 overflow-auto">
                <PluginManagerDisplay v-if="activeTab === 0" :manager="pluginManager" :class="defaultPluginWidth"></PluginManagerDisplay>
                <div 
                    v-for="(tab, index) in tabs" 
                    v-show="index + 1 === activeTab"
                    :class="{
                        [tab.width ? tab.width : defaultPluginWidth]: true,
                    }"
                >
                    <component v-bind:is="tab.componentName" :plugin="findPlugin(tab.pluginName)" ></component>
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
