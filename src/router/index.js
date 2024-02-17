/*
 * @Author: ian2020 ian2020008@gmail.com
 * @Date: 2022-08-19 18:59:38
 * @LastEditors: ian2020 ian2020008@gmail.com
 * @LastEditTime: 2022-09-01 22:46:46
 * @FilePath: /sex/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router";
// console.log(import.meta.env.BASE_URL)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/tabs/IndexView.vue"),
    },
    {
      path: "/tabs/home",
      name: "tabs_home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/tabs/IndexView.vue"),
    },
    {
      path: "/DialogIsAdvertis",
      name: "DialogIsAdvertis",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/DialogIsAdvertis.vue"),
    },
  ],
});

export default router;
