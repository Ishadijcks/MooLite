<script setup lang="ts">
import {computed} from "vue";
import {MonsterHrid} from "src/MooLite/core/combat/monsters/MonsterHrid";

const props = defineProps<{
    monster: MonsterHrid
}>()

const imgUrl = computed(() => {
    const split = (props.monster as string).split("/")
    const monsterPostfix = split[split.length - 1]
    // TODO(@Isha): Research how these CDN resource urls are generated
    return `/static/media/combat_monsters_sprite.0f9c0366.svg#${monsterPostfix}`;
})
</script>

<template>
    <svg class="w-8 h-8">
        <use :href="imgUrl"></use>
    </svg>
</template>
