<template>
    <section>
        <h3 class="pageTitle"> Matches</h3>
        <article>
            <table class="table table-striped table-dark">
                <thead class="bg-dark2">
                    <tr>
                        <th class="col-xl-1 text-silver ">Match ID</th>
                        <th class="col-xl-1 text-silver ">Score</th>
                        <th class="col-xl-4 text-silver ">Radiant</th>
                        <th class="col-xl-4 text-silver ">Dire</th>
                        <th class="col-xl-1 text-silver ">Duration</th>
                    </tr>
                </thead>
                <tbody class="bg-dark2 col-xl">
                    <tr v-for="match in matchdata" :key="match.match_id">
                        <td class="cold-md-1 align-middle"><a class="pageTitle" v-on:click="selectMatch(match)" href="#/match">{{match.match_id}}</a></td>
                        <td class="col-md-1 align-middle">
                            <span class="text-money">{{match.radiant_score}}</span>
                            <span class="text-silver">:</span>
                            <span class="text-red">{{match.dire_score}}</span>
                        </td>
                        <td class="col-md-4">
                            <span class="text-silver col-xl-1">
                                <img class="team_img_mini2" v-bind:src="match.radiant_team.logo_url">{{match.radiant_team.name}}</span>
                            <div class="row">
                                <div class="col-xl-1"></div>
                                <div class="col-xl-2" v-for="player in match.players.slice(0,5)" :key="player.name">
                                    <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/' + player.hero_id+ '.png')">
                                </div>
                                <div class="col-xl-1"></div>
                            </div>
                            <div class="row">
                                <div class="col-xl-1"></div>
                                <div v-for="ban in radiant_bans(match.picks_bans)" :key="ban.hero_id">
                                    <img class="hero_ban" v-bind:src="require('../assets/Hero-icons/'+ ban.hero_id +'.png')">
                                </div>
                            </div>
                        </td>
                        <td class="col-md-4">
                            <span class="text-silver col-xl-1">
                                <img class="team_img_mini2" v-bind:src="match.dire_team.logo_url">{{match.dire_team.name}}</span>
                            <div class="row">
                                <div class="col-xl-1"></div>
                                <div class="col-xl-2" v-for="player in match.players.slice(5,10)" :key="player.name">
                                    <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/' + player.hero_id + '.png')">
                                </div>
                                <div class="col-xl-1"></div>
                            </div>
                            <div class="row">
                                <div class="col-xl-1"></div>
                                <div v-for="ban in dire_bans(match.picks_bans)" :key="ban.hero_id">
                                    <img class="hero_ban" v-bind:src="require('../assets/Hero-icons/'+ ban.hero_id +'.png')">
                                </div>
                            </div>
                        </td>
                         <td class=" col-md-1 text-silver align-middle">{{secondsToMinutes(match.duration)}}</td>
                    </tr>
                </tbody>
            </table>
        </article>       
    </section>
</template>

<script>

import {EventBus} from './eventBus.js'

export default {
  name: "TournamentMatches",
  props: ["matches"],
  created() {
    for (var i = 0; i < this.matches.length; i++) {
      this.$http.get("https://api.opendota.com/api/matches/3943981461").then(
        response => {
          this.matchdata.push(response.body);
          console.log(this.matchdata);
        },
        response => {
          console.log(response);
        }
      );
    }
  },
  data() {
    return {
      matchdata: []
    };
  },
  methods: {
    radiant_bans: function(picks_bans){
        return picks_bans.filter(function (bans){
            return bans.is_pick === false && bans.team === 0
        });
    },
    dire_bans: function(picks_bans){
        return picks_bans.filter(function (bans){
            return bans.is_pick === false && bans.team === 1
        });
    },
    secondsToMinutes: function(seconds) {
      var sec_num = parseInt(seconds, 10); // don't forget the second param
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - hours * 3600) / 60);
      var seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return  minutes + ":" + seconds;
    },
    selectMatch: function(match) {
        this.bus.$emit("matchSelected", match);
    }
  }
};
</script>
