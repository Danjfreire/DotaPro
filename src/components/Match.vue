<template>
<div class="container transparente">
    <div class="card bg-dark2">    
        <div class="card-body ">
            <div class="row">
                <div class="col-md-7">
                <h3 class="text-silver">China Dota2 Super Major</h3>
                <span class="pageTitle">Match 3943547236</span>
                </div>
                 <div>
                    <span class="player_stats_desc">PLAYED ON</span>
                    <br>
                    <span class="text-silver">2018-03-12</span>
                </div>
                <div class="col-md-1">
                    <span class="player_stats_desc">REGION</span>
                    <br>
                    <span class="text-silver">China</span>
                </div>
                <div class="col-md-2">
                    <span class="player_stats_desc">DURATION</span>
                    <br>
                    <span class="text-silver">41:23</span>
                </div>     
            </div>
        </div>       
    </div>
    <section class="bg-dark2">
        <div class="col-md-12">
            <h4 class="text-silver text-center">
                <img class="team_img_mini3" src="../assets/Teams/Team_Liquid.png">
                Team Liquid Victory
            </h4>
        </div>
        <div class="col-md-12 text-center">
            <h4>
                <span class="text-money">48</span>
                <span class="text-silver"> x </span>
                <span class="text-red">34</span>
            </h4>
        </div>
        <MatchPicks></MatchPicks>
        <MatchBuilds side="Radiant"></MatchBuilds>
        <MatchBuilds side="Dire"></MatchBuilds>

    </section>
</div>
</template>

<script>
import MatchPicks from "./MatchPicks.vue";
import MatchBuilds from "./MatchBuilds.vue"

export default {
  components: {
    MatchPicks,
    MatchBuilds
  }
};
</script>
