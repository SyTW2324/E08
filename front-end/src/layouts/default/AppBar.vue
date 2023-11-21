<template>
  <v-app-bar flat color="orange darken-2">
    <v-app-bar-title class="nav-bar-title">E-Biblio</v-app-bar-title>
    <router-link to="/">
      <v-btn text="Home" class="nav-bar-btn"> </v-btn>
    </router-link>
    <router-link to="/signin">
      <v-btn text="Sing In" class="nav-bar-btn"> </v-btn>
    </router-link>
    <router-link to="/singup">
      <v-btn text="Sing Up" class="nav-bar-btn"> </v-btn>
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
</style>
