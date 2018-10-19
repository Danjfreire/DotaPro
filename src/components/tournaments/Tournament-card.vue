<template>
  <b-row>
    <b-col class="margin-botton" md="4" v-for="tournament in tournaments" :key="tournament.name">
      <a href="#">
        <b-card class="goldenText" :title="teste" img-src="https://i2.wp.com/www.vpesports.com/wp-content/uploads/2018/06/19.jpg?fit=1000%2C563&ssl=1"
          bg-variant="dark">
          <p class="card-text">
            <b-img src="https://liquipedia.net/commons/images/c/cd/Cn.png" /> Shangai</p>
          <p>{{tournament.startDate}} to {{tournament.endDate}}</p>
        </b-card>
      </a>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: "tournamentCard",
    props: ["tournaments"],
    methods: {
      selectTournament: function (event) {
        var selectedTournament = ({
          logo: "",
          name: "China Dota2 Super Major",
          tier: "Major",
          start_date: "2018-06-02",
          end_date: "2018-06-10",
          region: "China",
          region_img: require('../../assets/Regions/Cn.png'),
          prize: "1,500,000",
          points: "2250"
        });
        var parametro = 'Um parametro qualquer';

        EventBus.$emit('tournamentSelected', parametro)
      }
    }

  };

</script>

<style>

  .margin-botton{
    margin-bottom: 20px;
  }

</style>

