<template>
  <b-container>
    <div>
      <b-row align-h="around">
        <b-col cols="4"><img src="../../assets/Tournaments/rsz_china_super_major.jpg" class="w-100"></b-col>
        <b-col cols="4">Quatro colunas</b-col>
    </b-row>
    </div>
    
  </b-container>
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
