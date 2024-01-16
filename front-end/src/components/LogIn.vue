<template>
  <v-app class="bg_image">
    <v-card class="mx-auto mt-5" outlined>
      <div class="d-flex flex-column align-center justify-center">
        <v-img
          src="@/assets/logo_libro.png"
          :width="300"
          contain
          class="logo_pr"
        ></v-img>

        <p>R&W</p>
      </div>

      <v-card-title class="text-h5">Log In</v-card-title>
      <p class="mx-auto ml-5">Hi there! Nice to see you again.</p>

      <v-card-text>
        <v-form @submit.prevent="LogIn">
          <p class="mx-auto text-red">Username</p>
          <v-text-field data-cy="username" v-model="id"></v-text-field>
          <p class="mx-auto text-red">Password</p>
          <v-text-field
            data-cy="password"
            v-model="password"
            type="password"
          ></v-text-field>

          <div class="d-flex justify-center">
            <v-btn
              data-cy="login-btn"
              color="red"
              class="login_btn"
              type="submit"
            >
              <v-progress-circular
                v-if="isLoading"
                indeterminate
                color="white"
              ></v-progress-circular>
              <span v-else>Log in</span>
            </v-btn>
          </div>
        </v-form>

        <br />

        <v-alert v-if="missing_info" type="warning" closeable>
          Usuario y Contraseña obligatorios
        </v-alert>

        <v-alert v-if="show_alert" type="error" closeable>
          {{ alert_message }}
        </v-alert>
      </v-card-text>
    </v-card>

    <v-dialog width="500">
      <template v-slot:default="logged">
        <v-card title="Dialog">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close Dialog" @click="router.push('/home')"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
import { useUserStore } from "@/store/userStore";
import router from "@/router";
import PopUpLogIn from "@/components/PopUpLogIn.vue";
export default {
  data: () => ({
    id: "",
    password: "",
    isLoading: false,
    missing_info: false,
    alert_message: "",
    show_alert: false,
    logged: false,
    router: router,
  }),

  methods: {
    async LogIn() {
      const UserStore = useUserStore();
      this.missing_info = false;
      this.isLoading = true;
      this.show_alert = false;
      this.alert_message = "";
      if (this.id == "" || this.password == "") {
        this.missing_info = true;
        this.isLoading = false;
        return;
      }
      const response = await UserStore.logUserIn(this.id, this.password);
      if (response.code == 1) {
        this.show_alert = true;
        this.alert_message = response.message;
        this.isLoading = false;
        return;
      }
      this.isLoading = false;
      this.logged = true;
      return;
    },
  },
  components: {
    PopUpLogIn,
  },
};
</script>

<style scoped>
.logo_pr {
  max-width: 25%;
  max-height: 25%;
}

.login_btn {
  width: 100%;
}

.bg_image {
  background: url("@/assets/fondo_rojo.avif");
  background-size: cover;
}
</style>
