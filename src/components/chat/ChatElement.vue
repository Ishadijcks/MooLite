<script setup lang="ts">
import { defineProps, computed } from "vue";
import { ConversationMessage } from "src/MooLite/plugins/WhisperManager/ConversationMessage";

const props = defineProps<{
    message: ConversationMessage;
}>();
</script>

<template>
    <div class="flex flex-row items-end space-x-1 w-full" :class="{ 'justify-end': !message.isInbound }">
        <svg
            class="w-3 h-3 shrink-0 mb-1.5"
            :class="message.isInbound ? '-rotate-90 text-[#a272e4]' : 'rotate-90 text-gray-500 order-2'"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 10"
            aria-hidden="true"
        >
            <path d="M15 1.2l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="flex flex-row bg-midnight-500 bg-opacity-40 text-gray-300 px-3 py-1.5 rounded-[4px]">
            <span class="text-gray-400">{{ props.message.message }}</span>
        </div>
    </div>
</template>
