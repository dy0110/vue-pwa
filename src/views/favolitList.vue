<template>
  <v-flex xs12 sm12 md12>
    <v-list two-line subheader v-if="listFlag === false">
      <v-subheader inset>お気に入り作品リスト</v-subheader>
      <anime-list
        v-for="item in dataList"
        :key="item.id"
        :anime_title="item.title"
        :anime_sex="item.sex"
        :anime_id="item.id"
      ></anime-list>
    </v-list>
    <v-alert value="true" type="warning" v-else
      >登録されたお気に入りはありません。</v-alert
    >
  </v-flex>
</template>

<script>
import AnimeList from "../components/AnimeList";
import { Base64 } from "js-base64";

export default {
  name: "favolitList",
  components: {
    AnimeList
  },
  data() {
    return {
      dataList: [],
      listFlag: false
    };
  },
  mounted() {
    let array = [];
    let list = localStorage.getItem("FavoriteList");
    if (list === null || list.length === 0) {
      this.listFlag = true;
      return;
    }
    list = list.split(",");
    for (let i = 0; i < list.length; i++) {
      array.push(JSON.parse(Base64.decode(list[i])));
    }
    this.dataList = array;
    this.listFlag = false;
  }
};
</script>
