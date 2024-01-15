// Composables
import { log } from "console";
import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/store/userStore";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "home",
        name: "Home2",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "signup",
        name: "signup",
        component: () => import("@/views/SignUp.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("@/views/LogIn.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/views/Profile.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const publicPages = ["/login", "/", "/signup", "/home"];
  const authRequired = !publicPages.includes(to.path);

  const token = localStorage.getItem("token");

  const userStore = useUserStore();

  if (authRequired && userStore.checkExpired()) {
    userStore.clearUserInfo();
    return next("/login");
  }

  return next();
});

export default router;
