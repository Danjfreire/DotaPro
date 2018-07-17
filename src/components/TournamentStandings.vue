<template>
<section>
        <h2 class="pageTitle">Standings</h2>
        <div class="row">
            <div class="col-xl-6">
                <table class="table table-striped table-dark col-xl-6">
                    <tbody class="col-xl bg-dark2">
                        <tr v-for="(item, index) in sliceItems(0,8)">
                            <td align="center" class="text-first">{{index + 1}}</td>
                            <td class="text-silver">
                                <img class="team_img_mini2" v-bind:src="require('../assets/Teams/'+ item.logo)">{{item.team}}</td>
                            <td class="text-silver">
                                <span class="pageTitle">1,125 Points</span> +
                                <span class="text-money">$555,000</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-xl-6">
                <table class="table table-striped table-dark col-xl">
                    <tbody class="col-xl bg-dark2">
                        <tr v-for="(item, index) in sliceItems(8,16)">
                            <td align="center" scope="row" class="text-silver">{{index + 1}}</td>
                            <td class="text-silver">
                                <img class="team_img_mini2" v-bind:src="require('../assets/Teams/'+ item.logo)">{{item.team}}</td>
                            <td class="text-money">$22,000</td>
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
      return this.standings.slice(start, end);
    }
  }
};
</script>
