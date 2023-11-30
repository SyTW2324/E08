<template>
 <v-app class="bg_image">
    <v-container>
      <div class="filter-bar mb-1  pa-2 white-bg">
        <div class="text-h6">
          <v-btn variant="text" icon="mdi-filter" ></v-btn>Filter
        </div>
        <v-row justify="end" align="center">
          <v-col sm="6" md="6">
            <!-- Barra de búsqueda -->
            <v-text-field append-icon="mdi-magnify" label="Search"></v-text-field>
          </v-col>
        </v-row>
      </div>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="pa-2 ma-2 d-flex align-center justify-center">
          <v-img
            src="@/assets/bookcovers/ElPrincipito_bookcover.jpg"
            contain
            class="bookcover_pr"
          ></v-img>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 d-flex align-center justify-center">
          <v-img
            src="@/assets/bookcovers/Alicia_bookcover.jpg"
            contain
            class="bookcover_pr"
          ></v-img>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 d-flex align-center justify-center">
          <v-img
            src="@/assets/bookcovers/1984_bookcover.jpg"
            contain
            class="bookcover_pr"
          ></v-img>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 d-flex align-center justify-center">
          <v-img
            src="@/assets/bookcovers/TodoLoQNuncaFuimos_bookcover.jpg"
            contain
            class="bookcover_pr"
          ></v-img>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 d-flex align-center justify-center">
          <v-img
            src="@/assets/bookcovers/SombraHueso_bookcover.jpg"
            contain
            class="bookcover_pr"
          ></v-img>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 d-flex align-center justify-center">
          <v-img
            src="@/assets/bookcovers/MobyDick_bookcover.jpeg"
            contain
            class="bookcover_pr"
          ></v-img>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 d-flex align-center justify-center">
          <v-img
            src="@/assets/bookcovers/AnaFrank_bookcover.jpg"
            contain
            class="bookcover_pr"
          ></v-img>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 d-flex align-center justify-center">
          <v-img
            src="@/assets/bookcovers/CodigoDaVinci_bookcover.jpg"
            contain
            class="bookcover_pr"
          ></v-img>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 d-flex align-center justify-center">
          <v-img
            src="@/assets/bookcovers/Hobbit_bookcover.jpg"
            contain
            class="bookcover_pr"
          ></v-img>
        </v-sheet>
      </v-col>
    </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup></script>

<style scoped>

.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.bookcover_pr {
  width: 300px;
  height: 300px;
}

.bg_image {
  background: url("@/assets/fondo_rojo.avif");
  background-size: cover;
}

.white-bg {
  background-color: white;
}
</style>
