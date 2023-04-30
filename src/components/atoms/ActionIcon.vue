<script setup lang="ts">
import {computed} from "vue";
import {ItemHrid} from "src/MooLite/core/inventory/ItemHrid";
import {ActionHrid} from "src/MooLite/core/actions/ActionHrid";

const props = defineProps<{
    actionHrid: ActionHrid
    itemHrid: ItemHrid
    showAction: boolean
}>()

const imgUrl = computed(() => {
    // TODO(@Isha): Research how these CDN resource urls are generated
    if (props.showAction) {
        const split = (props.actionHrid as string).split("/")
        const actionPostfix = split[split.length - 1]
        return `/static/media/actions_sprite.cd16f1a6.svg#${actionPostfix}`;
    } else {
        const split = (props.itemHrid as string).split("/")
        const itemPostfix = split[split.length - 1]
        return `/static/media/items_sprite.20cec8ed.svg#${itemPostfix}`;
    }

})

</script>

<template>
    <svg class="w-8 h-8">
        {{ imgUrl }}
        <use :href="imgUrl"></use>
    </svg>
</template>
