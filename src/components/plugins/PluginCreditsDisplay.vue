<script setup lang="ts">
import { computed } from "vue";
import { MooLitePlugin } from "src/MooLite/core/plugins/MooLitePlugin";
import { PluginAuthorCredits } from "src/MooLite/core/plugins/PluginAuthorCredits";

const props = defineProps<{
    plugin: MooLitePlugin;
}>();

const credits = computed((): PluginAuthorCredits => {
    return props.plugin.credits;
});

const contributorText = computed(() => {
    if (!credits.value.contributors) {
        return "";
    }
    return "Other contributors include " + credits.value.contributors.sort().join(", ");
});
</script>

<template>
    <span class="italic text-xxs" :title="contributorText">
        <span>Created by {{ credits.author }}</span>
        <span v-if="credits.author !== credits.maintainer"> and maintained by {{ credits.maintainer }}</span>
    </span>
</template>

<style></style>
