<script setup lang="ts">
import { computed, ref } from "vue";
import ColorSampleType from "src/components/histoire-controls/Color/ColorSampleType";
import CopyableText from "src/components/histoire-controls/Text/CopyableText.vue";

export interface ColorSampleProps {
    colorClass: string;
    value: string;
    type?: ColorSampleType;
    sampleText?: string;
}

const props = defineProps<ColorSampleProps>();

const sampleType = computed(() => props.type ?? ColorSampleType.Sample);

const sampleClass = computed(() => {
    switch (sampleType.value) {
        case ColorSampleType.Sample:
            return `rounded-full w-16 bg-${props.colorClass}`;
        case ColorSampleType.Background:
            return `rounded-mwi-default bg-${props.colorClass}`;
        case ColorSampleType.Border:
            return `rounded-mwi-default border-2 border-${props.colorClass}`;
        case ColorSampleType.Text:
            return `rounded-mwi-default text-${props.colorClass} text-6xl`;
    }
});
</script>

<template>
    <div class="flex flex-col w-64 text-dark-mode rounded-mwi-default">
        <div class="h-16" :class="sampleClass">
            <span v-if="props.type === ColorSampleType.Text">{{ props.sampleText || "Aa 0-9" }}</span>
        </div>
        <div class="flex flex-col px-1.5 py-1">
            <div class="flex">
                <CopyableText class="text-sm" :text="props.colorClass" monospace />
            </div>
            <div class="flex">
                <CopyableText class="text-xs" :text="props.value" monospace />
            </div>
        </div>
    </div>
</template>
