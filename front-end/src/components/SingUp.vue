<template>
  <v-card class="mx-auto mt-5" max-width="400" outlined>
    <v-card-title class="text-h5">Sing up</v-card-title>

    <v-card-text>
      <form @submit.prevent="submit">
        <v-text-field
          v-model="full_name.value.value"
          :counter="10"
          :error-messages="full_name.errorMessage.value"
          label="Full Name"
        ></v-text-field>

        <v-text-field
          v-model="user_name.value.value"
          :counter="10"
          :error-messages="user_name.errorMessage.value"
          label="User Name"
        ></v-text-field>

        <v-text-field
          v-model="password.value.value"
          type="password"
          :error-messages="password.errorMessage.value"
          label="Password"
        ></v-text-field>

        <v-text-field
          v-model="mail.value.value"
          :error-messages="mail.errorMessage.value"
          type="mail"
          label="E-mail"
        ></v-text-field>

        <v-text-field
          v-model="birth_date.value.value"
          type="date"
          :error-messages="birth_date.errorMessage.value"
          label="Birth-Date"
        ></v-text-field>

        <v-btn class="me-4" type="submit"> submit </v-btn>

        <v-btn @click="handleReset"> clear </v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import axios from "axios";
import { GenericObject, useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    full_name(value: string) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    user_name(value: string) {
      if (value?.length >= 2) return true;

      return "User Name needs to be at least 2 characters.";
    },

    mail(value: string) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },

    birth_date(value: Date) {
      return true;
    },
    password(value: string) {
      return true;
    },
  },
});
const full_name = useField("full_name");

const user_name = useField("user_name");

const mail = useField("mail");

const password = useField("password");

const birth_date = useField("birth_date");

const submit = handleSubmit(async (values) => {
  const user_info = JSON.stringify(values, null, 2);
  await registerUser(user_info);
});

async function registerUser(user: string) {
  try {
    const response = await axios.post("http://localhost:3002/users", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 201) {
      console.log("Sing up succesfull");
    }
    if (response.data.code == 0) {
      console.log(response.data.message);
    }
  } catch (error) {
    console.error("Error on sign up:", error);
    // Puedes manejar el error de alguna manera, como mostrando un mensaje al usuario.
  }
}
</script>
