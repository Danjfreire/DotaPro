<template>
<body class="background_transparente">
      <Navbar></Navbar>
      <keep-alive include="Match">
        <router-view></router-view>  
      </keep-alive>
</body>
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
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
    background-color: #201F1D;
}
</style>
