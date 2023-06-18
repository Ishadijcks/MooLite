<script setup lang="ts">
import { computed, ref } from "vue";
import { WhisperManagerPlugin } from "./WhisperManagerPlugin";
import Accordion from "src/components/atoms/Accordion.vue";
import ChatBox from "src/components/chat/ChatBox.vue";

const props = defineProps<{
    plugin: WhisperManagerPlugin;
}>();

const messages = computed(() => {
    return props.plugin.messages;
});

const conversations = computed(() => {
    return props.plugin.conversations;
});

const uniqueUsers = computed(() => {
    return props.plugin.messages
        .map((msg) => msg.senderName)
        .filter((value, index, self) => self.indexOf(value) === index);
});

const topFiveMessagesSent = computed(() => {
    const { messages } = props.plugin;
    let totals: { [key: string]: number } = {};

    messages.forEach((msg) => {
        const { senderName } = msg;
        if (!totals[senderName]) {
            totals[senderName] = 0;
        }
        totals[senderName]++;
    });

    return Object.entries(totals)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) => {
            return {
                name,
                count,
            };
        });
});

const topFiveAverageMessageLength = computed(() => {
    const { messages } = props.plugin;
    let totals: { [key: string]: number } = {};
    let counts: { [key: string]: number } = {};

    messages.forEach((msg) => {
        const { senderName, message } = msg;
        if (!totals[senderName]) {
            totals[senderName] = 0;
        }
        if (!counts[senderName]) {
            counts[senderName] = 0;
        }
        totals[senderName] += message.length;
        counts[senderName]++;
    });

    return Object.entries(totals)
        .sort((a, b) => b[1] / counts[b[0]] - a[1] / counts[a[0]])
        .slice(0, 5)
        .map(([name, count]) => {
            return {
                name,
                count: Math.floor(count / counts[name]),
            };
        });
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

const chatInput = ref("");

const sendMessageToGameChat = (message: string, recipient: string) => {
    const msg = `/w ${recipient} ${message}`;
    updateGameChatInput(msg);
    chatInput.value = "";
};

const activeConversation = ref("");
</script>

<template>
    <div class="flex flex-col">
        <h1 class="text-lg font-bold">Laguna Test</h1>
        <Accordion title="Whispers">
            <template v-slot:title>
                <h1>Whispers</h1>
            </template>
            <template v-slot:content>
                <div class="flex flex-row overflow-x-scroll space-x-0.5">
                    <div 
                        v-for="[user, _] in Object.entries(conversations)"
                        class="flex-grow flex flex-row justify-center bg-gray-800 rounded-t-lg pt-1 pb-0.5 px-2 min-w-max text-gray-300 cursor-pointer"
                        @click="activeConversation = user"
                    >
                        <span class="font-bold">{{user}}</span>
                    </div>
                </div>
                <ChatBox :messages="conversations[activeConversation]" />
                <input
                    v-model="chatInput"
                    type="text"
                    class="p-1 bg-gray-800 rounded-lg my-2 text-gray-400 w-full"
                    @keyup.enter="sendMessageToGameChat(chatInput, activeConversation)"
                />
            </template>
        </Accordion>
    </div>
</template>
