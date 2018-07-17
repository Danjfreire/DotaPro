<template>
<div class="container transparente">
    <div class="card bg-dark2 ">
        <div class="row">
            <div class="col-xl-4">
                <img v-bind:src="require('../assets/Tournaments/rsz_china_super_major.jpg')" class="w-100">
            </div>
             <div class="card-block col-xl-4 px-3">
                <h3 class="card-title pageTitle">China Dota2 Super Major</h3>
                    <span class="card-text text-red descricao">Major</span>
                    <br>
                    <span class="card-text text-silver">2018-06-02 | 2018-06-10</span>
                    <br>
                    <span class="card-text text-silver">$1,500,000 - 2250 DPC Points</span>
            </div>
            <div class="card-block px-3">
                <br>
                <span>
                    <img v-bind:src="require('../assets/Icons/gold-medal.png')">
                </span>
                <span>
                    <img class="team_img_mini" v-bind:src="require('../assets/Teams/Team_Liquid.png')">
                </span>
                <span class="card-text text-silver">Team Liquid</span>
                <br>
                <span>
                    <img v-bind:src="require('../assets/Icons/second.png')">
                 </span>
                <span>
                    <img class="team_img_mini" v-bind:src="require('../assets/Teams/Team_Liquid.png')">
                </span>
                <span class="card-text text-silver">Virtus.pro</span>
                <br>
                <span>
                    <img v-bind:src="require('../assets/Icons/third.png')">
                </span>
                <span>
                    <img class="team_img_mini" v-bind:src="require('../assets/Teams/Team_Liquid.png')">
                </span>
                <span class="card-text text-silver">PSG.LGD</span>
            </div>
        </div>
    </div>
    
    <TournamentStandings v-bind:standings="standings"></TournamentStandings>
    <Matches></Matches>
    <Meta></Meta>
    
</div>
</template>

<script>
import TournamentStandings from "./TournamentStandings.vue";
import Matches from "./Matches.vue";
import Meta from "./Meta.vue";

export default {
  name: "TournamentInfo",
  props: ["tournament"],
  components: {
    TournamentStandings,
    Matches,
    Meta
  },
  data() {
    return {
      standings: [
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        },
        {
          team: "Team Liquid",
          logo: "Team_Liquid.png",
          prize: "200,000",
          points: "1150"
        }
      ]
    };
  }
};
</script>
