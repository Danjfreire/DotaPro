<template>
<body class="background_transparente">
      <Navbar></Navbar>
      <keep-alive include="Match">
        <router-view></router-view>  
      </keep-alive>
</body>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import "./css/custom.css";


export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
body {
  background-image: url("./assets/Backgrounds/rsz_1aegis_background.jpg");
}
</style>
