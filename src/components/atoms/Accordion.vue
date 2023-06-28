<script lang="ts">
import ChevronIcon from "src/components/icons/Chevron.vue";

export default {
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<template>
    <div>
        <button
            @click="toggleAccordion()"
            class="flex items-center justify-between w-full p-2 text-sm font-semibold text-left text-dark-mode bg-midnight-500 rounded-mwi-default hover:bg-midnight-300 focus:outline-none focus:shadow-outline"
            :aria-expanded="isOpen"
        >
            <slot name="title" />

            <ChevronIcon
                class="w-3 transition-all duration-200 transform"
                :class="{
                    'rotate-0': isOpen,
                    'rotate-90': !isOpen,
                }"
            />
        </button>

        <div v-show="isOpen">
            <slot name="content" />
        </div>
    </div>
</template>
