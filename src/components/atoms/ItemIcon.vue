<script setup lang="ts">
import { computed } from "vue";
import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";

const props = defineProps<{
    item: ItemHrid;
    size: string;
}>();

const imgUrl = computed(() => {
    const split = (props.item as unknown as string).split("/");
    const itemPostfix = split[split.length - 1];
    // TODO(@Isha): Research how these CDN resource urls are generated
    return `/static/media/items_sprite.951ef1ec.svg#${itemPostfix}`;
});
</script>

<template>
    <svg :class="'w-' + (size ?? 8) + ' h-' + (size ?? 8)">
        <use :href="imgUrl"></use>
    </svg>
</template>
