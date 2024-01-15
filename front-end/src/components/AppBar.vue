<template>
  <nav>
    <v-app-bar color="red darken-2">
      <v-app-bar-title class="nav-bar-title">E-Biblio</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="nav-bar-icon hidden-md-and-up"
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-btn
        v-if="!isAuthenticated()"
        v-for="item in items_not_auth"
        :key="item.title"
        :to="item.route"
        class="nav-bar-btn hidden-sm-and-down"
      >
        {{ item.title }}
      </v-btn>

      <v-btn
        v-if="isAuthenticated()"
        v-for="item in items_auth"
        :key="item.title"
        :to="item.route"
        class="nav-bar-btn hidden-sm-and-down"
      >
        {{ item.title }}
      </v-btn>

      <v-btn
        v-if="isAuthenticated()"
        @click="logout()"
        class="nav-bar-btn hidden-sm-and-down"
      >
        Logout
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
      v-if="!isAuthenticated()"
    >
      <v-list>
        <v-list-item
          v-for="item in items_not_auth"
          :key="item.title"
          :to="item.route"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
      v-if="isAuthenticated()"
    >
      <v-list>
        <v-list-item
          v-for="item in items_auth"
          :key="item.title"
          :to="item.route"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item key="logout" @click="logout()">Logout</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/userStore";

const userInfo = useUserStore();
const router = useRouter();

export default defineComponent({
  data: () => ({
    drawer: false,
    group: null,
    items_not_auth: [
      {
        title: "Home",
        route: "/home",
      },
      {
        title: "Log in",
        route: "/login",
      },
      {
        title: "Sign up",
        route: "/signup",
      },
    ],
    items_auth: [
      {
        title: "Home",
        route: "/",
      },
      {
        title: "Profile",
        route: "/profile",
      },
    ],
  }),
  methods: {
    isAuthenticated() {
      const token = localStorage.getItem("token");
      if (token != null) return true;
      return false;
    },
    logout() {
      userInfo.clearUserInfo();
      window.location.reload();
      router.go(0);
      router.push("/");
    },
    goto_profile() {
      router.push("/profile");
    },
  },
});
</script>
<style scoped>
.nav-bar-title {
  color: white;
}
.nav-bar-btn {
  color: white;
}
.nav-bar-icon {
  color: white;
}
</style>
