<!-- App.vue -->

<template>
  <div id="Home">
    <!-- Contenido principal de tu página -->

    <!-- Incluir el componente de pie de página -->
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  components: {
    Footer,
  },
  // Otro código necesario para tu aplicación.
};
</script>

<style>
.Home {
  width: 100%;
  margin: 0 auto;
}
/* Estilos globales de tu aplicación, si es necesario. */
</style>
