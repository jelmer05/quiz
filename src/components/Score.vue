<script setup>
import { defineProps } from "vue";
const { scoreGoed, scoreTotaal } = defineProps([
  "uitslagGoed",
  "uitslagTotaal",
]);
</script>

<template>
  <div class="container">
    <p>Je resultaat</p>
    <h1>{{ uitslagGoed }}/{{ uitslagTotaal }}</h1>
  </div>
</template>
<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
