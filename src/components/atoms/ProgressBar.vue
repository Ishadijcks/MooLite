<script setup lang="ts">
const props = defineProps<{
    percentage: number;
}>();
</script>

<template>
    <div class="overflow-hidden h-4 text-xs flex rounded bg-gray-300 relative">
        <slot> </slot>

        <div
            :style="{ width: percentage * 100 + '%' }"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-hitpoints"
        ></div>
    </div>
</template>

<style scoped></style>
