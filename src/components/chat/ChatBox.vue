<script setup lang="ts">
import { defineProps } from "vue";
import ChatElement from "src/components/chat/ChatElement.vue";
import { ConversationMessage } from "src/MooLite/plugins/WhisperManager/ConversationMessage";

const props = defineProps<{
    messages: ConversationMessage[];
}>();
</script>

<template>
    <div
        class="flex flex-col-reverse gap-y-2 bg-space-900 px-1 py-1.5 border-midnight-300 border-2 rounded-mwi-default overflow-y-auto overflow-x-clip"
    >
        <ChatElement v-for="message in messages" :message="message" />
    </div>
</template>
