<template>
  <v-app-bar flat color="orange darken-2">
    <v-app-bar-nav-icon
      class="nav-bar-icon"
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-app-bar-title class="nav-bar-title">E-Biblio</v-app-bar-title>
    <v-toolbar-items class="mt-5">
      <router-link to="/">
        <v-btn text="Home" class="nav-bar-btn"> </v-btn>
        <v-icon class="nav-bar-icon">mdi-home</v-icon>
      </router-link>
      <router-link to="/login">
        <v-btn text="Log in" class="nav-bar-btn"> </v-btn>
        <v-icon class="nav-bar-icon">mdi-login</v-icon>
      </router-link>
      <router-link to="/signup">
        <v-btn text="Sign Up" class="nav-bar-btn"> </v-btn>
        <v-icon class="nav-bar-icon mr-2">mdi-account-plus</v-icon>
      </router-link>
    </v-toolbar-items>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="top" temporary>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" :to="item.route">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
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
};
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
