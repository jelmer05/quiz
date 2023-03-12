<script setup>
import quizes from "../data/quizes.json";
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";

import vraag from "../components/Vraag.vue";
import vraagHeader from "../components/VraagHeader.vue";
import Score from "../components/Score.vue";

import { registerRuntimeHelpers } from "@vue/compiler-core";

const route = useRoute();

const quizId = parseInt(route.params.id);

const quiz = quizes.find((q) => q.id === quizId);

const goodQuestions = ref(0);
const currentQuestionIndex = ref(0);
const showResults = ref(false);

const onAnser = (isCorrect) => {
  if (isCorrect) {
    goodQuestions.value++;
  }
  if (currentQuestionIndex.value + 1 === quiz.questions.length) {
    return (showResults.value = true);
  }
  currentQuestionIndex.value++;
};

// const statusVraag = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`);

// grote projecten
// // eerste is functie om te kijken of het veranderd, tweede is de functie die het moet gaan uitvoeren
// watch(
//   () => currentQuestionIndex.value,
//   () => {
//     statusVraag.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
//   }
// );

// alleen paar dingen veranderen
const statusVraag = computed(() => {
  return `${currentQuestionIndex.value + 1}/${quiz.questions.length}`;
});

const barprocent = computed(() => {
  return `${((currentQuestionIndex.value + 1) / quiz.questions.length) * 100}%`;
});
</script>

<template>
  <vraagHeader :statusVraag="statusVraag" :barprocent="ba       rprocent" />
  <div>
    <vraag
      v-if="!showResults"
      :Vragen="quiz.questions[currentQuestionIndex]"
      @answer="onAnser"
    />

    <Score
      v-else
      :uitslagGoed="goodQuestions"
      :uitslagTotaal="quiz.questions.length"
    />
    <router-link to="/"><h3 class="text-center mt-5">Ga Home</h3></router-link>
  </div>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-go-to {
  opacity: 1;
}
.face-go-active {
  transition: all 10s ease;
}
</style>
