<template>
    <div class="container my-3" >
        <div class="card bg-dark2 my-3" v-for="campeonato in items">
          <div class="row ">
            <div class="col-md-4">
              <img v-bind:src="require('../assets/Tournaments/'+ campeonato.t_logo)" class="w-100">
            </div>
            <div class="card-block col-md-4 px-3">
              <h3 class="card-title pageTitle">{{campeonato.t_name}}</h3>
              <span class="card-text text-red descricao" >{{campeonato.t_tier}}</span>
              <br>
              <span class="card-text text-silver">{{campeonato.t_startDate}} | {{campeonato.t_endDate}}</span>
              <br>
              <span class="card-text text-silver">{{campeonato.t_prizePool}} - {{campeonato.t_dpcPoints}} DPC Points</span>
            </div>
            <div class="card-block px-3">
              <br>
              <span><img src="../assets/Icons/gold-medal.png"></span>
              <span><img class="team_img_mini" v-bind:src="require('../assets/Teams/'+ campeonato.t_firstPlaceLogo)"></span>
              <span class="card-text text-silver">{{campeonato.t_firstPlace}}</span>
              <br>
              <span><img src="../assets/Icons/second.png"></span>
              <span><img class="team_img_mini" v-bind:src="require('../assets/Teams/'+ campeonato.t_secondPlaceLogo)"></span>
              <span class="card-text text-silver">{{campeonato.t_secondPlace}}</span>
              <br>
              <span><img src="../assets/Icons/third.png"></span>
              <span><img class="team_img_mini" v-bind:src="require('../assets/Teams/'+ campeonato.t_thirdPlaceLogo)"></span>
              <span class="card-text text-silver">{{campeonato.t_thirdPlace}}</span>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "Tcard",
  props: ["items"]
};
</script>
