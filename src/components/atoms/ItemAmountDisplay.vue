<script setup lang="ts">
import ItemIcon from "src/components/atoms/ItemIcon.vue";
import { ItemAmount } from "src/MooLite/core/inventory/items/ItemAmount";

const props = defineProps<{
    itemAmount: ItemAmount;
    name?: string;
}>();
</script>

<template>
    <div class="flex flex-col items-center" :title="name">
        <ItemIcon class="w-6 h-6" :item="itemAmount.itemHrid"></ItemIcon>
        <span>{{ itemAmount.count }}</span>
    </div>
</template>
