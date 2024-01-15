<template>
  <v-container class="text-center fill-height">
    <v-row justify="center">
      <v-col>
        <v-card class="mx-auto mt-5 elevation-24 card" outlined>
          <v-avatar color="red" size="x-large">
            <v-icon icon="mdi-account-circle"></v-icon>
          </v-avatar>
          <v-card-title class="title">
            Hola {{ userStore._full_name }}!
          </v-card-title>
          <v-card-subtitle class="subtitle">{{
            userStore._mail
          }}</v-card-subtitle>
          <v-card-text>
            <p class="Text_title">Nombre de usuario</p>
            <p class="text">{{ userStore.id }}</p>
            <p class="Text_title">Fecha de Nacimiento</p>
            <p class="text">
              {{ userStore._birth_date.toLocaleString().split(",")[0] }}
            </p>
          </v-card-text>

          <v-card-actions>
            <v-btn class="bg-red white--text" @click="eliminarUsuario"
              >Eliminar Usuario</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn class="bg-red white--text" @click="modificarInformacion"
              >Modificar información</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/userStore";
const userStore = useUserStore();
userStore.reloadInfo();

const eliminarUsuario = () => {
  // Lógica para eliminar el usuario
};

const modificarInformacion = () => {
  // Lógica para modificar la información del usuario
};
</script>

<style scoped>
.logo_pr {
  max-width: 5%;
  max-height: 5%;
}

.title {
  font-size: 3rem;
  padding: 0.5rem;
}

.subtitle {
  font-size: 1rem;
  margin-bottom: 0.8rem;
}

.card {
  padding: 2rem;
  border-radius: 1rem;
}

.text {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.Text_title {
  color: red;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
}

.fill-height {
  height: 100%;
}

.align-center {
  align-items: center;
}
</style>
