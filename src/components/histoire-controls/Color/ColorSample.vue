<script setup lang="ts">
import CopyIcon from "src/components/icons/CopyIcon.vue";
import { useClipboard } from "@vueuse/core";
import { VTooltip as vTooltip } from "floating-vue";
import { computed, ref } from "vue";
import ColorSampleType from "src/components/histoire-controls/Color/ColorSampleType";

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
                <code class="text-sm">
                    {{ displayClass }}
                </code>
                <CopyIcon
                    v-tooltip="{
                        content: 'Copied!',
                        triggers: [],
                        shown: copiedClass,
                        distance: 12,
                        delay: 0,
                    }"
                    class="h-4 ml-1.5 cursor-pointer aspect-square text-dark-mode hover:text-ocean-500 hover:opacity-100"
                    :class="{ 'opacity-0': !showCopyButtons, 'opacity-50': showCopyButtons }"
                    @click="copyClass(displayClass)"
                />
            </div>
            <div class="flex">
                <code class="text-xs">{{ props.value }}</code>
                <CopyIcon
                    v-tooltip="{
                        content: 'Copied!',
                        triggers: [],
                        shown: copiedValue,
                        distance: 12,
                        delay: 0,
                    }"
                    class="h-4 ml-1.5 cursor-pointer aspect-square text-black dark:text-white hover:text-ocean-500 hover:opacity-100"
                    :class="{ 'opacity-0': !showCopyButtons, 'opacity-50': showCopyButtons }"
                    @click="copyValue(props.value)"
                />
            </div>
        </div>
    </div>
</template>
