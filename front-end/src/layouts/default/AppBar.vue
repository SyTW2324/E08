<template>
  <v-app-bar scroll-behavior="collapse" flat color="red darken-2">
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
      @click="logout()"
      class="nav-bar-btn hidden-sm-and-down"
    >
      Logout
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="left" temporary>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

export default defineComponent({
  data: () => ({
    drawer: false,
    group: null,
    items_not_auth: [
      {
        title: "Home",
        route: "/",
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
  }),
  methods: {
    isAuthenticated() {
      const token = localStorage.getItem("token");
      if (token != null) return true;
      return false;
    },
    logout() {
      localStorage.removeItem("token");
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
