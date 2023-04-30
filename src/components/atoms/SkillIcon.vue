<script setup lang="ts">
import { SkillHrid } from "src/MooLite/core/skills/SkillHrid";
import { computed } from "vue";

const props = defineProps<{
    skill: SkillHrid;
}>();

const imgUrl = computed(() => {
    const split = (props.skill as unknown as string).split("/");
    const skillPostfix = split[split.length - 1];
    // TODO(@Isha): Research how these CDN resource urls are generated
    return `/static/media/skills_sprite.3704eb13.svg#${skillPostfix}`;
});
</script>

<template>
    <svg width="100%" height="100%">
        <use :href="imgUrl"></use>
    </svg>
</template>

<style scoped></style>
