<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";

const router = useRouter();
const { quiz } = defineProps(["quiz"]);

const navToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <div class="card-quiz" @click="navToQuiz">
    <img :src="quiz.img" :alt="quiz.name" />
    <div class="card-quiz-text">
      <div class="row mb-3">
        <h2>{{ quiz.name }}</h2>
      </div>
      <div class="row">
        <p>{{ quiz.questions.length }} vragen</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-quiz {
  text-decoration: none !important;
  color: black;
  height: 300px;
  width: 250px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 11px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-right: 20px;
  margin-bottom: 35px;
  cursor: pointer;
  &:hover {
    scale: 1.02;
    background-color: rgba(186, 186, 186, 0.1);
    transition: 0.4s;
  }

  .card-quiz-text {
    text-align: center;
    text-transform: capitalize;

    h2 {
      font-weight: bold;
      letter-spacing: 1px;
    }
    p {
      opacity: 0.8;
    }
  }
}
</style>
