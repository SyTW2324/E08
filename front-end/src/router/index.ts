// Composables
import { log } from "console";
import { createRouter, createWebHistory } from "vue-router";

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
        path: "signup",
        name: "signup",
        component: () => import("@/views/SignUp.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("@/views/LogIn.vue"),
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

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/", "/signup"];
  const authRequiered = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  if (authRequiered && !loggedIn) {
    console.log(authRequiered);
    console.log(!loggedIn);
    return next("/login");
  }
  next();
});

export default router;
