<template>
    <div class="container container-small transparente">
            <div class="row bg-dark2">
                <div> 
                    <img class="player_page_img" v-bind:src="require('../assets/Players/virtus.pro/ramzes.png')"> 
                </div>
                <div class="card-block col-md-3">     
                    <span class="player_page_name pageTitle">
                        <img class="team_img_mini2" v-bind:src="require('../assets/Teams/Virtus_Pro.png')">
                        Ramzes666</span>
                    <br>
                    <span class="text-silver">Roman Kushnarev</span>
                    <br>
                    <span class="text-silver">Russia <img v-bind:src="require('../assets/Countries/Ru.png')"></span>
                    <br>
                    <a href="https://twitter.com/ramzesdoto"> <img class="social_media_icon" src="../assets/Icons/twitter.png"></a>
                    <a href="https://www.twitch.tv/ramzesdoto"> <img class="social_media_icon" src="../assets/Icons/twitch.png"></a>
                </div>
                <div class="col-md-2">
                    <span class="player_stats_desc">DPC POINTS</span>
                    <br>
                    <span class="text-silver my_font">4124</span>
                    <br>
                    <span class="player_stats_desc ">LAST MATCH</span>
                    <br>
                    <span class="text-silver">2 hours ago</span>
                </div>
                <div class="col-md-2">
                    <span class="player_stats_desc">RECORD</span>
                    <br>
                    <span class="text-money">2605</span>
                    <span class="text-silver">-</span>
                    <span class="text-red">1727</span>
                    <br>
                    <span class="player_stats_desc ">WIN RATE</span>
                    <br>
                    <span class="text-money">59.48%</span>
                </div>
                <div class="col-md-2">
                    <span class="player_stats_desc ">SOLO MMR</span>
                    <br>
                    <span class="text-silver">8095</span>
                     <br>
                    <span class="player_stats_desc ">GROUP MMR</span>
                    <br>
                    <span class="text-silver">6814</span>
                </div>
                    <div class="text-center">
                        <div class="rank_container text-center">
                            <img class="rank_img" src="../assets/rank-icons/season_top10.png">
                            <div class="rank">
                                <span class="rank_text text-silver">4</span>
                            </div>
                        </div>
                        <span class="text-silver my_font">Immortal</span>
                    </div>
                </div>
            

        <section>
            <div class="row">
                <div class="col-md-8">
                    <h5 class="pageTitle">Most Played Heroes</h5>
                    <table class="table table-striped table-dark">
                        <thead>
                            <th class="my_font">Hero</th>
                            <th class="my_font">Matches</th>
                            <th class="my_font">Win %</th>
                            <th class="my_font">KDA</th>
                            <th class="my_font">GPM</th>
                            <th class="my_font">XPM</th>
                        </thead>
                        <tbody class="bg-dark2">
                            <tr v-for="i in 5">
                                <td>
                                    <img class ="hero_pick" v-bind:src="require('../assets/Hero-icons/alchemist_full.png')">
                                    <span class="text-silver my_font">Alchemist</span>
                                </td>
                                <td>
                                    <span class="text-silver my_font">150</span>
                                </td>
                                <td>
                                    <span class="text-money my_font">58.22%</span>
                                </td>
                                <td>
                                    <span class="text-kda my_font">4.24</span>
                                </td>
                                <td>
                                    <span class="text-gpm my_font">892</span>
                                </td>
                                <td>
                                    <span class="text-xpm my_font">723</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br>
                    <h5 class="pageTitle">Recent Matches</h5>
                    <table class="table table-striped table-dark">
                        <thead>
                            <th class="my_font">Hero</th>
                            <th class="my_font">Result</th>
                            <th class="my_font">Game Mode</th>
                            <th class="my_font">Duration</th>
                            <th class="my_font">KDA</th>
                        </thead>
                        <tbody class="bg-dark2">
                            <tr v-for="i in 6">
                                <td>
                                    <img class ="hero_pick" v-bind:src="require('../assets/Hero-icons/alchemist_full.png')">
                                    <span class="text-silver my_font">Alchemist</span>
                                </td>
                                <td>
                                    <span class="text-money my_font">Victory</span>
                                </td>
                                <td>
                                    <span class="text-silver my_font">Ranked Solo</span>
                                </td>
                                <td>
                                    <span class="text-kda my_font">4.24</span>
                                </td>
                                <td>
                                    <span class="text-money my_font">20</span>
                                    <span class="text-silver my_font">/</span>
                                    <span class="text-red my_font">2</span>
                                    <span class="text-silver my_font">/</span>
                                    <span class="text-silver my_font">8</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-4 bg-dark2">
                    <h5 class="pageTitle">Stats</h5>
                    <ul class="list-group list-group-striped">
                        <li class="list-group-item bg-dark2 border-silver">
                            <span class="text-silver my_font">Most played role</span>
                            <span class="text-silver float_right my_font">Core</span>
                        </li>
                        <li class="list-group-item bg-dark2 border-silver">
                            <span class="text-silver my_font">Most played lane</span>
                            <span class="text-silver float_right my_font">Safe Lane</span>
                        </li>
                        
                        <li class="list-group-item bg-dark2 border-silver">
                            <span class="text-silver my_font">KDA Ratio</span>
                            <span class="text-kda float_right my_font">4.25</span>
                        </li>
                        <li class="list-group-item bg-dark2 border-silver" >
                            <span class="text-silver my_font">XPM</span>
                            <span class="text-xpm float_right my_font">678</span>
                        </li>
                        <li class="list-group-item bg-dark2 border-silver">
                            <span class="text-silver my_font">GPM</span>
                            <span class="text-gpm float_right my_font">710</span>
                        </li>
                        <li class="list-group-item bg-dark2 border-silver">
                            <span class="text-silver my_font">Matches</span>
                            <span class="text-silver float_right my_font">5805</span>
                        </li>
                        <li class="list-group-item bg-dark2 border-silver">
                            <span class="text-silver my_font">Win Rate</span>
                            <span class="text-silver float_right my_font">60.61%</span>
                        </li>
                    </ul>
                    <br>
                    <h5 class="pageTitle">Recent Tournaments</h5>
                        <ul class="list-group">
                        <li class="list-group-item bg-dark2 border-silver" v-for="i in 5"> 
                            <div class="row">
                            <img class="tournament_img_mini" src="../assets/Tournaments/rsz_china_super_major.jpg">
                            <div class="col-md-8">
                                <a class="text-silver my_font">China Dota2 Super Major  </a>
                                <span class="text-money my_font">14</span>
                                <span class="text-silver my_font">-</span>
                                <span class="text-red my_font">9</span>
                            </div>
                            </div>
                        </li>
                        </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {};
</script>
