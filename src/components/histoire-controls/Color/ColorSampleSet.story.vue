<script setup lang="ts">
import ColorSampleSet from "./ColorSampleSet.vue";

const sampleData = {
    100: "var(--color-midnight-100)",
    200: "var(--color-midnight-200)",
    300: "var(--color-midnight-300)",
    400: "var(--color-midnight-400)",
    500: "var(--color-midnight-500)",
    550: "var(--color-midnight-550)",
    600: "var(--color-midnight-600)",
    700: "var(--color-midnight-700)",
    800: "var(--color-midnight-800)",
    900: "var(--color-midnight-900)",
};

const props = {
    title: "midnight",
    colorSamples: Object.entries(sampleData).map(([key, value]) => ({
        colorClass: `bg-midnight-${key}`,
        value,
    })),
};
</script>

<template>
    <Story title="Color/SampleSet" group="histoire-controls" icon="ph:eyedropper-sample-duotone" auto-props-disabled>
        <ColorSampleSet :title="props.title" :color-samples="props.colorSamples" />
    </Story>
</template>
