<script setup lang="ts">
import { XpTrackerSkill } from "src/MooLite/plugins/XpDetails/XpTrackerSkill";
import SkillIcon from "src/components/atoms/SkillIcon.vue";
import { computed } from "vue";
import ProgressBar from "src/components/atoms/ProgressBar.vue";

const props = defineProps<{
    skill: XpTrackerSkill;
    level: number;
    xpLeft: number;
    percentage: number;
}>();

const actionsLeft = computed(() => {
    return props.xpLeft / props.skill.averageAction;
});
</script>

<template>
    <div class="flex flex-col bg-divider p-2 hover:opacity-70">
        <div class="flex flex-row justify-between items-center" :title="skill.name">
            <SkillIcon :skill="skill.hrid" class="w-8 h-8 mr-2" />
            <div class="flex flex-col flex-1">
                <span class="text-xxs">
                    <span class="text-ocean-200">XP Gained:</span>
                    {{ Math.floor(skill.xpGained).toLocaleString() }}
                </span>
                <span class="text-xxs">
                    <span class="text-ocean-200">XP/hr:</span>
                    {{ Math.floor(skill.xpPerHour).toLocaleString() }}
                </span>
            </div>

            <div class="flex flex-col items-end">
                <span class="text-xxs">
                    <span class="text-ocean-200">XP Left:</span>
                    {{ Math.ceil(xpLeft).toLocaleString() }}
                </span>
                <span class="text-xxs">
                    <span class="text-ocean-200">Actions:</span>
                    {{ Math.ceil(actionsLeft).toLocaleString() }}
                </span>
            </div>
        </div>
        <ProgressBar class="mt-2" :percentage="percentage">
            <div class="absolute flex flex-row justify-between w-full text-black px-2">
                <span class="text-xxs mt-0.5 text-midnight-600">Lvl. {{ level }}</span>
                <span class="text-xxs mt-0.5 text-midnight-600">{{ (percentage * 100).toFixed(2) }}%</span>
                <span class="text-xxs mt-0.5 text-midnight-600">Lvl. {{ level + 1 }}</span>
            </div>
        </ProgressBar>
    </div>
</template>
