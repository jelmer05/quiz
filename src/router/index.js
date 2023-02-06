import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../vieuws/Homeview.vue";
import QuizView from "../vieuws/vragenview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/quiz",
      redirect: "/",
    },

    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizView,
    },
  ],
});

export default router;
