<script setup lang="ts">
import { Ref, computed, ref } from "vue";
import { WhisperManagerPlugin } from "./WhisperManagerPlugin";
import ChatBox from "src/components/chat/ChatBox.vue";
import MooDivider from "src/components/atoms/MooDivider.vue";
import Accordion from "src/components/atoms/Accordion.vue";
import { contributorNames, betaTesterNames, helperNames } from "src/MooLite/plugins/WhisperManager/DevConstants";
import { Conversation } from "src/MooLite/plugins/WhisperManager/Conversation";

const props = defineProps<{
    plugin: WhisperManagerPlugin;
}>();

const chatMessageText = ref("");
const chatMessageInput = ref(null);
const searchText = ref("");
const characterName = props.plugin.game.character.name;
const isDev = characterName === "LagunaE";
const pinnedTabs = ["System", "Mods"];

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

const sendWhisper = (recipient: string, message: string) => {
    const chatInput = document.getElementsByClassName("Chat_chatInput__16dhX")[0] as HTMLInputElement;
    const sendButton = Array.from(document.getElementsByClassName("Button_button__1Fe9z")).find(
        (button) => button.textContent === "Send"
    ) as HTMLButtonElement;
    const msg = `/w ${recipient} ${message}`;
    setNativeValue(chatInput, msg);
    chatMessageText.value = "";
    sendButton.click();
};

const unhideAllConversations = () => {
    for (const [user, conversation] of Object.entries(conversations.value)) {
        conversation.show();
    }
};

const onTabClick = (name: string) => {
    props.plugin.setActiveConversation(name);

    // Have to use ignore because it thinks chatMessageInput.value is type 'never'.
    // @ts-ignore
    chatMessageInput.value?.focus();
};

props.plugin.populateConversations();
</script>

<template>
    <div class="flex flex-col space-y-1.5 h-full max-h-full mb-1.5">
        <div class="flex flex-row justify-between items-center">
            <h1
                class="text-lg font-bold transition duration-700 ease-in-out"
                :class="{
                    'hover:text-cyan-300': contributorNames.includes(characterName),
                    'bg-clip-text hover:text-transparent bg-gradient-to-br from-yellow-500 to-red-400 to-90% via-orange-300 via-30%':
                        betaTesterNames.includes(characterName),
                    'hover:text-fuchsia-300': helperNames.includes(characterName),
                }"
            >
                Whisper Manager
            </h1>
            <button
                v-if="isDev"
                class="hover:scale-125 transition-transform aspect-square h-7 text-lg rounded-full text-gray-400 bg-gray-800 shadow-md hover:bg-gray-700"
                @click="console.log('info', conversations)"
            >
                ℹ
            </button>
        </div>
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
            <button
                v-if="Object.keys(conversations).filter((name) => conversations[name].hidden).length"
                class="bg-gray-800 font-semibold p-1.5 rounded-[4px] text-gray-400 hover:text-gray-300 hover:bg-gray-700"
                @click="unhideAllConversations()"
            >
                Unhide All
            </button>
            <input
                v-if="Object.keys(conversations).filter((name) => !conversations[name].hidden).length > 4"
                v-model="searchText"
                type="text"
                placeholder="Search users..."
                class="p-1 bg-gray-800 rounded-[4px] my-2 text-gray-400 w-full"
            />
            <div class="flex flex-row space-x-0.5 overflow-y-visible overflow-x-auto">
                <div
                    v-for="[user, conversation] in Object.entries(conversations)
                        .filter(([user, conversation]: [string, Conversation]) => (user.toLowerCase().includes(searchText.toLowerCase()) && !conversation.hidden))
                        .sort((a, b) => {
                            if (a[1].unread && !b[1].unread) return -1;
                            if (!a[1].unread && b[1].unread) return 1;
                            return 0;
                        })
                        .sort((a, b) => {
                            if (pinnedTabs.includes(a[0])) return -1;
                            if (pinnedTabs.includes(b[0])) return 1;
                            return 0;
                        })"
                    class="flex-grow flex flex-row align-middle items-center rounded-t-[4px] py-1 px-2 cursor-pointer relative overflow-visible"
                    :class="{
                        'bg-space-800 justify-between gap-2': activeConversationName === user,
                        'justify-center': !(activeConversationName === user),
                        'bg-gray-800': !(activeConversationName === user) && !conversations[user].unread,
                        'bg-gray-700': conversations[user].unread,
                    }"
                    @click="onTabClick(user)"
                >
                    <div v-if="conversations[user].unread" class="absolute top-0 right-0">
                        <div class="bg-red-500 rounded-full w-2 h-2"></div>
                        <div class="bg-red-500 rounded-full w-2 h-2 animate-ping absolute top-0 right-0"></div>
                    </div>
                    <span
                        class="font-semibold text-base"
                        :class="{
                            'text-cyan-300': contributorNames.includes(user),
                            'bg-clip-text text-transparent bg-gradient-to-br from-yellow-500 to-red-400 to-90% via-orange-300 via-30%':
                                betaTesterNames.includes(user),
                            'bg-clip-text text-transparent bg-gradient-to-br from-burble-250 to-purple-500 to-80% via-violet-400':
                                helperNames.includes(user),
                        }"
                    >
                        {{ user }}
                    </span>
                    <svg
                        v-if="activeConversationName === user"
                        class="h-5 aspect-square fill-gray-300 stroke-3 rounded-full p-1 transition-colors hover:fill-[#a272e4] hover:bg-gray-300"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 460.775 460.775"
                        xml:space="preserve"
                        @click="conversation.hide()"
                    >
                        <path
                            d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                            c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                            c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                            c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                            l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                            c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                        />
                    </svg>
                </div>
            </div>
            <MooDivider style="margin-top: 0" />
            <div class="relative h-full">
                <ChatBox :messages="activeConversation?.messages ?? []" class="absolute inset-0 flex-1" />
            </div>
            <input
                v-model="chatMessageText"
                type="text"
                ref="chatMessageInput"
                placeholder="Send a message..."
                class="p-1 bg-gray-800 rounded-[4px] my-2 text-gray-400 w-full"
                @keyup.enter="sendWhisper(activeConversationName, chatMessageText)"
            />
        </div>
    </div>
</template>
