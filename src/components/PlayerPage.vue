<template>
    <div class="container transparente">
        <div class="card bg-dark2">
            <div class="row">
                <img class="player_page_img img-responsive" v-bind:src="require('../assets/Players/virtus.pro/ramzes.png')">
                <div class="card-block col-xl-4">
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
                <div class="card-block col-xl-6 row">
                    <div class="col-xl-3">
                        <span class="player_stats_desc ">DPC POINTS</span>
                        <br>
                        <span class="text-silver">4124</span>
                        <br>
                        <span class="player_stats_desc ">LAST MATCH</span>
                        <br>
                        <span class="text-silver">2 hours ago</span>
                    </div>
                    <div class="col-xl-3">
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
                    <div class="col-xl-3">
                        <span class="player_stats_desc ">SOLO MMR</span>
                        <br>
                        <span class="text-silver">8095</span>
                         <br>
                        <span class="player_stats_desc ">GROUP MMR</span>
                        <br>
                        <span class="text-silver">6814</span>
                    </div>
                    <div>
                        <div class="rank_container text-center">
                            <img class="rank_img" src="../assets/rank-icons/season_top10.png">
                            <div class="rank">
                                <span class="rank_text text-silver">8</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div class="row">
                <div class="col-xl-8">
                    <h5 class="pageTitle">Most Played Heroes</h5>
                    <table class="table table-striped table-dark">
                        <thead>
                            <th>Hero</th>
                            <th>Matches</th>
                            <th>Win %</th>
                            <th>KDA</th>
                            <th>GPM</th>
                            <th>XPM</th>
                        </thead>
                        <tbody class="bg-dark2">
                            <tr v-for="i in 5">
                                <td>
                                    <img class ="hero_pick" v-bind:src="require('../assets/Hero-icons/alchemist_full.png')">
                                    <span class="text-silver">Alchemist</span>
                                </td>
                                <td>
                                    <span class="text-silver">150</span>
                                </td>
                                <td>
                                    <span class="text-money">58.22%</span>
                                </td>
                                <td>
                                    <span class="text-kda">4.24</span>
                                </td>
                                <td>
                                    <span class="text-gpm">892</span>
                                </td>
                                <td>
                                    <span class="text-xpm">723</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-xl-4">
                    <h5 class="pageTitle">Stats</h5>
                    <ul class="list-group">
                        <li class="list-group-item bg-dark2 border-money">
                            <span class="text-silver">Most played role</span>
                            <span class="text-silver float_right">Core</span>
                        </li>
                        <li class="list-group-item bg-dark2 border-money">
                            <span class="text-silver">Most played lane</span>
                            <span class="text-silver float_right">Safe Lane</span>
                        </li>
                        
                        <li class="list-group-item bg-dark2 border-money">
                            <span class="text-silver">KDA Ratio</span>
                            <span class="text-kda float_right">4.25</span>
                        </li>
                        <li class="list-group-item bg-dark2 border-money">
                            <span class="text-silver">XPM</span>
                            <span class="text-xpm float_right">678</span>
                        </li>
                        <li class="list-group-item bg-dark2 border-money">
                            <span class="text-silver">GPM</span>
                            <span class="text-gpm float_right">710</span>
                        </li>
                        <li class="list-group-item bg-dark2 border-money">
                            <span class="text-silver">Matches</span>
                            <span class="text-silver float_right">5805</span>
                        </li>
                        <li class="list-group-item bg-dark2 border-money">
                            <span class="text-silver">Win Rate</span>
                            <span class="text-silver float_right">60.61%</span>
                        </li>
                    </ul>
                    <br>
                    <h5 class="pageTitle">Latest Tournaments</h5>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {};
</script>
