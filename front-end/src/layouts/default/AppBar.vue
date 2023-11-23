<template>
  <v-app-bar flat color="orange darken-2">
    <v-app-bar-title class="nav-bar-title">E-Biblio</v-app-bar-title>
    <router-link to="/">
      <v-btn text="Home" class="nav-bar-btn"> </v-btn>
      <v-icon class="nav-bar-icon">mdi-home</v-icon>
    </router-link>
    <router-link to="/login">
      <v-btn text="Log in" class="nav-bar-btn"> </v-btn>
      <v-icon class="nav-bar-icon">mdi-login</v-icon>
    </router-link>
    <router-link to="/singup">
      <v-btn text="Sing Up" class="nav-bar-btn"> </v-btn>
      <v-icon class="nav-bar-icon mr-4">mdi-account-plus</v-icon>
    </router-link>
  </v-app-bar>
</template>

<script lang="ts" setup>
//
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
