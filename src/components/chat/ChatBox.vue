<script setup lang="ts">
import { defineProps } from "vue";
import ChatElement from "./ChatElement.vue";
import { ConversationMessage } from "src/MooLite/plugins/WhisperManager/ConversationMessage";

const props = defineProps<{
    messages: ConversationMessage[];
}>();
</script>

<template>
    <div
        class="flex flex-col space-y-2 bg-midnight-700 px-1 py-1.5 border-midnight-300 border-2 rounded-[4px] overflow-auto"
    >
        <ChatElement v-for="message in messages" :message="message" />
    </div>
</template>
