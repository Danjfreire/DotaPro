<template>
    <div class="container transparente">
        <h1 class="pageTitle text-center">Teams</h1>
        <br>
        <br>
        <div class="input-group mb-3">
            <input type="text" class="form-control col-4" placeholder="Team name" aria-label="Tournament name" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary bg-secondary text-white" type="button">Search</button>
            </div>
        </div>
        <section>
            <div class="col-xl-12">
                <table class="table table-striped table-dark">
                    <thead>
                        <th class="text-silver transparente col-xl-3">Team</th>
                        <th class="text-silver transparente col-xl-3">Region</th>
                        <th class="text-silver transparente col-xl-2">Win %</th>
                        <th class="text-silver transparente col-xl-2">KDA</th>
                        <th class="text-silver transparente col-xl-2">DPC Rank</th>
                    </thead>
                    <tbody class="bg-dark2">
                        <tr v-for="team in teams">
                            <td class="pageTitle align-middle">
                                  <img class="team_img_mini3" v-bind:src="require('../assets/Teams/'+ team.logo)"> 
                                  <a class ="pageTitle" href="#/team">{{team.name}}</a>
                            </td>
                            <td class="text-silver align-middle">
                                 CIS
                            </td>
                            <td class="text-money align-middle">
                                <span>61.45%</span>
                            </td>
                            <td class="text-kda align-middle">
                                <span>3.52</span>
                            </td>
                            <td class="text-money align-middle">
                                <span>#1</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: "Teams",
  data() {
    return {
      teams: [
          {
            name:"Virtus.pro",
            logo: "Virtus_Pro.png"
          },
          {
            name:"Team Liquid",
            logo: "Team_Liquid.png"
          }
        ]
    };
  }
};
</script>
