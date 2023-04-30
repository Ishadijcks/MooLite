<script setup lang="ts">
import { XpTrackerPlugin } from "src/MooLite/plugins/XpDetails/XpTrackerPlugin";
import { computed } from "vue";
import { SkillHrid } from "src/MooLite/core/skills/SkillHrid";
import XpTrackerSkillDisplay from "src/MooLite/plugins/XpDetails/XpTrackerSkillDisplay.vue";

const props = defineProps<{
    plugin: XpTrackerPlugin;
}>();

const gains = computed(() => {
    return props.plugin.gains;
});

const xpLeft = (skillHrid: SkillHrid): number => {
    return props.plugin.getXpLeft(skillHrid);
};

const percentage = (skillHrid: SkillHrid): number => {
    return props.plugin.getPercentage(skillHrid);
};

const level = (skillHrid: SkillHrid): number => {
    return props.plugin.getLevel(skillHrid);
};
</script>

<template>
    <div class="flex flex-col space-y-2">
        <XpTrackerSkillDisplay
            v-for="skill in gains"
            :skill="skill"
            :actions-left="0"
            :xp-left="xpLeft(skill.hrid)"
            :percentage="percentage(skill.hrid)"
            :level="level(skill.hrid)"
        >
        </XpTrackerSkillDisplay>
    </div>
</template>
