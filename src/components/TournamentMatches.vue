<template>
    <section>
        <h3 class="pageTitle"> Matches</h3>
        <article>
            <table class="table table-striped table-dark">
                <thead class="bg-dark2">
                    <tr>
                        <th class="col-xl-1 text-silver ">Match ID</th>
                        <th class="col-xl-1 text-silver ">Score</th>
                        <th class="col-xl-4 text-silver ">Winner</th>
                        <th class="col-xl-4 text-silver ">Loser</th>
                        <th class="col-xl-1 text-silver ">Duration</th>
                    </tr>
                </thead>
                <tbody class="bg-dark2 col-xl">
                    <tr>
                        <td class="cold-md-1 align-middle"><a class="pageTitle" href="#/match">9800233</a></td>
                        <td class="col-md-1 align-middle">
                            <span class="text-money">38</span>
                            <span class="text-silver">:</span>
                            <span class="text-red">25</span>
                        </td>
                        <td class="col-md-4">
                            <span class="text-silver col-xl-1">
                                <img class="team_img_mini2" v-bind:src="require('../assets/Teams/Team_Liquid.png')">Team Liquid</span>
                            <span class="text-money col-xl-1">Radiant</span>
                            <div class="row">
                                <div class="col-xl-1"></div>
                                <div class="col-xl-2" v-for="i in 5">
                                    <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/luna_full.png')">
                                </div>
                                <div class="col-xl-1"></div>
                            </div>
                            <div class="row">
                                <div class="col-xl-1"></div>
                                <div v-for="i in 6">
                                    <img class="hero_ban" v-bind:src="require('../assets/Hero-icons/antimage_full.png')">
                                </div>
                            </div>
                        </td>
                        <td class="col-md-4">
                            <span class="text-silver col-xl-1">
                                <img class="team_img_mini2" v-bind:src="require('../assets/Teams/Virtus_pro.png')">Virtus.pro</span>
                            <span class="text-red col-xl-1">Dire</span>
                            <div class="row">
                                <div class="col-xl-1"></div>
                                <div class="col-xl-2" v-for="i in 5">
                                    <img class="hero_pick" v-bind:src="require('../assets/Hero-icons/luna_full.png')">
                                </div>
                                <div class="col-xl-1"></div>
                            </div>
                            <div class="row">
                                <div class="col-xl-1"></div>
                                <div v-for="i in 6">
                                    <img class="hero_ban" v-bind:src="require('../assets/Hero-icons/antimage_full.png')">
                                </div>
                            </div>
                        </td>
                         <td class=" col-md-1 text-silver align-middle">40:21</td>
                    </tr>
                </tbody>
            </table>
        </article>       
    </section>
</template>

<script>
export default {
    name:"TournamentMatches"
}
</script>
