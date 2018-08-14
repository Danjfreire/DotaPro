<template>
<div class="container">
    <h5 class="text-silver">{{match.radiant_team.name}}<small class="text-money"> Radiant</small></h5>
    <table class="table table-striped table-dark">
        <thead>
            <th class="text-silver my_font">Hero</th>
            <th class="text-silver my_font">Player</th>
            <th></th>
            <th class="text-silver my_font">K</th>
            <th class="text-silver my_font">D</th>
            <th class="text-silver my_font">A</th>
            <th class="text-silver my_font">NET</th>
            <th class="text-silver my_font">LH/DN</th>
            <th class="text-silver my_font">GPM</th>
            <th class="text-silver my_font">XPM</th>
            <th class="text-silver my_font">DMG</th>
            <th class="text-silver my_font">Wards</th>
            <th class="text-silver my_font">Itens</th>
        </thead> 
        <tbody class="bg-radiant ">
            <tr v-for="player in match.players.slice(0,5)" :key="player.name">
                <td class="align-middle">
                    <img class="hero_pick2 celula" v-bind:src="require('../assets/Hero-icons/'+ player.hero_id +'.png')">
                </td>
                <td class="align-middle">
                    <a class="text-money my_font">{{match.radiant_team.tag}}.{{player.name}}</a>
                    
                </td>
                <td>
                    <img class="player_img_mini" v-bind:src="require('../assets/Players/' +player.account_id + '.png')">
                </td>
                <td class="align-middle">
                   <span class="text-silver my_font">{{player.kills}}</span>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">{{player.deaths}}</span>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">{{player.assists}}</span>
                </td>
                <td class="align-middle">
                    <a class="text-gpm my_font">{{player.total_gold}}</a>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">{{player.last_hits}}</span>
                    <span class="text-silver my_font">{{player.denies}}</span>
                </td>
                <td class="align-middle">
                    <span class="text-gpm my_font">{{player.gold_per_min}}</span>
                </td>
                <td class="align-middle">
                    <span class="text-xpm my_font">{{player.xp_per_min}}</span>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">{{player.hero_damage}}</span>
                </td>
                <td class="align-middle">
                    <span class="text-gpm my_font">{{player.observer_uses}}</span>
                    <span class="text-xpm my_font">{{player.sentry_uses}}</span>
                </td>
                <td>
                    <div class="row">
                        <img class="item" v-bind:src="require('../assets/Itens/'+ player.item_0 +'.png')">
                        <img class="item" v-bind:src="require('../assets/Itens/'+ player.item_1 +'.png')">
                        <img class="item" v-bind:src="require('../assets/Itens/'+ player.item_2 +'.png')">
                        <img class="item" v-bind:src="require('../assets/Itens/'+ player.item_3 +'.png')">
                        <img class="item" v-bind:src="require('../assets/Itens/'+ player.item_4 +'.png')">
                        <img class="item" v-bind:src="require('../assets/Itens/'+ player.item_5 +'.png')">
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="col-md-12 text-center ">
        <img v-for="ban in radiant_bans(match.picks_bans)" :key="ban.hero_id" class="hero_pick2" v-bind:src="require('../assets/Hero-icons/'+ ban.hero_id +'.png')">
        
    </div>
    <br>

    <h5 class="text-silver">Virtus.pro <small class="text-red">Dire</small></h5>
    <table class="table table-striped table-dark">
        <thead>
            <th class="text-silver my_font">Hero</th>
            <th class="text-silver my_font">Player</th>
            <th></th>
            <th class="text-silver my_font">K</th>
            <th class="text-silver my_font">D</th>
            <th class="text-silver my_font">A</th>
            <th class="text-silver my_font">NET</th>
            <th class="text-silver my_font">LH/DN</th>
            <th class="text-silver my_font">GPM</th>
            <th class="text-silver my_font">XPM</th>
            <th class="text-silver my_font">DMG</th>
            <th class="text-silver my_font">Wards</th>
            <th class="text-silver my_font">Itens</th>
        </thead> 
        <tbody class="bg-dire">
            <tr v-for="player in match.players.slice(5,10)" :key="player.name">
                <td class="align-middle">
                    <img class="hero_pick2 celula" v-bind:src="require('../assets/Hero-icons/'+ player.hero_id +'.png')">
                </td>
                <td class="align-middle">
                    <a class="text-money my_font">{{match.dire_team.tag}}.{{player.name}}</a>
                </td>
                <td>
                    <img class="player_img_mini" v-bind:src="require('../assets/Players/' +player.account_id + '.png')">
                </td>
                <td class="align-middle">
                   <span class="text-silver my_font">{{player.kills}}</span>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">{{player.deaths}}</span>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">{{player.assists}}</span>
                </td>
                <td class="align-middle my_font">
                    <a class="text-gpm my_font">{{player.total_gold}}</a>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">{{player.last_hits}}</span>
                    <span class="text-silver my_font">{{player.denies}}</span>
                </td>
                <td class="align-middle">
                    <span class="text-gpm my_font">{{player.gold_per_min}}</span>
                </td>
                <td class="align-middle">
                    <span class="text-xpm my_font">{{player.xp_per_min}}</span>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">{{player.hero_damage}}</span>
                </td>
                <td class="align-middle">
                    <span class="text-gpm my_font">{{player.observer_uses}}</span>
                    <span class="text-xpm my_font">{{player.sentry_uses}}</span>
                </td>
                <td>
                    <div class="row">
                        <img class="item" v-bind:src="require('../assets/Itens/'+ player.item_0 +'.png')">
                        <img class="item" v-bind:src="require('../assets/Itens/'+ player.item_1 +'.png')">
                        <img class="item" v-bind:src="require('../assets/Itens/'+ player.item_2 +'.png')">
                        <img class="item" v-bind:src="require('../assets/Itens/'+ player.item_3 +'.png')">
                        <img class="item" v-bind:src="require('../assets/Itens/'+ player.item_4 +'.png')">
                        <img class="item" v-bind:src="require('../assets/Itens/'+ player.item_5 +'.png')">
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

    <div class="col-md-12 text-center">
        <img v-for="ban in dire_bans(match.picks_bans)" :key="ban.hero_id" class="hero_pick2" v-bind:src="require('../assets/Hero-icons/'+ ban.hero_id +'.png')">
        
    </div>

    <br>

</div>
</template>

<script>
export default {
  name: "MatchPicks",
  props: ["match"],
  methods: {
    radiant_bans: function(picks_bans) {
      return picks_bans.filter(function(bans) {
        return bans.is_pick === false && bans.team === 0;
      });
    },
    dire_bans: function(picks_bans) {
      return picks_bans.filter(function(bans) {
        return bans.is_pick === false && bans.team === 1;
      });
    }
  }
};
</script>
