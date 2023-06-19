<script setup lang="ts">
import { computed, ref, defineProps } from "vue";
import { WhisperManagerPlugin } from "./WhisperManagerPlugin";
import ChatBox from "src/components/chat/ChatBox.vue";
import MooDivider from "src/components/atoms/MooDivider.vue";

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
    <div class="flex flex-col space-y-1.5 h-full max-h-full mb-1.5">
        <h1 class="text-lg font-bold">Whisper Manager</h1>
        <button @click="props.plugin.populateConversations()" class="text-sm bg-gray-800 p-1.5 rounded-[4px]">
            Dev Data
        </button>
        <div class="flex flex-row space-x-0.5">
            <div
                v-for="[user, _] in Object.entries(conversations)"
                class="flex-grow flex flex-row justify-center bg-gray-800 rounded-t-lg pt-1 pb-0.5 px-2 text-gray-300 cursor-pointer"
                @click="activeConversation = user"
            >
                <span class="font-bold">{{ user }}</span>
            </div>
        </div>
        <MooDivider style="margin-top: 0" />
        <ChatBox :messages="conversations[activeConversation]" class="flex-1 overflow-auto" />
        <input
            v-model="chatInput"
            type="text"
            class="p-1 bg-gray-800 rounded-[4px] my-2 text-gray-400 w-full"
            @keyup.enter="sendMessageToGameChat(chatInput, activeConversation)"
        />
    </div>
</template>
