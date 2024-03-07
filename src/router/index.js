import { createRouter, createWebHistory, onBeforeRouteLeave } from "vue-router";

import Home from "../views/Home/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/video",
    name: "video",
    component: () => import("../views/Home/Video.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Public/Login.vue"),
  },
  {
    path: "/find",
    name: "find",
    component: () => import("../views/Find/Find.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/community",
    name: "community",
    component: () => import("../views/Community/Community.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/communityinfo",
    name: "communityinfo",
    component: () => import("../views/Community/CommunityInfo.vue"),
  },
  {
    path: "/novel",
    name: "novel",
    component: () => import("../views/Novel/Novel.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/novelinfo",
    name: "novelinfo",
    component: () => import("../views/Novel/NovelInfo.vue"),
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/My/My.vue"),
  },
  {
    // 找不到路由时
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach((to, from) => {
  if (from.meta.keepAlive) {
    try {
      sessionStorage.setItem(from.name + "_scroll", document.querySelector(".scroll_view").scrollTop)
    } catch {
      console.error("记录滚动失效: " + from.name)
    }
  }
})

router.afterEach((to) => {
  if (to.meta.keepAlive) {
    setTimeout(() => {
      try {
        document.querySelector(".scroll_view").scrollTop = sessionStorage.getItem(to.name + "_scroll")
      } catch {
        console.error('滚动失效: ' + to.name)
      }
    }, 200)
  }
})
export default router;
