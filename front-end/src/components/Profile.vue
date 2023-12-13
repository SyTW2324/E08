<template>
  <div>
    <h1>Perfil de Usuario</h1>
    <v-card>
      <v-card-title> Hola {{ userStore._full_name }}!</v-card-title>
      <v-card-subtitle>{{ userStore._mail }}</v-card-subtitle>
      <v-card-text>
        <p>ID: {{ userStore._id }}</p>
        <p>
          Fecha de Nacimiento:
          {{ userStore._birth_date.toLocaleString().split(",")[0] }}
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/userStore";
const userStore = useUserStore();
userStore.reloadInfo();
</script>
