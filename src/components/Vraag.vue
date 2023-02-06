<script setup>
import { defineProps, defineEmits } from "vue";

const { Vragen } = defineProps(["Vragen"]);
const emit = defineEmits(["answer"]);

const antwoordVerzend = (isCorrect) => {
  emit("answer", isCorrect);
};
</script>
<template>
  <div class="container">
    <div class="vraag-container">
      <h1>{{ Vragen.text }}</h1>
    </div>
    <div class="antwoorden-container">
      <div
        v-for="option in Vragen.options"
        @click="antwoordVerzend(option.isCorrect)"
        :key="option.id"
        class="option"
      >
        <div class="option-lable">
          <h3>{{ option.label }}</h3>
        </div>
        <div class="option-value">
          <p>{{ option.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .vraag-container {
    font-weight: bold;
    margin: 50px 0;
  }
  .antwoorden-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .option {
      overflow: hidden;
      background: rgba(14, 14, 14, 0.1);
      box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
      width: 500px;
      border-radius: 16px;
      display: flex;
      justify-content: space-between;
      height: 100%;
      width: 100%;
      .option-lable {
        background: rgb(255, 255, 255);
        width: 50px;
        text-align: center;
        height: 100%;

        h3 {
          font-weight: bold;
          font-size: 30px;
          color: black;
        }
      }
      .option-value {
        margin-right: 60px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          height: 100%;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
