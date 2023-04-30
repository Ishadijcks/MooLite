<script setup lang="ts">
import {computed} from "vue";
import {ItemHrid} from "src/MooLite/core/inventory/ItemHrid";

const props = defineProps<{
    item: ItemHrid
}>()

const imgUrl = computed(() => {
    const split = (props.item as string).split("/")
    const itemPostfix = split[split.length - 1]
    // TODO(@Isha): Research how these CDN resource urls are generated
    return `/static/media/items_sprite.20cec8ed.svg#${itemPostfix}`;
})

</script>

<template>
    <svg class="w-8 h-8">
        <use :href="imgUrl"></use>
    </svg>
</template>
