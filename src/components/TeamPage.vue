<template>
    <div class="container container-small transparente">
        <div class="card bg-dark2">
            <div class="row">
                <div class="col-xl-1">
                    <img v-bind:src="team.logo" class="team_page_img">
                </div>
                <div class="card-block col-xl-8">
                    <h3 class="card-title pageTitle">{{team.name}}</h3>
                    <span class="text-silver">Region:</span>
                    <span class="text-silver">{{team.region}}
                        <img v-bind:src="team.region_logo">
                    </span>
                </div>
                <div class="col-xl-3">
                    <span class="pageTitle dpc points descricao">{{team.points}} points</span>
                    <br>
                    <span class="text-silver descricao">Pro circuit rank:</span>
                    <span class="text-money dpc_rank">#{{team.rank}}</span>
                </div>
            </div>
        </div>

        <section>
            <h3 class="pageTitle">Players</h3>
            <div class="card transparente">
                <div class="row">
                    <div class="player_portrait">
                        <img class="team_page_player_img" v-bind:src="players.p1_img">
                        <div class="player_name_portrait">
                            <span>
                                <img v-bind:src="players.p1_region"><a class="pageTitle my_font" href="#/player">{{players.p1_name}}</a></span>
                        </div>
                    </div>
                    
                    <div class="player_portrait">
                        <img class="team_page_player_img " v-bind:src="players.p2_img">
                        <div class="player_name_portrait">
                            <span class="pageTitle">
                                <img v-bind:src="players.p2_region"> <a class="pageTitle my_font" href="#/player">{{players.p2_name}}</a></span>
                        </div>
                    </div>

                    <div class="player_portrait">
                        <img class="team_page_player_img " v-bind:src="players.p3_img">
                        <div class="player_name_portrait">
                            <span class="pageTitle">
                                <img v-bind:src="players.p3_region"><a class="pageTitle my_font" href="#/player">{{players.p3_name}}</a></span>
                        </div>
                    </div>

                    <div class="player_portrait">
                        <img class="team_page_player_img " v-bind:src="players.p4_img">
                        <div class="player_name_portrait">
                            <span class="pageTitle">
                                <img v-bind:src="players.p4_region"><a class="pageTitle my_font" href="#/player">{{players.p4_name}}</a></span>
                        </div>
                    </div>

                    <div class="player_portrait">
                        <img class="team_page_player_img " v-bind:src="players.p5_img">
                        <div class="player_name_portrait">
                            <span class="pageTitle">
                                <img v-bind:src="players.p5_region"><a class="pageTitle my_font" href="#/player">{{players.p5_name}}</a></span>
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
                                    <span class="pageTitle float_right">{{info.location}}
                                        <img v-bind:src="info.location_img">
                                    </span>
                                </li>
                                <li class="list-group-item bg-dark2 border-money">
                                    <span class="text-silver">Pro Circuit Points</span>
                                    <span class="float_right text-silver">(
                                        <span class="text-money">#{{info.dpc_rank}}</span>)</span>
                                    <span class="pageTitle float_right">{{info.points}}</span>
                                </li>
                                <li class="list-group-item bg-dark2 border-money">
                                    <span class="text-silver">Captain</span>
                                    <span class="pageTitle float_right">{{info.captain}}
                                        <img v-bindsrc="captain_region">
                                    </span>
                                </li>
                                <li class="list-group-item bg-dark2 border-money">
                                    <span class="text-silver">Coach</span>
                                    <span class="pageTitle float_right">{{info.coach}}
                                        <img v-bind:src="info.coach_region">
                                    </span>
                                </li>
                                <li class="list-group-item bg-dark2 border-money">
                                    <span class="text-silver">Earning</span>
                                    <span class="text-money float_right">${{info.earning}}</span>
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
                                <span class="text-gpm float_right">{{stats.gpm}}</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <span class="text-silver">Average XPM</span>
                                <span class="text-xpm float_right">{{stats.xpm}}</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <span class="text-silver">Team KDA</span>
                                <span class="text-kda float_right">{{stats.kda}}</span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <span class="text-silver">Record</span>
                                <span class="float_right">
                                    <span class="text-money">{{stats.victories}}</span>
                                    <span class="text-silver">-</span>
                                    <span class="text-red">{{stats.defeats}}</span>
                                </span>
                            </li>
                            <li class="list-group-item bg-dark2 border-money">
                                <span class="text-silver">Win Rate</span>
                                <span class="text-money float_right">{{stats.win_rate}}%</span>
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
                                    <span class="text-money my_font">{{match.result}}</span>
                                    <span class="text-silver my_font">VS</span>
                                    <span class="text-red my_font">
                                        <img class="team_img_mini2" v-bind:src="match.opponent_logo">{{match.opponent}}</span>
                                </td>
                                <td class="col-xl-3">
                                    <span class="text-silver my_font">{{match.tournament}}</span>
                                </td>
                                <td class="col-xl-2">
                                    <span class="text-silver my_font">{{match.date}}</span>
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
    data (){
        return{
            team:{
                name: "Virtus.pro",
                logo:require('../assets/Teams/Virtus_Pro.png'),
                region:"CIS",
                region_logo:require('../assets/Regions/Cis.gif'),
                points:"12372",
                rank:"1"
            },
            players:{
                p1_name:"Ramzes666",
                p1_img:require('../assets/Players/virtus.pro/ramzes.png'),
                p1_region:require('../assets/Countries/Ru.png'),
                p2_name:"No[o]one",
                p2_img:require('../assets/Players/virtus.pro/noone.png'),
                p2_region: require('../assets/Countries/Ua.png'),
                p3_name:"9pasha",
                p3_img:require('../assets/Players/virtus.pro/9pasha.png'),
                p3_region:require('../assets/Countries/Ru.png'),
                p4_name:"Rodjer",
                p4_img:require('../assets/Players/virtus.pro/rodjer.png'),
                p4_region:require('../assets/Countries/Ua.png'),
                p5_name:"Solo",
                p5_img:require('../assets/Players/virtus.pro/solo.png'),
                p5_region:require('../assets/Countries/Ru.png')
            },
            info:{
                location:"Russia",
                location_img:require('../assets/Countries/Ru.png'),
                dpc_rank:"1",
                points:"12372",
                captain:"Solo",
                captain_region:require('../assets/Countries/Ru.png'),
                coach:"ArtStyle",
                coach_region:require('../assets/Countries/Ua.png'),
                earning:"6,386,758"
            },
            stats:{
                gpm:"2,092",
                xpm:"2168",
                kda:"3,49",
                victories:"636",
                defeats:"399",
                win_rate:"61.45"
            },
            match:{
                result:"Victory",
                opponent:"Natus Vincere",
                opponent_logo:require('../assets/Teams/600px-Natus_Vincere.png'),
                date:"2018-04-02",
                tournament:"ESL Birmingham"
            }
        }
    }
};
</script>
