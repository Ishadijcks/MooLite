<script setup lang="ts">

import PluginManagerDisplay from "src/components/PluginManagerDisplay.vue";

const pluginManager = window.mooLite.pluginManager
</script>

<template>
  <PluginManagerDisplay :manager="pluginManager"></PluginManagerDisplay>
</template>

<style scoped>

</style>
