<script setup lang="ts">
import { ref } from "vue";
import ColorSample, { ColorSampleProps } from "./ColorSample.vue";
import ColorSampleType from "src/components/histoire-controls/Color/ColorSampleType";

export interface ColorSampleSetProps {
    title: string;
    colorSamples: ColorSampleProps[];
    type?: ColorSampleType;
}

const props = defineProps<ColorSampleSetProps>();

const sampleType = ref(props.type ?? ColorSampleType.Sample);
</script>

<template>
    <div class="flex flex-col gap-4 p-4 bg-neutral-800/40 rounded-mwi-default w-max">
        <p class="text-3xl font-bold text-dark-mode">{{ props.title }}</p>
        <div
            class="grid grid-cols-1 gap-4"
            :class="{
                'min-[560px]:grid-cols-2': props.colorSamples.length > 1,
                'min-[832px]:grid-cols-3': props.colorSamples.length > 2,
            }"
        >
            <ColorSample
                v-for="sample in props.colorSamples"
                :colorClass="sample.colorClass"
                :value="sample.value"
                :type="sampleType"
            />
        </div>
    </div>
</template>
