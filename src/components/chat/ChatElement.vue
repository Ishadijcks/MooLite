<script setup lang="ts">
import ChevronIcon from "src/components/icons/Chevron.vue";
import { defineProps, computed } from "vue";
import { ConversationMessage } from "src/MooLite/plugins/WhisperManager/ConversationMessage";

const props = defineProps<{
    message: ConversationMessage;
}>();
</script>

<template>
    <div
        class="flex flex-row items-end space-x-1 w-full"
        :class="{
            'justify-end': !message.isInbound,
        }"
    >
        <ChevronIcon
            class="w-3 h-3 shrink-0 mb-1.5"
            :class="message.isInbound ? '-rotate-90 text-[#a272e4]' : 'rotate-90 text-gray-500 order-2'"
        />
        <div
            class="flex flex-row bg-opacity-40 px-3 py-1.5 rounded-[4px]"
            :class="message.isInbound ? 'bg-space-800' : 'bg-midnight-500'"
        >
            <span class="text-gray-300">{{ props.message.message }}</span>
        </div>
    </div>
</template>
