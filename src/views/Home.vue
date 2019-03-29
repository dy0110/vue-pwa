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
        <v-flex xs12 sm4 md4></v-flex>
        <v-flex xs12 sm4 md4>
          <div class="text-xs-center">
            <v-btn color="info" @click="getAnimeList()">検索</v-btn>
          </div>
        </v-flex>
        <v-flex xs12 sm4 md4></v-flex>
      </v-layout>
    </v-container>
    <app-dialog ref="AppDialog">
      <p slot="dialog_title">エラー</p>
      <p slot="dialog_text">{{ err_msg }}</p>
    </app-dialog>
  </div>
</template>

<script>
import AppDialog from "../components/AppDialog";

export default {
  name: "home",
  components: {
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
      err_msg: ""
    };
  },
  methods: {
    getAnimeList() {
      if (this.setSeason === null || this.setSeason === null) {
        this.err_msg = "クールと西暦を選択してください";
        // 子コンポーネントのデータを変更
        this.$refs.AppDialog.dailog = true;
        return;
      }
      console.log("setYear: " + this.setYear + " setSeason: " + this.setSeason);
      // APIを取得する
    }
  }
};
</script>
