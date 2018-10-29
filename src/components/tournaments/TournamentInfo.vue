<template>
  <b-container class="bg-white">
    <b-row>
      <b-col cols="5" >
        <b-img src="https://i2.wp.com/www.vpesports.com/wp-content/uploads/2018/06/19.jpg?fit=1000%2C563&ssl=1" class="w-100"></b-img>
      </b-col>
      <b-col cols="7">
        <h4 class="card-title pageTitle">{{tournament.name}}</h4>
        <span class="card-text text-red descricao">{{tournament.tier}}</span>
        <br>
        <span class="card-text text-silver my_font descricao">{{tournament.region}} <img v-bind:src="tournament.region_img"></span>
        <br>
        <span class="card-text text-silver my_font">{{tournament.startDate}} | {{tournament.endDate}}</span>
        <br>
        <span class="card-text text-silver my_font">${{tournament.prizePool}} - {{tournament.points}} DPC Points</span>
      </b-col>
      <b-col cols="6">
        <ul>
          <li v-for="team in tournament.standings.slice(0,8)" :key="team.name">
            {{team.place}} - 
            <img class="team_img_mini" v-bind:src="team.logo">{{team.name}}
            </li>
        </ul>
      </b-col>
      <b-col cols="6">
        <ul>
          <li v-for="team in tournament.standings.slice(8,16)" :key="team.name">
            {{team.place}} - 
            <img class="team_img_mini" v-bind:src="team.logo">{{team.name}}
            </li>
        </ul>
      </b-col>

      <!-- <br>
          <span>
            <img v-bind:src="require('../../assets/Icons/gold-medal.png')">
          </span>
          <span>
            <img class="team_img_mini" v-bind:src="tournament.standings[0].team.logo">
          </span>
          <span class="card-text text-silver">{{tournament.standings[0].team.name}}</span>
          <br>
          <span>
            <img v-bind:src="require('../../assets/Icons/second.png')">
          </span>
          <span>
            <img class="team_img_mini" v-bind:src="tournament.standings[1].team.logo">
          </span>
          <span class="card-text text-silver">{{tournament.standings[1].team.name}}</span>
          <br>
          <span>
            <img v-bind:src="require('../../assets/Icons/third.png')">
          </span>
          <span>
            <img class="team_img_mini" v-bind:src="tournament.standings[2].team.logo">
          </span>
          <span class="card-text text-silver">{{tournament.standings[2].team.name}}</span> -->

    </b-row>
    <!-- <TournamentStandings v-bind:standings="tournament.standings"></TournamentStandings> -->
    <TournamentMatches v-bind:matches="matchdata"></TournamentMatches>
    <Meta>
    </Meta>

  </b-container>
</template>

<script>
  import TournamentStandings from "./TournamentStandings.vue";
  import TournamentMatches from "../TournamentMatches.vue";
  import Meta from "../Meta.vue";
  import {
    EventBus
  } from '../eventBus.js'

  export default {
    name: "TournamentInfo",
    components: {
      TournamentStandings,
      TournamentMatches,
      Meta
    },
    created() {
      this.$http.get("http://localhost:5000/tournaments").then(response => {
        this.tournament = response.body[0];
      }, response => {
        //error callback
      })

      this.$http.get("http://localhost:5000/matches/9943").then(response => {
        this.matchIDs = response.body;
        for (var i = 0; i < this.matchIDs.length; i++) {
          this.$http.get("https://api.opendota.com/api/matches/" + this.matchIDs[i].matchid).then(
            response => {
              this.matchdata.push(response.body);
              console.log(this.matchdata);
            },
            response => {
              console.log(response);
            }
          );
        }
        console.log(this.matchIDs);
      }, response => {
        console.log("deu pau aqui");
      })


    },
    data() {
      return {
        dado: '',
        tournament: {
          standings: ''
        },
        matchIDs: [],
        matchdata: []
      };
    }
  };

</script>

<style>
  .team_img_mini {
    width: 50px;
    height: auto;
  }

  ul{
    list-style-type: none;
  }

</style>
