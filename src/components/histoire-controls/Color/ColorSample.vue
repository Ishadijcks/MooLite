<script setup lang="ts">
import CopyIcon from "src/components/icons/CopyIcon.vue";
import { useClipboard } from "@vueuse/core";
import { VTooltip as vTooltip } from "floating-vue";
import { computed, ref } from "vue";
import ColorSampleType from "src/components/histoire-controls/Color/ColorSampleType";
import CopyableText from "src/components/histoire-controls/Text/CopyableText.vue";

export interface ColorSampleProps {
    colorClass: string;
    value: string;
    type?: ColorSampleType;
}

const props = defineProps<ColorSampleProps>();

const { copy: copyClass, copied: copiedClass } = useClipboard();
const { copy: copyValue, copied: copiedValue } = useClipboard();

const showCopyButtons = ref(false);

const sampleType = computed(() => props.type ?? ColorSampleType.Sample);

const sampleClass = computed(() => {
    switch (sampleType.value) {
        case ColorSampleType.Sample:
            return `rounded-full w-16 bg-${props.colorClass}`;
        case ColorSampleType.Background:
            return `rounded-mwi-default bg-${props.colorClass}`;
        case ColorSampleType.Border:
            return `rounded-mwi-default border border-4 border-${props.colorClass}`;
        case ColorSampleType.Text:
            return `rounded-mwi-default text-${props.colorClass} text-6xl`;
    }
});

const displayClass = computed(() => {
    switch (sampleType.value) {
        case ColorSampleType.Sample:
            return props.colorClass;
        case ColorSampleType.Background:
            return `bg-${props.colorClass}`;
        case ColorSampleType.Border:
            return `border-${props.colorClass}`;
        case ColorSampleType.Text:
            return `text-${props.colorClass}`;
    }
});
</script>

<template>
    <div
        class="flex flex-col w-64 text-dark-mode border-2.5 rounded-mwi-default"
        @mouseenter="showCopyButtons = true"
        @mouseleave="showCopyButtons = false"
    >
        <div class="h-16" :class="sampleClass">
            {{ props.type === ColorSampleType.Text ? "Aa 0-9" : null }}
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
