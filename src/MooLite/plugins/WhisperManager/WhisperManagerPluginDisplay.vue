<script setup lang="ts">
import { computed } from "vue";
import { WhisperManagerPlugin } from "./WhisperManagerPlugin";
import Accordion from "src/components/atoms/Accordion.vue";

const props = defineProps<{
    plugin: WhisperManagerPlugin;
}>();

const messages = computed(() => {
    return props.plugin.messages;
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

const updateChatInput = (message: string) => {
    const chatInput = document.getElementsByClassName("Chat_chatInput__16dhX")[0] as HTMLInputElement;
    setNativeValue(chatInput, message);
};
</script>

<template>
    <div class="flex flex-col">
        <h1 class="text-lg font-bold">Laguna Test</h1>
        <div class="flex flex-col space-y-2">
            <div class="p-4 bg-gray-800 rounded-lg">
                <div class="text-gray-400">Messages</div>
                <div class="text-gray-400">{{ messages.length }}</div>
            </div>
            <div class="p-4 bg-gray-800 rounded-lg">
                <div class="text-gray-400">Unique users</div>
                <div class="text-gray-400">{{ uniqueUsers.length }}</div>
            </div>
        </div>
        <!-- collapsible list of 3 items -->
        <button class="p-4 bg-gray-800 rounded-lg my-2" @click="updateChatInput('Hello World!')">
            Update chat input
        </button>
        <Accordion title="Accordion 1">
            <template v-slot:title>
                <h1>Leaderboards</h1>
            </template>
            <template v-slot:content>
                <div class="flex flex-col space-y-2">
                    <div class="p-4 bg-gray-800 rounded-lg">
                        <div class="text-gray-400">Top 5 average message length</div>
                        <div class="text-gray-400">
                            <!-- Simple, Sleek, Modern, Colorized leaderboard. -->
                            <ul class="list-disc list-inside">
                                <li v-for="msg in topFiveAverageMessageLength" class="flex flex-row justify-between">
                                    <span>{{ msg.name }}:</span>
                                    <span>{{ msg.count }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="p-4 bg-gray-800 rounded-lg">
                        <div class="text-gray-400">Top 5 messages sent</div>
                        <div class="text-gray-400">
                            <ul class="list-disc list-inside">
                                <li v-for="msg in topFiveMessagesSent" class="flex flex-row justify-between">
                                    <span>{{ msg.name }}:</span>
                                    <span>{{ msg.count }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </template>
        </Accordion>
    </div>
</template>
