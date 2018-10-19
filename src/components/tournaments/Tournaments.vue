<template>
  <b-container>
    <h1 class="goldenText text-center">Tournaments</h1>

    <b-row>
      <b-col md="4">
        <b-form>
          <b-form-group>
            <b-form-input placeholder="Tournament name"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="warning">Search</b-button>
        </b-form>
      </b-col>
    </b-row>

    <h2 class="goldenText">Recent Tournaments</h2>
    <section>
      <tournamentCard v-bind:tournaments="tournaments"></tournamentCard>
    </section>


  </b-container>
</template>

<script>
  import tournamentCard from "./Tournament-card.vue";

  export default {
    name: "Tournaments",
    components: {
      tournamentCard
    },
    // created() {
    //   this.$http.get("http://localhost:5000/tournaments").then(response => {
    //     this.tournaments = response.body;
    //   }, response => {
    //     //error callback
    //   })
    // },
    data() {
      return {
        tournaments: [{
            name: "China Dota2 Super Major",
            logo: "rsz_china_super_major.jpg",
            tier: "Major",
            startDate: "2018-06-02",
            endDate: "2018-06-10",
            prizePool: "$1,500,000",
            points: "2250",
            standings: [{
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
            }]
          }
        ]
      };
    }
  };

</script>

<style>
  h1 {
    margin-top: 15px;
    margin-bottom: 35px;
  }

  h2 {
    margin-top: 25px;
    margin-bottom: 35px;
  }

</style>
