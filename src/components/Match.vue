<template>
<div class="container transparente">
    <div class="card bg-dark2">    
        <div class="card-body ">
            <div class="row">
                <div class="col-md-7">
                <h3 class="text-silver">{{matchdata.league.name}}</h3>
                <span class="pageTitle">Match {{matchdata.match_id}}</span>
                </div>
                 <div>
                    <span class="player_stats_desc">PLAYED ON</span>
                    <br>
                    <span class="text-silver">2018-03-12</span>
                </div>
                <div class="col-md-1">
                    <span class="player_stats_desc">REGION</span>
                    <br>
                    <span class="text-silver">China</span>
                </div>
                <div class="col-md-2">
                    <span class="player_stats_desc">DURATION</span>
                    <br>
                    <span class="text-silver">{{secondsToMinutes(matchdata.duration)}}</span>
                </div>     
            </div>
        </div>       
    </div>
    <section class="bg-dark2">
        <div class="col-md-12">
            <h4 class="text-silver text-center">
                <span v-if="matchdata.radiant_win==true"><img class="team_img_mini3" v-bind:src="matchdata.radiant_team.logo_url">{{matchdata.radiant_team.name}}</span>
                <span v-else><img class="team_img_mini3" v-bind:src="matchdata.dire_team.logo_url">{{matchdata.dire_team.name}}</span>
                Victory
            </h4>
        </div>
        <div class="col-md-12 text-center">
            <h4 v-on:click="printData">
                <span class="text-money">{{matchdata.radiant_score}}</span>
                <span class="text-silver"> x </span>
                <span class="text-red">{{matchdata.dire_score}}</span>
            </h4>
        </div>
        <MatchPicks v-bind:match="matchdata"></MatchPicks>
        <MatchBuilds v-bind:side="Radiant" v-bind:players="matchdata.players.slice(0,5)"></MatchBuilds>
        <MatchBuilds side="Dire" v-bind:players="matchdata.players.slice(5,10)"></MatchBuilds>

    </section>
</div>
</template>

<script>
import MatchPicks from "./MatchPicks.vue";
import MatchBuilds from "./MatchBuilds.vue";
import  EventBus  from "./eventBus";

export default {
  components: {
    MatchPicks,
    MatchBuilds
  },
  created() {
    
     this.$http.get("https://api.opendota.com/api/matches/"+ this.$route.params.id).then(
      response => {
        this.matchdata = response.body;
      },
      response => {
        //error
      }
    ); 
  },
  data() {
    return {
      matchid: "",
      matchdata: {}
    };
  },
  methods: {
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
      return minutes + ":" + seconds;
    }
  }
};
</script>
