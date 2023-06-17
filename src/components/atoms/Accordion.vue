<script lang="ts">
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
            class="flex items-center justify-between w-full p-2 my-2 text-sm font-semibold text-left text-gray-400 bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline"
            :aria-expanded="isOpen"
        >
            <slot name="title" />

            <svg
                class="w-3 transition-all duration-200 transform"
                :class="{
                    'rotate-0': isOpen,
                    'rotate-90': !isOpen,
                }"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 10"
                aria-hidden="true"
            >
                <path d="M15 1.2l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>

        <div v-show="isOpen">
            <slot name="content" />
        </div>
    </div>
</template>
