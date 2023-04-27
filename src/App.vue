<script setup lang="ts">
import {computed, ref} from "vue";
import {MooLite} from "src/MooLite/core/MooLite";
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";
import PluginManagerDisplay from "src/components/PluginManagerDisplay.vue";
import MooDivider from "src/components/atoms/MooDivider.vue";
import PluginTabItem from "src/components/plugins/PluginTabItem.vue";

const props = defineProps<{
    client: MooLite
}>()

const pluginManager = computed(() => {
    return props.client.pluginManager;
});

const tabs = computed(() => {
    return pluginManager.value.tabs;
})

const activeTab = ref(0);

const findPlugin = (name: string) => {
    return pluginManager.value.plugins.find(plugin => plugin.name === name);
}

const setActiveTab = (index: number) => {
    activeTab.value = index;
}

</script>

<template>
    <div class="w-64 flex flex-col h-full shadow-xl bg-background-game text-dark-mode">
        <span class="text-center">MooLite</span>
        <MooDivider/>

        <div class="flex flex-row h-full">
            <div class="flex flex-col flex-grow p-2">
                <PluginManagerDisplay v-if="activeTab === 0" :manager="pluginManager"></PluginManagerDisplay>
                <div v-for="(tab, index) in tabs" v-show="index + 1 === activeTab">
                    <component v-bind:is="tab.componentName" :plugin="findPlugin(tab.pluginName)"></component>
                </div>
            </div>
            <div class="flex flex-col bg-divider">
                <PluginTabItem @click="setActiveTab(0)"
                               :tab="{pluginName: 'Plugins', icon: '🔧'} as MooLiteTab"></PluginTabItem>
                <PluginTabItem v-for="(tab, index) in tabs" @click="setActiveTab(index+1)" :tab="tab"></PluginTabItem>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
