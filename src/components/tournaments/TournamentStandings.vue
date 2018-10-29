<template>
  <section>
    <h2 class="pageTitle">Standings</h2>
    <b-row>
      <b-col>
        <table class="table table-striped table-dark col-xl custom_table">
          <tbody class="col-xl bg-dark2">
            <tr v-for="item in standings.slice(0,8)" :key="item.name">
              <td align="center" class="text-silver">{{item.place}}</td>
              <td class="text-silver">
                <img class="team_img_mini" v-bind:src="item.team.logo">{{item.team.name}}</td>
              <td class="text-silver">
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>

      <b-col>
        <table class="table table-striped table-dark col-xl5 custom_table">
          <tbody class="col-xl bg-dark2">
            <tr v-for="item in standings.slice(8,16)" :key="item.name">
              <td align="center" scope="row" class="text-silver">{{item.place}}</td>
              <td class="text-silver">
                <img class="team_img_mini" v-bind:src="item.team.logo">{{item.team.name}}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </section>
</template>

<script>
  export default {
    name: "TournamentStandings",
    props: ["standings"],
    methods: {
      sliceItems: function (start, end) {
        console.log("Logging here");
        console.log(this.standings);
        //return this.standings.slice(start, end); 
      }
    }
  };

</script>

<style>
  .team_img_mini {
    width: 30px;
    height: auto;
  }

  .custom_table{
      margin-left: 0px;
      margin-right: 0px;
      padding: 0px;
  }

</style>
