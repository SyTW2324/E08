<template>
  <v-card class="mx-auto mt-5" max-width="400" outlined>
    <v-card-title class="text-h5">Log In</v-card-title>

    <v-card-text>
      <form @submit.prevent="submit">
        <v-text-field
          v-model="id.value.value"
          :error-messages="id.errorMessage.value"
          label="User Name"
        ></v-text-field>

        <v-text-field
          v-model="password.value.value"
          type="password"
          :error-messages="password.errorMessage.value"
          label="Password"
        ></v-text-field>

        <v-btn class="me-4" type="submit">Log In</v-btn>

        <v-btn @click="handleReset">Clear</v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import axios from "axios";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    id(value: string) {
      if (value?.length >= 2) return true;

      return "User Name needs to be at least 2 characters.";
    },

    password(value: string) {
      if (value?.length >= 4) return true;

      return "Password needs to be at least 6 characters.";
    },
  },
});

const id = useField("id");
const password = useField("password");

const submit = handleSubmit(async (values) => {
  const { id, password } = values;
  await loginUser(id, password);
});

async function loginUser(id: string, password: string) {
  try {
    const response = await axios.get("http://localhost:3002/login", {
      params: { id, password },
    });

    if (response.status === 200) {
      alert("Log In successful");
    } else {
      console.log(response.data.message);
    }
  } catch (error) {
    console.error("Error on login:", error);
  }
}
</script>
