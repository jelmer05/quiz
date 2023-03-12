<script setup>
import q from "../data/quizes.json";
import { ref, watch } from "vue";

import Card from "../components/Card.vue";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>
<template>
  <header>
    <div class="row justify-content-around">
      <div class="col-sm-5">
        <h1 @click="search = ''">Quizes jelmer</h1>
      </div>
      <div class="col-sm-5 justify-content-center d-flex">
        <input v-model.trim="search" type="text" placeholder="zoek..." />
      </div>
    </div>
  </header>
  <main class="container-fluid">
    <div class="options-container">
      <!-- quiz vragen -->
      <Card v-for="quiz in quizes" :quiz="quiz" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
header {
  margin-bottom: 50px;
  margin-top: 15px;
}
input {
  border: none;
  background-color: gray;
  opacity: 0.5;
  height: 40px;
  border-radius: 22px;
  text-align: center;
  &:focus {
    transition: 0.6s;
    color: white;
    opacity: 1;
  }
}
.options-container {
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
}
</style>
