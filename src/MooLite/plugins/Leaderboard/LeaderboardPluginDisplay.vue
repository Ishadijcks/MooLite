<script setup lang="ts">
import { computed, ref } from "vue";
import { LeaderboardPlugin } from "src/MooLite/plugins/Leaderboard/LeaderboardPlugin";
import MooDivider from "src/components/atoms/MooDivider.vue";
import { DateFormatter } from "src/MooLite/util/DateFormatter";
import ItemIcon from "src/components/atoms/ItemIcon.vue";
import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";

const props = defineProps<{
    plugin: LeaderboardPlugin;
}>();

const selectedName = ref("");

const playerData = computed(() => {
    if (!selectedName.value) {
        return null;
    }
    return props.plugin.getPlayerSummary(selectedName.value);
});

const lastUpdatedText = computed(() => {
    const lastUpdated = props.plugin.lastUpdated;
    if (!lastUpdated) {
        return null;
    }
    return DateFormatter.toHHMM(lastUpdated);
});
</script>

<template>
    <div class="flex flex-col">
        <span>Leaderboard</span>
        <MooDivider />
        <span v-if="!plugin.hasData" class="italic text-xs"
            >Please visit the leaderboard tab to load in the latest data</span
        >
        <div v-else class="flex flex-col">
            <span v-if="plugin.lastUpdated" class="italic text-xs">Last updated on {{ lastUpdatedText }}</span>
            <br />

            <span>Player</span>
            <input type="text" v-model="selectedName" class="bg-divider" />

            <table v-if="playerData">
                <tr>
                    <th>Skill</th>
                    <th>📊</th>
                    <th>Exp</th>
                    <th>🏆</th>
                </tr>
                <tr v-for="entry in playerData.skills">
                    <th class="text-left">{{ entry.name }}</th>
                    <th>{{ entry.level }}</th>
                    <th>{{ entry.experience.toLocaleString() }}</th>
                    <th>{{ entry.rank }}</th>
                </tr>

                <tr class="spacer h-6"></tr>

                <tr class="pt-8" v-if="playerData.taskPoints">
                    <th>Tasks</th>
                    <th class="flex flex-row justify-center">
                        <ItemIcon size="4" :item="'/items/task_token' as unknown as ItemHrid" />
                    </th>
                    <th></th>
                    <th>🏆</th>
                </tr>
                <tr v-if="playerData.taskPoints">
                    <th class="text-left">{{ playerData.taskPoints.name }}</th>
                    <th>{{ playerData.taskPoints.taskPoints }}</th>
                    <th></th>
                    <th>{{ playerData.taskPoints.rank }}</th>
                </tr>
            </table>
            <span v-else class="italic text-xs" v-if="selectedName"
                >Player {{ selectedName }} not found on the leaderboards</span
            >
        </div>
    </div>
</template>
