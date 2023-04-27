<script setup lang="ts">
import {MooLitePlugin} from "src/MooLite/plugins/MooLitePlugin";

const props = defineProps<{
    plugin: MooLitePlugin
}>()

</script>

<template>
    <div class="flex flex-row space-x-1 items-center">
        <span>{{plugin.name}}</span>
        <span class="flex-1"></span>
        <span class="text-xs hover:opacity-40 cursor-pointer">⚙️</span>
        <input class="cursor-pointer" type="checkbox" v-model="plugin.isEnabled">
    </div>
</template>
