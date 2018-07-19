<template>
    <div class="container container-small transparente">
        <h1 class="pageTitle text-center">Players</h1>
        <section>
            <div class="row">
                <div class="col-xl-4">
                    <h3 class="text-silver text-center">Top Fantasy</h3>
                    <table class="table table-striped table-dark">
                        <tbody class="bg-dark2">
                            <tr v-for="i in 12">
                                <td class="col-xl-3">
                                    <img class="team_img_mini2" v-bind:src="require('../assets/Players/virtus.pro/ramzes.png')">
                                    <a class="text-silver" href="#/player">Ramzes666</a>
                                </td>
                                <td class="col-xl-1">
                                    <span class="pageTitle">21.4</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-xl-4">
                     <h3 class="text-silver text-center">Top KDA</h3>
                    <table class="table table-striped table-dark">
                        <tbody class="bg-dark2">
                            <tr v-for="i in 12">
                                <td class="col-xl-3">
                                    <img class="team_img_mini2" v-bind:src="require('../assets/Players/virtus.pro/ramzes.png')">
                                    <a class="text-silver" href="#/player">Ramzes666</a>
                                </td>
                                <td class="col-xl-1">
                                    <span class="text-kda">3.13</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-xl-4">
                     <h3 class="text-silver text-center">Top GPM</h3>
                    <table class="table table-striped table-dark">
                        <tbody class="bg-dark2">
                            <tr v-for="i in 12">
                                <td class="col-xl-3">
                                    <img class="team_img_mini2" v-bind:src="require('../assets/Players/virtus.pro/ramzes.png')">
                                    <a class="text-silver" href="#/player">Ramzes666</a>
                                </td>
                                <td class="col-xl-1">
                                    <span class="text-gpm">680</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name:"Players"
}
</script>
