<script setup lang="ts">
import { computed, ref, defineProps } from "vue";
import { WhisperManagerPlugin } from "./WhisperManagerPlugin";
import ChatBox from "src/components/chat/ChatBox.vue";

const chatInput = ref("");
const activeConversation = ref("");

const props = defineProps<{
    plugin: WhisperManagerPlugin;
}>();

const conversations = computed(() => {
    return props.plugin.conversations;
});

function setNativeValue(el: HTMLInputElement, value: string) {
    const previousValue = el.value;

    if (el.type === "checkbox" || el.type === "radio") {
        if ((!!value && !el.checked) || (!!!value && el.checked)) {
            el.click();
        }
    } else el.value = value;

    // @ts-ignore
    const tracker = el._valueTracker;
    if (tracker) {
        tracker.setValue(previousValue);
    }

    // 'change' instead of 'input', see https://github.com/facebook/react/issues/11488#issuecomment-381590324
    el.dispatchEvent(new Event("change", { bubbles: true }));
}

const updateGameChatInput = (message: string) => {
    const chatInput = document.getElementsByClassName("Chat_chatInput__16dhX")[0] as HTMLInputElement;
    setNativeValue(chatInput, message);
    chatInput.focus();
};


const sendMessageToGameChat = (message: string, recipient: string) => {
    if (!recipient) return;
    const msg = `/w ${recipient} ${message}`;
    updateGameChatInput(msg);
    chatInput.value = "";
};

</script>

<template>
    <div class="flex flex-col">
        <h1 class="text-lg font-bold">Laguna Test</h1>
        <div class="flex flex-row space-x-0.5">
            <div
                v-for="[user, _] in Object.entries(conversations)"
                class="flex-grow flex flex-row justify-center bg-gray-800 rounded-t-lg pt-1 pb-0.5 px-2 min-w-max text-gray-300 cursor-pointer"
                @click="activeConversation = user"
            >
                <span class="font-bold">{{ user }}</span>
            </div>
        </div>
        <ChatBox :messages="conversations[activeConversation]" />
        <input
            v-model="chatInput"
            type="text"
            class="p-1 bg-gray-800 rounded-lg my-2 text-gray-400 w-full"
            @keyup.enter="sendMessageToGameChat(chatInput, activeConversation)"
        />
    </div>
</template>
