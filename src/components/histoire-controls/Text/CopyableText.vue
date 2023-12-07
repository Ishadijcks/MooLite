<!-- generate an empty SFC vue file with a setup script using ts -->
<script setup lang="ts">
import CopyIcon from "src/components/icons/CopyIcon.vue";
import { useClipboard } from "@vueuse/core";
import { VTooltip as vTooltip } from "floating-vue";
import { ref } from "vue";

export interface CopyableTextProps {
    text: string;
    tooltip?: string;
    monospace?: boolean;
}

const props = defineProps<CopyableTextProps>();

const { copy, copied } = useClipboard();
const showCopyButton = ref(false);
</script>

<template>
    <div
        class="flex items-center text-dark-mode"
        @mouseenter="showCopyButton = true"
        @mouseleave="showCopyButton = false"
    >
        <code v-if="props.monospace">{{ props.text }}</code>
        <span v-else>{{ props.text }}</span>
        <CopyIcon
            v-tooltip="{
                content: props.tooltip ?? 'Copied!',
                triggers: [],
                shown: copied,
                distance: 12,
                delay: 0,
            }"
            class="h-4 ml-1.5 cursor-pointer shrink-0 aspect-square text-black dark:text-white hover:text-ocean-500 hover:opacity-100"
            :class="{ 'opacity-0': !showCopyButton, 'opacity-50': showCopyButton }"
            @click="copy(props.text)"
        />
    </div>
</template>
