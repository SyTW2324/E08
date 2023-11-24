<template>
  <v-app-bar scroll-behavior="collapse" flat color="red darken-2">
    <v-app-bar-title class="nav-bar-title">E-Biblio</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon
      class="nav-bar-icon"
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list>
      <v-list-item to="/">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item to="/signup">
        <v-list-item-title>Sign Up</v-list-item-title>
      </v-list-item>
      <v-list-item to="/login">
        <v-list-item-title>Log In</v-list-item-title>
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
