<template>
    <div class="container">
        <h5 class="text-silver">{{side}} Builds</h5>
        <table class="table table-striped table-dark">
            <thead>
                <th class="text-silver my_font">Hero</th>
                <th class="text-silver my_font">1</th>
                <th class="text-silver my_font">2</th>
                <th class="text-silver my_font">3</th>
                <th class="text-silver my_font">4</th>
                <th class="text-silver my_font">5</th>
                <th class="text-silver my_font">6</th>
                <th class="text-silver my_font">7</th>
                <th class="text-silver my_font">8</th>
                <th class="text-silver my_font">9</th>
                <th class="text-silver my_font">10</th>
                <th class="text-silver my_font">11</th>
                <th class="text-silver my_font">12</th>
                <th class="text-silver my_font">13</th>
                <th class="text-silver my_font">14</th>
                <th class="text-silver my_font">15</th>
                <th class="text-silver my_font">16</th>
                <th class="text-silver my_font">17</th>
                <th class="text-silver my_font">18</th>
                <th class="text-silver my_font">19</th>
                <th class="text-silver my_font">20</th>
                <th class="text-silver my_font">21</th>
                <th class="text-silver my_font">22</th>
                <th class="text-silver my_font">23</th>
                <th class="text-silver my_font">24</th>
                <th class="text-silver my_font">25</th>
            </thead>
            <tbody class="bg-radiant">
                <tr v-for="i in 5">
                    <td class="align-middle">
                        <img class="hero_pick2 celula" src="../assets/Hero-icons/luna_full.png">
                    </td>
                    <td class="align-middle skill_td" v-for="i in 25">
                        <img class="skill_icon" src="../assets/Skills/Lucent_Beam_icon.png">
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    props: ["side"]
}
</script>
