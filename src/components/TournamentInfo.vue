<template>
<div class="container container-small transparente">
    <div class="card bg-dark2 ">
        <div class="row">
            <div class="col-xl-4">
                <img v-bind:src="require('../assets/Tournaments/rsz_china_super_major.jpg')" class="w-100">
            </div>
             <div class="card-block col-xl-5 px-3">
                <h4 class="card-title pageTitle">{{tournament.name}}</h4>
                    <span class="card-text text-red descricao">{{tournament.tier}}</span>
                    <br>
                    <span class="card-text text-silver my_font descricao" >{{tournament.region}}  <img v-bind:src="tournament.region_img"></span>
                    <br>
                    <span class="card-text text-silver my_font">{{tournament.startDate}} | {{tournament.endDate}}</span>
                    <br>
                    <span class="card-text text-silver my_font">${{tournament.prizePool}} - {{tournament.points}} DPC Points</span>
            </div>
            <div class="card-block px-3">
                <br>
                <span>
                    <img v-bind:src="require('../assets/Icons/gold-medal.png')">
                </span>
                <span>
                    <img class="team_img_mini" v-bind:src="tournament.standings[0].team.logo">
                </span>
                <span class="card-text text-silver">{{tournament.standings[0].team.name}}</span>
                <br>
                <span>
                    <img v-bind:src="require('../assets/Icons/second.png')">
                 </span>
                <span>
                    <img class="team_img_mini" v-bind:src="tournament.standings[1].team.logo">
                </span>
                <span class="card-text text-silver">{{tournament.standings[1].team.name}}</span>
                <br>
                <span>
                    <img v-bind:src="require('../assets/Icons/third.png')">
                </span>
                <span>
                    <img class="team_img_mini" v-bind:src="tournament.standings[2].team.logo">
                </span>
                <span class="card-text text-silver">{{tournament.standings[2].team.name}}</span>
            </div>
        </div>
    </div>
    
    <TournamentStandings v-bind:standings="tournament.standings"></TournamentStandings>
    <TournamentMatches v-bind:matches="matchIDs"></TournamentMatches>
    <Meta></Meta>
    
</div>
</template>

<script>
import TournamentStandings from "./TournamentStandings.vue";
import TournamentMatches from "./TournamentMatches.vue";
import Meta from "./Meta.vue";
import {EventBus} from './eventBus.js'

export default {
  name: "TournamentInfo",
  components: {
    TournamentStandings,
    TournamentMatches,
    Meta
  },
  created() {
    /* EventBus.$on('tournamentSelected', (parametro) =>{
      console.log("Emitiu");
      console.log("Dado antes:",this.dado);
      this.dado = parametro;
      console.log("Dado depois:",this.dado);
    }) */
    this.$http.get("http://localhost:5000/tournaments").then(response =>{
      this.tournament = response.body[0];
    }, response =>{
      //error callback
    })
    
    this.$http.get("http://localhost:5000/matches/9943").then(response =>{
      this.matchIDs = response.body;
    }, response =>{
      //error callback
    })
  },
  data() {
    return {
      dado:'',
      tournament:{},
      matchIDs:[] 
    };
  }
};
</script>
