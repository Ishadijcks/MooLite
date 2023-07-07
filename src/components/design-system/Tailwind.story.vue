<script setup lang="ts">
import { markRaw } from "vue";
import ColorSampleSet, { ColorSampleSetProps } from "../histoire-controls/Color/ColorSampleSet.vue";

const themeConfig = markRaw({
    fontSize: {
        xxs: "0.65rem",
    },
    colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        secondary: "var(--color-secondary)",
        "secondary-hover": "var(--color-secondary-hover)",
        "background-game": "var(--color-background-game)",
        "dark-mode": "var(--color-text-dark-mode)",
        progress: "var(--color-progress)",
        hitpoints: "var(--color-hitpoints)",
        manapoints: "var(--color-manapoints)",
        divider: "var(--color-divider)",
        ability: "var(--color-ability)",
        "ability-hover": "var(--color-ability-hover)",
        "market-sell": "var(--color-market-sell)",
        "market-sell-hover": "var(--color-market-sell-hover)",
        "market-buy": "var(--color-market-buy)",
        "market-buy-hover": "var(--color-market-buy-hover)",
        success: "var(--color-success)",
        "success-hover": "var(--color-success-hover)",
        warning: "var(--color-warning)",
        "warning-hover": "var(--color-warning-hover)",
        empty: "var(--color-empty)",
        "empty-hover": "var(--color-empty-hover)",
        disabled: "var(--color-disabled)",
        background: "var(--color-background)",
        midnight: {
            100: "var(--color-midnight-100)",
            200: "var(--color-midnight-200)",
            300: "var(--color-midnight-300)",
            400: "var(--color-midnight-400)",
            500: "var(--color-midnight-500)",
            550: "var(--color-midnight-550)",
            600: "var(--color-midnight-600)",
            700: "var(--color-midnight-700)",
            800: "var(--color-midnight-800)",
            900: "var(--color-midnight-900)",
        },
        ocean: {
            200: "var(--color-ocean-200)",
            300: "var(--color-ocean-300)",
            400: "var(--color-ocean-400)",
            500: "var(--color-ocean-500)",
            600: "var(--color-ocean-600)",
            700: "var(--color-ocean-700)",
            800: "var(--color-ocean-800)",
        },
        orange: {
            400: "var(--color-orange-400)",
            500: "var(--color-orange-500)",
            550: "var(--color-orange-550)",
            600: "var(--color-orange-600)",
            650: "var(--color-orange-650)",
            700: "var(--color-orange-700)",
        },
        scarlet: {
            400: "var(--color-scarlet-400)",
            500: "var(--color-scarlet-500)",
            600: "var(--color-scarlet-600)",
            700: "var(--color-scarlet-700)",
            800: "var(--color-scarlet-800)",
        },
        space: {
            100: "var(--color-space-100)",
            200: "var(--color-space-200)",
            250: "var(--color-space-250)",
            300: "var(--color-space-300)",
            400: "var(--color-space-400)",
            500: "var(--color-space-500)",
            600: "var(--color-space-600)",
            650: "var(--color-space-650)",
            700: "var(--color-space-700)",
            750: "var(--color-space-750)",
            800: "var(--color-space-800)",
            850: "var(--color-space-850)",
            880: "var(--color-space-880)",
            900: "var(--color-space-900)",
            950: "var(--color-space-950)",
        },
        neutral: {
            50: "var(--color-neutral-50)",
            100: "var(--color-neutral-100)",
            200: "var(--color-neutral-200)",
        },
        jade: {
            300: "var(--color-jade-300)",
            400: "var(--color-jade-400)",
            500: "var(--color-jade-500)",
        },
        burble: {
            200: "var(--color-burble-200)",
            250: "var(--color-burble-250)",
            300: "var(--color-burble-300)",
            350: "var(--color-burble-350)",
            400: "var(--color-burble-400)",
        },
        carol: {
            300: "var(--color-carol-300)",
        },
    },
    borderRadius: {
        "mwi-default": "4px",
    },
});

const colorGroupNames = ["midnight", "ocean", "orange", "scarlet", "space", "neutral", "jade", "burble", "carol"];
const colorVariants = Object.entries(themeConfig.colors);

const variantSets: ColorSampleSetProps[] = [];

variantSets.unshift(
    ...colorVariants
        .filter(([color, _]) => {
            return colorGroupNames.includes(color);
        })
        .map(([color, shades]) => {
            return {
                title: color.split("")[0].toLocaleUpperCase() + color.slice(1),
                colorSamples: Object.entries(shades).map(([shade, value]) => {
                    return {
                        colorClass: `bg-${color}-${shade}`,
                        value,
                    };
                }),
            };
        })
        .sort((a, b) => {
            // sort by title
            return a.title.localeCompare(b.title);
        })
);

