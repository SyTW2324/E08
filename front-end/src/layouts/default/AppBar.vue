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
      v-for="item in items"
      :key="item.title"
      :to="item.route"
      class="nav-bar-btn hidden-sm-and-down"
    >
      {{ item.title }}
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" :to="item.route">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
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
