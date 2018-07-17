<template>
    <div class="container transparente">
        <div class="card bg-dark2">
            <div class="row">
                <div class="col-xl-1">
                    <img v-bind:src="require('../assets/Teams/Virtus_Pro.png')" class="team_page_img">
                </div>
                <div class="card-block col-xl-8">
                    <h3 class="card-title pageTitle">Virtus.pro</h3>
                    <span class="text-silver">Region:</span>
                    <span class="text-silver">CIS
                        <img v-bind:src="require('../assets/Regions/Cis.gif')">
                    </span>
                </div>
                <div class="col-xl-3">
                    <span class="pageTitle dpc points descricao">12372 points</span>
                    <br>
                    <span class="text-silver descricao">Pro circuit rank:</span>
                    <span class="text-money dpc_rank">#1</span>
                </div>
            </div>
        </div>

        <section>
            <h3 class="pageTitle">Players</h3>
            <div class="card transparente">
                <div class="row">
                    <div class="player_portrait">
                        <img class="team_page_player_img" v-bind:src="require('../assets/Players/virtus.pro/ramzes.png')">
                        <div class="player_name_portrait">
                            <span>
                                <img v-bind:src="require('../assets/Countries/Ru.png')"> <a class="pageTitle" href="#/player">Ramzes666</a></span>
                        </div>
                    </div>
                    
                    <div class="player_portrait">
                        <img class="team_page_player_img " v-bind:src="require('../assets/Players/virtus.pro/noone.png')">
                        <div class="player_name_portrait">
                            <span class="pageTitle">
                                <img v-bind:src="require('../assets/Countries/Ua.png')"> <a class="pageTitle" href="#/player">No[o]one</a></span>
                        </div>
                    </div>

                    <div class="player_portrait">
                        <img class="team_page_player_img " v-bind:src="require('../assets/Players/virtus.pro/9pasha.png')">
                        <div class="player_name_portrait">
                            <span class="pageTitle">
                                <img v-bind:src="require('../assets/Countries/Ru.png')"><a class="pageTitle" href="#/player"> 9pasha</a></span>
                        </div>
                    </div>

                    <div class="player_portrait">
                        <img class="team_page_player_img " v-bind:src="require('../assets/Players/virtus.pro/rodjer.png')">
                        <div class="player_name_portrait">
                            <span class="pageTitle">
                                <img v-bind:src="require('../assets/Countries/Ua.png')"><a class="pageTitle" href="#/player"> Rodjer</a></span>
                        </div>
                    </div>

                    <div class="player_portrait">
                        <img class="team_page_player_img " v-bind:src="require('../assets/Players/virtus.pro/solo.png')">
                        <div class="player_name_portrait">
                            <span class="pageTitle">
                                <img v-bind:src="require('../assets/Countries/Ru.png')"><a class="pageTitle" href="#/player"> Solo</a></span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section>
            <div class="row">
                <div class="col-xl-4">
                    <h3 class="pageTitle">Info</h3>
                    <div class="bg-dark2">
                        <div class="card-body bg-dark2">
                            <ul class="list-group">
                                <li class="list-group-item bg-dark2 border-money">
                                    <span class="text-silver">Location</span>
                                    <span class="pageTitle float_right">Russia
                                        <img v-bind:src="require('../assets/Countries/Ru.png')">
                                    </span>
                                </li>
                                <li class="list-group-item bg-dark2 border-money">
                                    <span class="text-silver">Pro Circuit Points</span>
                                    <span class="float_right text-silver">(
                                        <span class="text-money">#1</span>)</span>
                                    <span class="pageTitle float_right">12372</span>
                                </li>
                                <li class="list-group-item bg-dark2 border-money">
                                    <span class="text-silver">Captain</span>
                                    <span class="pageTitle float_right">Solo
                                        <img v-bindsrc="require('../assets/Countries/Ru.png')">
                                    </span>
                                </li>
                                <li class="list-group-item bg-dark2 border-money">
                                    <span class="text-silver">Coach</span>
                                    <span class="pageTitle float_right">ArtStyle
                                        <img v-bind:src="require('../assets/Countries/Ua.png')">
                                    </span>
                                </li>
                                <li class="list-group-item bg-dark2 border-money">
                                    <span class="text-silver">Earning</span>
                                    <span class="text-money float_right">$6,386,758</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br>
                    <h3 class="pageTitle">Stats</h3>
                    <div class="card-body bg-dark2">
                        <ul class="list-group">
                            <li class="list-group-item bg-dark2 border-money">
                                <span class="text-silver">Average GPM</span>
                                <span class="text-gpm float_right">2,092</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <span class="text-silver">Average XPM</span>
                                <span class="text-xpm float_right">2,168</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <span class="text-silver">Team KDA</span>
                                <span class="text-kda float_right">3.49</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <span class="text-silver">Record</span>
                                <span class="float_right">
                                    <span class="text-money">636</span>
                                    <span class="text-silver">-</span>
                                    <span class="text-red">399</span>
                                </span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <span class="text-silver">Win Rate</span>
                                <span class="text-money float_right">61.45%</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-8">
                    <h3 class="pageTitle">Recent Matches</h3>
                    <table class="table table-striped table-dark">
                        <tbody class="bg-dark2">
                            <tr v-for="i in 12">
                                <td class="col-xl-7">
                                    <span class="text-money">Victory</span>
                                    <span class="text-silver">VS</span>
                                    <span class="text-red">
                                        <img class="team_img_mini2" v-bind:src="require('../assets/Teams/600px-Natus_Vincere.png')">Natus Vincere</span>
                                </td>
                                <td class="col-xl-3">
                                    <span class="text-silver">ESL Birmingham</span>
                                </td>
                                <td class="col-xl-2">
                                    <span class="text-silver">2018-04-02</span>
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
export default {};
</script>
