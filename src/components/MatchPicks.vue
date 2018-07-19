<template>
<div class="container">
    <h5 class="text-silver">Team Liquid <small class="text-money">Radiant</small></h5>
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
            <tr v-for="i in 5">
                <td class="align-middle">
                    <img class="hero_pick2 celula" src="../assets/Hero-icons/luna_full.png">
                </td>
                <td class="align-middle">
                    <a class="text-money my_font">Liquid.Miracle</a>
                    <br>
                    <span class="text-silver my_font">Mid lane</span>
                </td>
                <td>
                    <img class="player_img_mini" src="../assets/Players/team_liquid/miracle.png">
                </td>
                <td class="align-middle">
                   <span class="text-silver my_font">11</span>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">2</span>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">8</span>
                </td>
                <td class="align-middle">
                    <a class="text-gpm my_font">23.0K</a>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">321</span>
                    <span class="text-silver my_font">21</span>
                </td>
                <td class="align-middle">
                    <span class="text-gpm my_font">701</span>
                </td>
                <td class="align-middle">
                    <span class="text-xpm my_font">615</span>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">21.0k</span>
                </td>
                <td class="align-middle">
                    <span class="text-gpm my_font">20</span>
                    <span class="text-xpm my_font">15</span>
                </td>
                <td>
                    <div class="row">
                        <div v-for="i in 6">
                            <img class="item" src="../assets/Itens/Boots_of_Speed_icon.png">
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="col-md-12 text-center ">
        <img v-for="i in 11" class="hero_pick2" src="../assets/Hero-icons/antimage_full.png">
        
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
            <tr v-for="i in 5">
                <td class="align-middle">
                    <img class="hero_pick2 celula" src="../assets/Hero-icons/luna_full.png">
                </td>
                <td class="align-middle">
                    <a class="text-money my_font">VP.Ramzes666</a>
                    <br>
                    <span class="text-silver my_font">Mid lane</span>
                </td>
                <td>
                    <img class="player_img_mini" src="../assets/Players/virtus.pro/ramzes.png">
                </td>
                <td class="align-middle">
                   <span class="text-silver my_font">11</span>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">2</span>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">8</span>
                </td>
                <td class="align-middle my_font">
                    <a class="text-gpm my_font">23.0K</a>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">321</span>
                    <span class="text-silver my_font">21</span>
                </td>
                <td class="align-middle">
                    <span class="text-gpm my_font">701</span>
                </td>
                <td class="align-middle">
                    <span class="text-xpm my_font">615</span>
                </td>
                <td class="align-middle">
                    <span class="text-silver my_font">21.0k</span>
                </td>
                <td class="align-middle">
                    <span class="text-gpm my_font">20</span>
                    <span class="text-xpm my_font">15</span>
                </td>
                <td>
                    <div class="row">
                        <div v-for="i in 6">
                            <img class="item" src="../assets/Itens/Boots_of_Speed_icon.png">
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

    <div class="col-md-12 text-center">
        <img v-for="i in 11" class="hero_pick2" src="../assets/Hero-icons/antimage_full.png">
        
    </div>

    <br>

</div>
</template>

<script>
export default {
  name: "MatchPicks"
};
</script>
