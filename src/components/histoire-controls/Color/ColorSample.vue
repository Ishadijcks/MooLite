<script setup lang="ts">
export interface ColorSampleProps {
    colorClass: string;
    value: string;
}

const props = defineProps<ColorSampleProps>();
</script>

<template>
    <div class="flex flex-col w-64 bg-neutral-600 text-dark-mode rounded-mwi-default">
        <div class="h-16 rounded-mwi-default" :class="colorClass"></div>
        <div class="flex flex-col px-1.5 py-1">
            <code class="text-sm">{{ colorClass }}</code>
            <code class="text-xs">{{ value }}</code>
        </div>
    </div>
</template>
