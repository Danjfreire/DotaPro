<template>
  <b-navbar toggleable="md" type="dark" variant="dark" sticky="true">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">
      <img src="../../assets/Backgrounds/DotaProLogo.png">
      </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#">Tournaments</b-nav-item>
        <b-nav-item href="#">Teams</b-nav-item>
        <b-nav-item href="#">Players</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">en-US</b-dropdown-item>
          <b-dropdown-item href="#">pt-BR</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</template>

<script>
  export default {
    name: 'Navbar'
  }

</script>

<style>

</style>
