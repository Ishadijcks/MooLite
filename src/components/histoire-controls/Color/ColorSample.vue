<script setup lang="ts">
import CopyIcon from "src/components/icons/CopyIcon.vue";
import { useClipboard } from "@vueuse/core";
import { VTooltip as vTooltip } from "floating-vue";
import { ref } from "vue";
export interface ColorSampleProps {
    colorClass: string;
    value: string;
}

const props = defineProps<ColorSampleProps>();

const { copy: copyClass, copied: copiedClass } = useClipboard();
const { copy: copyValue, copied: copiedValue } = useClipboard();

const showCopyButtons = ref(false);
</script>

<template>
    <div
        class="flex flex-col w-64 bg-neutral-600 text-dark-mode rounded-mwi-default"
        @mouseenter="showCopyButtons = true"
        @mouseleave="showCopyButtons = false"
    >
        <div class="h-16 rounded-mwi-default" :class="props.colorClass"></div>
        <div class="flex flex-col px-1.5 py-1">
            <div class="flex justify-between">
                <code class="text-sm">
                    {{ props.colorClass }}
                </code>
                <CopyIcon
                    v-tooltip="{
                        content: 'Copied!',
                        triggers: [],
                        shown: copiedClass,
                        distance: 12,
                        delay: 0,
                    }"
                    class="h-4 ml-1.5 opacity-50 cursor-pointer aspect-square text-dark-mode hover:opacity-100"
                    :class="{ hidden: !showCopyButtons }"
                    @click="copyClass(props.colorClass)"
                />
            </div>
            <div class="flex justify-between">
                <code class="text-xs">{{ props.value }}</code>
                <CopyIcon
                    v-tooltip="{
                        content: 'Copied!',
                        triggers: [],
                        shown: copiedValue,
                        distance: 12,
                        delay: 0,
                    }"
                    class="h-4 ml-1.5 opacity-50 cursor-pointer aspect-square text-dark-mode hover:opacity-100"
                    :class="{ hidden: !showCopyButtons }"
                    @click="copyValue(props.value)"
                />
            </div>
        </div>
    </div>
</template>
