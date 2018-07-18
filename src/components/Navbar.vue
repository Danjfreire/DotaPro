<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <div class="container">
        <img class="navbar-brand mb-0 pt-0 pb-0" src="../assets/Backgrounds/DotaProLogo.png">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSite">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link text-silver" href="#/">Tournaments</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-silver" href="#/teams">Teams</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-silver" href="#/players">Players</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
