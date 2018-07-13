<template>
  <body>
    <Navbar></Navbar>
    <Tournaments></Tournaments>
  </body>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Tournaments from "./components/Tournaments.vue";
import "./css/custom.css";

export default {
  name: "app",
  components: {
    Navbar,
    Tournaments
  }
};
</script>

<style>
body {
  background-image: url("./assets/Backgrounds/rsz_1aegis_background.jpg");
}
</style>
