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
    </div>
</template>

<script>
export default {};
</script>
