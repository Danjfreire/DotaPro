<template>
    <div class="container my-3" >
        <div class="card bg-dark2 my-3" v-for="tournament in items" :key="tournament.name">
          <div class="row ">
            <div class="col-md-4">
              <img v-bind:src="require('../assets/Tournaments/'+ tournament.logo)" class="w-100">
            </div>
            <div class="card-block col-md-5 px-3">
              <h4><a class="pageTitle" href="#/tournament">{{tournament.name}}</a></h4>
              <span class="card-text text-red descricao" >{{tournament.tier}}</span>
              <br>
              <span class="card-text text-silver my_font descricao" >China  <img v-bind:src="require('../assets/Regions/Cn.png')"></span>
              <br>
              <span class="card-text text-silver my_font">{{tournament.startDate}} | {{tournament.endDate}}</span>
              <br>
              <span class="card-text text-silver my_font">{{tournament.prizePool}} - {{tournament.points}} DPC Points</span>
            </div>
            <div class="card-block px-3">
              <br>
              <span><img src="../assets/Icons/gold-medal.png"></span>
              <span><img class="team_img_mini" v-bind:src="tournament.standings[0].team.logo"></span>
              <span class="card-text text-silver">{{tournament.standings[0].team.name}}</span>
              <br>
              <span><img src="../assets/Icons/second.png"></span>
              <span><img class="team_img_mini" v-bind:src="tournament.standings[1].team.logo"></span>
              <span class="card-text text-silver">{{tournament.standings[1].team.name}}</span>
              <br>
              <span><img src="../assets/Icons/third.png"></span>
              <span><img class="team_img_mini" v-bind:src="tournament.standings[2].team.logo"></span>
              <span class="card-text text-silver">{{tournament.standings[2].team.name}}</span>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

import {EventBus} from './eventBus.js'

export default {
  name: "Tcard",
  props: ["items"],
  methods:{
    selectTournament: function(event){
        var selectedTournament = ({logo:"",
        name:"China Dota2 Super Major",
        tier:"Major",
        start_date:"2018-06-02",
        end_date:"2018-06-10",
        region:"China",
        region_img:require('../assets/Regions/Cn.png'),
        prize:"1,500,000",
        points:"2250"});
        var parametro = 'Um parametro qualquer';
        
        EventBus.$emit('tournamentSelected', parametro)
    }
  }

};
</script>