const oneOffColors = Object.fromEntries(
    colorVariants.filter(([color, _]) => {
        return !colorGroupNames.includes(color);
    })
) as Record<string, string>;

const primaryColorSampleSet: ColorSampleSetProps = {
    title: "Primary",
    colorSamples: [
        {
            colorClass: "bg-primary",
            value: oneOffColors.primary,
        },
        {
            colorClass: "bg-primary-hover",
            value: oneOffColors["primary-hover"],
        },
    ],
};

const secondaryColorSampleSet: ColorSampleSetProps = {
    title: "Secondary",
    colorSamples: [
        {
            colorClass: "bg-secondary",
            value: oneOffColors.secondary,
        },
        {
            colorClass: "bg-secondary-hover",
            value: oneOffColors["secondary-hover"],
        },
    ],
};

const abilitySampleSet: ColorSampleSetProps = {
    title: "Ability",
    colorSamples: [
        {
            colorClass: "bg-ability",
            value: oneOffColors.ability,
        },
        {
            colorClass: "bg-ability-hover",
            value: oneOffColors["ability-hover"],
        },
    ],
};

const backgroundSampleSet: ColorSampleSetProps = {
    title: "Background",
    colorSamples: [
        {
            colorClass: "bg-background",
            value: oneOffColors.background,
        },
        {
            colorClass: "bg-background-game",
            value: oneOffColors["background-game"],
        },
    ],
};

const barSampleSet: ColorSampleSetProps = {
    title: "Bar",
    colorSamples: [
        {
            colorClass: "bg-progress",
            value: oneOffColors.progress,
        },
        {
            colorClass: "bg-hitpoints",
            value: oneOffColors.hitpoints,
        },
        {
            colorClass: "bg-manapoints",
            value: oneOffColors.manapoints,
        },
        {
            colorClass: "bg-empty",
            value: oneOffColors.empty,
        },
        {
            colorClass: "bg-empty-hover",
            value: oneOffColors["empty-hover"],
        },
    ],
};

const marketSampleSet: ColorSampleSetProps = {
    title: "Market",
    colorSamples: [
        {
            colorClass: "bg-market-sell",
            value: oneOffColors["market-sell"],
        },
        {
            colorClass: "bg-market-sell-hover",
            value: oneOffColors["market-sell-hover"],
        },
        {
            colorClass: "bg-market-buy",
            value: oneOffColors["market-buy"],
        },
        {
            colorClass: "bg-market-buy-hover",
            value: oneOffColors["market-buy-hover"],
        },
    ],
};

const miscSampleSet: ColorSampleSetProps = {
    title: "Misc",
    colorSamples: [
        {
            colorClass: "bg-dark-mode",
            value: oneOffColors["dark-mode"],
        },
        {
            colorClass: "bg-divider",
            value: oneOffColors.divider,
        },
        {
            colorClass: "bg-disabled",
            value: oneOffColors.disabled,
        },
    ],
};

const statusSampleSet: ColorSampleSetProps = {
    title: "Status",
    colorSamples: [
        {
            colorClass: "bg-success",
            value: oneOffColors.success,
        },
        {
            colorClass: "bg-success-hover",
            value: oneOffColors["success-hover"],
        },
        {
            colorClass: "bg-warning",
            value: oneOffColors.warning,
        },
        {
            colorClass: "bg-warning-hover",
            value: oneOffColors["warning-hover"],
        },
    ],
};

const oneOffColorSets: ColorSampleSetProps[] = [
    primaryColorSampleSet,
    secondaryColorSampleSet,
    abilitySampleSet,
    backgroundSampleSet,
    barSampleSet,
    marketSampleSet,
    miscSampleSet,
    statusSampleSet,
];

variantSets.unshift(...oneOffColorSets);
</script>

<template>
    <Story title="MWI" group="design-system" icon="mdi:tailwind" responsiveDisabled auto-props-disabled>
        <Variant title="Colors" icon="fluent:color-24-filled">
            <div class="flex flex-col gap-4">
                <ColorSampleSet
                    v-for="variantSet in variantSets"
                    :key="variantSet.title"
                    :title="variantSet.title"
                    :colorSamples="variantSet.colorSamples"
                />
            </div>
        </Variant>
    </Story>
</template>
