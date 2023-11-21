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
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "singup",
        name: "singup",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/SingUp.vue"),
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
  const publicPages = ["/login", "/", "/singup"];
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
