<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { ChatMessage } from 'src/MooLite/core/chat/ChatMessage';

const props = defineProps<{
  message: ChatMessage;
}>();
</script>

<template>
    <div class="flex flex-row bg-midnight-500 text-gray-300 px-1 py-1.5 rounded-[4px]">
        <span class="font-bold ml-3">{{ props.message.senderName }}:</span>
        <span class="text-gray-400 ml-3">{{ props.message.message }}</span>
    </div>
</template>
