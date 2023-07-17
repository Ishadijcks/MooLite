<script setup lang="ts">
import { computed } from "vue";
import { ItemHrid } from "src/MooLite/core/inventory/ItemHrid";

export interface Props {
    item: ItemHrid;
    size?: string;
}

const props = withDefaults(defineProps<Props>(), {
    size: "8",
});

const imgUrl = computed(() => {
    const split = (props.item as unknown as string).split("/");
    const itemPostfix = split[split.length - 1];
    // TODO(@Isha): Research how these CDN resource urls are generated
    return `/static/media/items_sprite.951ef1ec.svg#${itemPostfix}`;
});
</script>

<template>
    <svg :class="'w-' + size + ' h-' + size">
        <use :href="imgUrl"></use>
    </svg>
</template>
