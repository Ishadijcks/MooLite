<script setup lang="ts">
import { ComputedRef, Ref, computed, ref } from "vue";
import { WhisperManagerPlugin } from "src/MooLite/plugins/WhisperManager/WhisperManagerPlugin";
import ChatBox from "src/components/chat/ChatBox.vue";
import MooDivider from "src/components/atoms/MooDivider.vue";
import CrossIcon from "src/components/icons/Cross.vue";
import { contributorNames, betaTesterNames, helperNames } from "src/MooLite/plugins/WhisperManager/DevConstants";
import { Conversation } from "src/MooLite/plugins/WhisperManager/Conversation";

const props = defineProps<{
    plugin: WhisperManagerPlugin;
}>();

const chatMessageText = ref("");
const chatMessageInput = ref(null);
const searchText = ref("");
const characterName = props.plugin.game.character.name;
const systemTabs = ["System", "Mods"];

const conversations = computed(() => {
    return props.plugin.conversations;
});

const hasConversations = computed(() => {
    return Object.keys(conversations.value).length > 0;
});

const tabList: ComputedRef<[string, Conversation][]> = computed(() => {
    return Object.entries(conversations.value)
        .filter(
            ([user, conversation]: [string, Conversation]) =>
                user.toLowerCase().includes(searchText.value.toLowerCase()) && !conversation.hidden
        )
        .sort((a, b) => {
            if (a[1].unread && !b[1].unread) return -1;
            if (!a[1].unread && b[1].unread) return 1;
            return 0;
        })
        .sort((a, b) => {
            if (systemTabs.includes(a[0])) return -1;
            if (systemTabs.includes(b[0])) return 1;
            return 0;
        });
});

const activeConversation = computed(() => {
    return props.plugin.activeConversation;
});

const activeConversationName = computed(() => {
    return props.plugin.activeConversationName;
});

const hiddenConversationCount = computed(() => {
    return Object.keys(conversations.value).filter((name) => conversations.value[name].hidden).length;
});

const visibleConversationCount = computed(() => {
    return Object.keys(conversations.value).filter((name) => !conversations.value[name].hidden).length;
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
    // TODO: Refactor this after implementing UI reflection.
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
    <div class="flex flex-col space-y-1.5 h-full max-h-full mb-1.5 bg-background-game">
        <div class="flex flex-row justify-between items-center">
            <h1
                class="text-lg font-bold transition duration-700 ease-in-out"
                :class="{
                    'hover:text-cyan-300': contributorNames.includes(characterName),
                    'bg-clip-text hover:text-transparent bg-gradient-to-br from-orange-400 to-scarlet-400 to-90% via-orange-600 via-30%':
                        betaTesterNames.includes(characterName),
                    'bg-clip-text hover:text-transparent bg-gradient-to-br from-burble-300 to-burble-400 to-90%':
                        helperNames.includes(characterName),
                }"
            >
                Whisper Manager
            </h1>
        </div>
        <div
            v-if="!hasConversations"
            class="flex flex-col justify-center gap-y-3 items-center w-full h-full text-center"
        >
            <span class="bold text-4xl">No whispers!</span>
            <span class="text-xl">
                Start one by clicking a users name in chat and selecting the whisper option. You can also type the
                following in chat:
            </span>
            <code class="text-xl p-1.5 rounded-mwi-default bg-midnight-300">/w &lt;username&gt;</code>
        </div>
        <div v-else class="flex flex-col space-y-1.5 h-full max-h-full mb-1.5">
            <button
                v-if="hiddenConversationCount"
                class="bg-midnight-500 font-semibold p-1.5 rounded-mwi-default text-dark-mode hover:bg-midnight-300"
                @click="unhideAllConversations()"
            >
                Unhide All
            </button>
            <input
                v-if="visibleConversationCount > 4"
                v-model="searchText"
                type="text"
                placeholder="Search users..."
                class="p-1 bg-midnight-500 rounded-mwi-default my-2 text-dark-mode w-full"
            />
            <div class="flex flex-row space-x-0.5 overflow-y-visible overflow-x-auto">
                <div
                    v-for="[user, conversation] in tabList"
                    class="flex-grow flex flex-row align-middle items-center rounded-t-mwi-default py-1 px-2 cursor-pointer relative overflow-visible"
                    :class="{
                        'bg-space-800 justify-between gap-2': activeConversationName === user,
                        'justify-center': !(activeConversationName === user),
                        'bg-midnight-500': !(activeConversationName === user) && !conversations[user].unread,
                        'bg-midnight-400': conversations[user].unread,
                    }"
                    @click="onTabClick(user)"
                >
                    <div v-if="conversations[user].unread" class="absolute top-0 right-0">
                        <div class="bg-warning rounded-full w-2 h-2"></div>
                        <div class="bg-warning rounded-full w-2 h-2 animate-ping absolute top-0 right-0"></div>
                    </div>
                    <span class="font-semibold text-base text-dark-mode">
                        {{ user }}
                    </span>
                    <CrossIcon
                        v-if="activeConversationName === user"
                        class="h-5 aspect-square fill-dark-mode stroke-3 rounded-full p-1 transition-colors hover:fill-progress hover:bg-neutral-200"
                        @click="conversation.hide()"
                    />
                </div>
            </div>
            <!-- Have to add this as a style tag or it gets overridden. -->
            <MooDivider style="margin-top: 0" />
            <div class="relative h-full">
                <ChatBox :messages="activeConversation?.messages ?? []" class="absolute inset-0 flex-1" />
            </div>
            <input
                v-if="!systemTabs.includes(activeConversationName)"
                v-model="chatMessageText"
                type="text"
                ref="chatMessageInput"
                placeholder="Send a message..."
                class="p-1 bg-midnight-500 rounded-mwi-default my-2 text-dark-mode w-full"
                @keyup.enter="sendWhisper(activeConversationName, chatMessageText)"
            />
        </div>
    </div>
</template>
