import { createRouter, createWebHistory } from "vue-router";
import { getAsyncPage } from "../utils/index";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Todo",
      name: "Todo",
      component: getAsyncPage("../views/Todo.vue"),
    },
    {
      path: "/Sale",
      name: "Sale",
      component: getAsyncPage("../views/Sale.vue"),
    },
    {
      path: "/Async",
      name: "AsyncDemo",
      component: getAsyncPage("../views/AsyncDemo.vue"),
    },
    {
      path: "/GDP",
      name: "GDP",
      component: () => import("../views/GDP.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
  ],
});
