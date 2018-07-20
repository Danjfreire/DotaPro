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
                    <span class="card-text text-silver my_font descricao" >China  <img v-bind:src="tournament.region_img"></span>
                    <br>
                    <span class="card-text text-silver my_font">{{tournament.start_date}} | {{tournament.end_date}}</span>
                    <br>
                    <span class="card-text text-silver my_font">${{tournament.prize}} - {{tournament.points}} DPC Points</span>
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
    <TournamentMatches></TournamentMatches>
    <Meta></Meta>
    
</div>
</template>

<script>
import TournamentStandings from "./TournamentStandings.vue";
import TournamentMatches from "./TournamentMatches.vue";
import Meta from "./Meta.vue";

export default {
  name: "TournamentInfo",
  components: {
    TournamentStandings,
    TournamentMatches,
    Meta
  },
  data() {
    return {
      tournament:{
        logo:"",
        name:"China Dota2 Super Major",
        tier:"Major",
        start_date:"2018-06-02",
        end_date:"2018-06-10",
        region:"China",
        region_img:require('../assets/Regions/Cn.png'),
        prize:"1,500,000",
        points:"2250"
      },
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
