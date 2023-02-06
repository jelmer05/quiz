<script setup>
import { defineProps } from "vue";

const { statusVraag, barprocent } = defineProps(["statusVraag", "barprocent"]);
</script>
<template>
  <header>
    <h3>vraag {{ statusVraag }}</h3>
    <div class="bar">
      <div class="progressie" :style="{ width: barprocent }"></div>
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  text-transform: capitalize;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 20px;
  h3 {
    font-weight: bold;
  }
  .bar {
    justify-content: center;
    border: 2px solid red;
    border-radius: 7px;
    width: 300px;
    height: 50px;
    background: rgba(195, 0, 0, 0.05);

    .progressie {
      height: 100%;
      width: 0%;
      background-color: red;
    }
  }
}
</style>
