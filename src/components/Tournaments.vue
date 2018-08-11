<template>   
    <div class="container container-small transparente">
    <h1 class="pageTitle text-center">Tournaments</h1>
    <br>
    <br>
    <div class="input-group mb-3">
      <input type="text" class="form-control col-4" placeholder="Tournament name" aria-label="Tournament name" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary bg-secondary text-white"  type="button">Button</button>
      </div>
    </div>
    <br>

    <h2 class="pageTitle">Recent Tournaments</h2>
      <section>
          <Tcard v-bind:items="tournaments"></Tcard>
      </section>
    </div>
</template>

<script>
import Tcard from "./Tournament-card.vue";

export default {
  name: "Tournaments",
  components: {
    Tcard
  },
  created(){
    this.$http.get("http://localhost:5000/tournaments").then(response =>{
      this.tournaments = response.body;
    }, response =>{
      //error callback
    })
  },
  data() {
    return {
      tournaments: 
      [
        /* {
          name: "China Dota2 Super Major",
          logo: "rsz_china_super_major.jpg",
          tier: "Major",
          startDate: "2018-06-02",
          endDate: "2018-06-10",
          prizePool: "$1,500,000",
          points: "2250",
          standings: [
            {
            id: 1,
            place: "1st",
            prize: "555,000",
            points: "1,125",
            team_id: 2163,
            team: {
                id: 2,
                opendotaID: 2163,
                wins: 686,
                losses: 426,
                name: "Team Liquid",
                tag: "Liquid",
                logo: "https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/2163.png"
            
            }
          }
          ]
        } */          
        
        /* ,{
          t_name: "Dota 2 Asia Championship",
          t_logo: "dac2018.jpg",
          t_tier: "Major",
          t_startDate: "2018-03-29",
          t_endDate: "2018-04-07",
          t_prizePool: "$1,000,000",
          t_dpcPoints: "1500",
          t_firstPlace: "Mineski",
          t_firstPlaceLogo: "Mineski.png",
          t_secondPlace: "PSG.LGD",
          t_secondPlaceLogo: "PSG.LGD_full_logo.png",
          t_thirdPlace: "Virtus.pro",
          t_thirdPlaceLogo: "Virtus_Pro.png"
        } */
      ]
    };
  }
};
</script>
