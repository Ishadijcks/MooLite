<script setup lang="ts">
import { computed, ref, defineProps } from "vue";
import { WhisperManagerPlugin } from "./WhisperManagerPlugin";
import ChatBox from "src/components/chat/ChatBox.vue";
import MooDivider from "src/components/atoms/MooDivider.vue";
import Accordion from "src/components/atoms/Accordion.vue";

const props = defineProps<{
    plugin: WhisperManagerPlugin;
}>();

const searchText = ref("");
const characterName = props.plugin.game.character.name;
const isDev = characterName === "LagunaE";

const conversations = computed(() => {
    return props.plugin.conversations;
});

const activeConversation = computed(() => {
    return props.plugin.activeConversation;
});

const activeConversationName = computed(() => {
    return props.plugin.activeConversationName;
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

const startWhisperInGameChat = (recipient: string) => {
    if (!recipient) return;
    const msg = `/w ${recipient} `;
    updateGameChatInput(msg);
};

props.plugin.populateConversations();
</script>

<template>
    <div class="flex flex-col space-y-1.5 h-full max-h-full mb-1.5">
        <h1 class="text-lg font-bold">Whisper Manager</h1>
        <Accordion :class="{ hidden: !isDev }">
            <template #title>
                <div class="flex flex-row justify-between">
                    <span>Settings</span>
                </div>
            </template>
            <template #content>
                <button
                    @click="props.plugin.populateDevConversations()"
                    class="text-sm bg-gray-800 p-1.5 rounded-[4px]"
                >
                    Dev Data
                </button>
            </template>
        </Accordion>
        <div
            v-if="!Object.keys(conversations).length"
            class="flex flex-col justify-center gap-y-3 items-center w-full h-full text-center"
        >
            <span class="bold text-4xl">No whispers!</span>
            <span class="text-xl">
                Start one by clicking a users name in chat and selecting the whisper option. You can also type the
                following in chat:
            </span>
            <code class="text-xl p-1.5 rounded-[4px] bg-gray-700">/w &lt;username&gt;</code>
        </div>
        <div v-else class="flex flex-col space-y-1.5 h-full max-h-full mb-1.5">
            <input
                v-if="Object.keys(conversations).length > 4"
                v-model="searchText"
                type="text"
                placeholder="Search tabs..."
                class="p-1 bg-gray-800 rounded-[4px] my-2 text-gray-400 w-full"
            />
            <div class="flex flex-row space-x-0.5 overflow-y-hidden">
                <div
                    v-for="[user, _] in Object.entries(conversations).filter(([user, _]) =>
                        user.toLowerCase().includes(searchText.toLowerCase())
                    )"
                    class="flex-grow flex flex-row justify-center rounded-t-[4px] pt-1 pb-0.5 px-2 text-gray-300 cursor-pointer relative"
                    :class="{
                        'bg-space-600': activeConversationName === user,
                        'bg-gray-800': !(activeConversationName === user) && !conversations[user].unread,
                        'bg-gray-700': conversations[user].unread,
                    }"
                    @click="props.plugin.setActiveConversation(user)"
                >
                    <div v-if="conversations[user].unread" class="absolute top-0 right-0">
                        <div class="bg-red-500 rounded-full w-2 h-2"></div>
                    </div>
                    <span class="font-bold text-base">{{ user }}</span>
                </div>
            </div>
            <MooDivider style="margin-top: 0" />
            <div class="relative h-full">
                <ChatBox :messages="activeConversation?.messages ?? []" class="absolute inset-0 flex-1" />
            </div>
            <button
                class="p-1 bg-gray-800 rounded-[4px] my-2 text-gray-400 w-full"
                @click="startWhisperInGameChat(activeConversationName)"
            >
                <b>Whisper</b>
            </button>
        </div>
    </div>
</template>
