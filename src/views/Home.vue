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
      <v-layout>
        <v-flex xs12 sm12 md12>
          <v-list two-line subheader v-if="dataList.length !== 0">
            <v-subheader inset>作品リスト</v-subheader>
            <anime-list
              v-for="item in dataList"
              :key="item.id"
              :anime_title="item.title"
              :anime_sex="item.sex"
              :anime_id="item.id"
            ></anime-list>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
    <app-dialog ref="AppDialog">
      <p slot="dialog_title">エラー</p>
      <p slot="dialog_text">{{ errMsg }}</p>
    </app-dialog>
  </div>
</template>

<script>
import AppDialog from "../components/AppDialog";
import AnimeList from "../components/AnimeList";
import axios from "axios";
import store from "../store";

export default {
  name: "home",
  components: {
    AppDialog,
    AnimeList
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
          month: 2
        },
        {
          text: "3期(夏)",
          month: 3
        },
        {
          text: "4期(秋)",
          month: 4
        }
      ],
      setYear: null,
      setSeason: null,
      errMsg: "",
      dataList: []
    };
  },
  methods: {
    async getAnimeList() {
      try {
        if (this.setSeason === null && this.setYear === null) {
          this.errMsg = "クールと西暦を選択してください";
          // 子コンポーネントのデータを変更
          this.$refs.AppDialog.dailog = true;
          return;
        } else if (this.setSeason === null) {
          this.errMsg = "クールを選択してください";
          // 子コンポーネントのデータを変更
          this.$refs.AppDialog.dailog = true;
        } else if (this.setYear === null) {
          this.errMsg = "西暦を選択してください";
          // 子コンポーネントのデータを変更
          this.$refs.AppDialog.dailog = true;
        }
        console.log(
          "setYear: " + this.setYear + " setSeason: " + this.setSeason
        );
        // APIを取得する
        const url = `http://api.moemoe.tokyo/anime/v1/master/${this.setYear}/${
          this.setSeason
        }`;
        const response = await axios.get(url);
        this.dataList = response.data;
        store.commit("setDataList", this.dataList);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
