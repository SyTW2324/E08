<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
    ></v-text-field>

    <v-text-field
      v-model="birth_date.value.value"
      :error-messages="birth_date.errorMessage.value"
      label="Birth-Date"
    ></v-text-field>

    <v-btn class="me-4" type="submit"> submit </v-btn>

    <v-btn @click="handleReset"> clear </v-btn>
  </form>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value: string) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },

    email(value: string) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },

    birth_date(value: Date) {
      return true;

      return "Must be a valid e-mail.";
    },
  },
});
const name = useField("name");

const email = useField("email");

const birth_date = useField("birth_date");

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>
