<template>   
    <div class="container transparente">
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
  data() {
    return {
      tournaments: [
        {
          t_name: "China Dota2 Super Major",
          t_logo: "rsz_china_super_major.jpg",
          t_tier: "Major",
          t_startDate: "2018-06-02",
          t_endDate: "2018-06-10",
          t_prizePool: "$1,500,000",
          t_dpcPoints: "2250",
          t_firstPlace: "Team Liquid",
          t_firstPlaceLogo: "Team_Liquid.png",
          t_secondPlace: "Virtus.pro",
          t_secondPlaceLogo: "Virtus_Pro.png",
          t_thirdPlace: "PSG.LGD",
          t_thirdPlaceLogo: "PSG.LGD_full_logo.png"
        },
        {
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
        }
      ]
    };
  }
};
</script>
