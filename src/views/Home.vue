<template>
  <div class="home">
    <v-container>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12 sm4 md4>
          <v-select
            :items="years"
            v-model="setYear"
            label="西暦"
            solo
          ></v-select>
        </v-flex>
        <v-flex xs12 sm4 md4>
          <v-select
            :items="season"
            item-text="text"
            item-value="month"
            v-model="setSeason"
            label="クール"
            solo
          ></v-select>
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12 sm4 md4>
          <v-btn color="info" @click="getAnimeList()">検索</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AppDialog from "../components/AppDialog"

export default {
  name: "home",
  components:{
    AppDialog
  },
  data() {
    return {
      years: [2014, 2015, 2016, 2017, 2018, 2019],
      season: [
        {
          text: "1期(冬)",
          month: 1
        },
        {
          text: "2期(春)",
          month: 4
        },
        {
          text: "3期(夏)",
          month: 7
        },
        {
          text: "4期(秋)",
          month: 10
        }
      ],
      setYear: null,
      setSeason: null,
      dialog: false
    };
  },
  methods: {
    getAnimeList() {
      if (this.setSeason === null || this.setSeason === null) {
        // TODO: ダイアログ表示
        return;
      }
      console.log("setYear: " + this.setYear + " setSeason: " + this.setSeason);
    }
  }
};
</script>
