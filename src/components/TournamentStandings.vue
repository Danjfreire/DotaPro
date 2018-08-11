<template>
<section>
        <h2 class="pageTitle">Standings</h2>
        <div class="row">
            <div class="col-xl-6">
                <table class="table table-striped table-dark col-xl-6">
                    <tbody class="col-xl bg-dark2">
                        <tr v-for="item in standings.slice(0,8)" :key="item.name">
                            <td align="center" class="text-first">{{item.place}}</td>
                            <td class="text-silver">
                                <img class="team_img_mini2" v-bind:src="item.team.logo">{{item.team.name}}</td>
                            <td class="text-silver">
                                <span v-if="item.points != 0" class="pageTitle">{{item.points}} points +</span> 
                                <span class="text-money">${{item.prize}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-xl-6">
                <table class="table table-striped table-dark col-xl">
                    <tbody class="col-xl bg-dark2">
                        <tr v-for="item in standings.slice(8,16)" :key="item.name">
                            <td align="center" scope="row" class="text-silver">{{item.place}}</td>
                            <td class="text-silver">
                                <img class="team_img_mini2" v-bind:src="item.team.logo">{{item.team.name}}</td>
                            <td class="text-money">${{item.prize}}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </section>
</template>

<script>
export default {
  name: "TournamentStandings",
  props: ["standings"],
  methods: {
    sliceItems: function(start, end) {
        console.log("Logging here");
        console.log(this.standings);
       //return this.standings.slice(start, end); 
    }
  }
};
</script>
