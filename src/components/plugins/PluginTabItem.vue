<script setup lang="ts">
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";

const props = defineProps<{
    tab: MooLiteTab
}>()

</script>

<template>
    <span class="p-1 hover:bg-space-600 cursor-pointer" :title="tab.pluginName">
        {{ tab.icon }}
    </span>
</template>
