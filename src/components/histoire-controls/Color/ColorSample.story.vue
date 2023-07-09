<script setup lang="ts">
import { ref } from "vue";
import ColorSample from "./ColorSample.vue";
import ColorSampleType from "src/components/histoire-controls/Color/ColorSampleType";

const color = ref("orange-500");
const value = ref("var(--color-orange-500)");
</script>

<template>
    <Story
        title="Color/Sample"
        group="histoire-controls"
        icon="ph:eyedropper-sample-duotone"
        :layout="{ type: 'grid', width: '33%' }"
        responsive-disabled
        auto-props-disabled
    >
        <Variant title="Default (Sample)" icon="fluent:color-24-filled">
            <ColorSample :colorClass="color" :value="value" />
        </Variant>
        <Variant title="Background" icon="fluent:color-background-24-regular">
            <ColorSample :colorClass="color" :value="value" :type="ColorSampleType.Background" />
            <template v-slot:source>
                <textarea v-pre>
                    <ColorSample
                      :colorClass="color" 
                      :value="value" 
                      :type="ColorSampleType.Background" 
                    />
                </textarea>
            </template>
        </Variant>
        <Variant title="Border" icon="teenyicons:border-all-outline">
            <ColorSample :colorClass="color" :value="value" :type="ColorSampleType.Border" />
            <template v-slot:source>
                <textarea v-pre>
                    <ColorSample
                      :colorClass="color" 
                      :value="value" 
                      :type="ColorSampleType.Border" 
                    />
                </textarea>
            </template>
        </Variant>
        <Variant title="Text" icon="ion:text">
            <ColorSample :colorClass="color" :value="value" :type="ColorSampleType.Text" />
            <template v-slot:source>
                <textarea v-pre>
                    <ColorSample
                      :colorClass="color" 
                      :value="value" 
                      :type="ColorSampleType.Text" 
                    />
                </textarea>
            </template>
        </Variant>
    </Story>
</template>

<docs lang="md">
# Color/Sample
</docs>
