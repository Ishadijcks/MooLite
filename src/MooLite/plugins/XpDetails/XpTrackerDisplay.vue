<script setup lang="ts">
import {XpTrackerPlugin} from "src/MooLite/plugins/XpDetails/XpTrackerPlugin";
import {computed} from "vue";

const props = defineProps<{
    plugin: XpTrackerPlugin
}>()

const skills = computed(() => {
    return Object.keys(props.plugin.gains)
})

const gains = computed(() => {
    return Object.values(props.plugin.gains)
})

const formatSkill = (skill) => {
    const split = skill.split("/");
    const name = split[split.length - 1];
    return name.charAt(0).toUpperCase() + name.slice(1);
}

</script>

<template>
    <div class="flex flex-col">
      <span
              v-for="(skill, index) in skills"
              class="flex flex-row justify-between">
          <template v-if="!(plugin.hideEmptySkills && gains[index] === 0)">
            <span class="text-xs">{{ formatSkill(skill) }}</span>
            <span class="text-xs">{{ gains[index].toFixed(2) }}</span>
          </template>
      </span>
    </div>
</template>
