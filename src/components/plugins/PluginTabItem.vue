<script setup lang="ts">
import {MooLiteTab} from "src/MooLite/core/plugins/MooLiteTab";

const props = defineProps<{
    tab: MooLiteTab
}>()

</script>

<template>
    <span class="p-1 hover:bg-primary-hover cursor-pointer" :title="tab.title">
        {{ tab.icon }}
    </span>
</template>
