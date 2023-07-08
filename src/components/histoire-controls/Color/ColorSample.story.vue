<script setup lang="ts">
import ColorSample from "./ColorSample.vue";

const colors = {
    slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        750: "#283548",
        800: "#1e293b",
        850: "#151f32",
        900: "#0f172a",
        950: "#09101f",
    },
};
</script>

<template>
    <Story
        title="Color/Sample"
        group="histoire-controls"
        icon="ph:eyedropper-sample-duotone"
        :layout="{ type: 'single', iframe: false }"
        responsive-disabled
        auto-props-disabled
    >
        <Variant title="Original">
            <ColorSample colorClass="orange-500" value="var(--color-orange-500)" />
        </Variant>
        <Variant title="HstColorShades">
            <HstColorShades
                :key="'orange'"
                :shades="{ 500: 'var(--color-orange-500)', 600: 'var(--color-orange-600)' }"
                :get-name="(shade) => `bg-orange-${shade}`"
            >
                <template #default="{ color }">
                    <div class="h-16 max-w-[16rem] rounded-mwi-default" :style="{ backgroundColor: color }" />
                </template>
            </HstColorShades>
        </Variant>
        <Variant title="background">
            <HstColorShades
                v-for="(shades, key) of colors"
                :key="key"
                :shades="shades"
                :get-name="(shade) => `${key}-${shade}`"
            >
                <template #default="{ color }">
                    <div
                        class="htw-rounded htw-h-[100px]"
                        :style="{
                            backgroundColor: color,
                        }"
                    />
                </template>
            </HstColorShades>
        </Variant>
    </Story>
</template>

<docs lang="md">
# Color/Sample
</docs>
