<template>
  <!-- <div>{{ $route.params.itemId }}</div> -->
  <v-card>
    <v-card-title>
      <span class="title font-weight-light">{{ itemDetail[0].title }}</span>
    </v-card-title>
    <v-card-text>
      <div v-if="itemDetail[0].city_name === ''">
        <span>聖地: なし</span>
      </div>
      <div v-else>
        <span>聖地: {{ itemDetail[0].city_name }}</span>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn flat fab dark color="primary" v-on="on" @click="backToHome">
            <v-icon dark>arrow_back</v-icon>
          </v-btn>
        </template>
        <span>戻る</span>
      </v-tooltip>
      <v-tooltip bottom v-if="isFavolit === false">
        <template v-slot:activator="{ on }">
          <v-btn flat fab dark color="pink" v-on="on" @click="addFavoriteItem">
            <v-icon dark>favorite_border</v-icon>
          </v-btn>
        </template>
        <span>お気に入り</span>
      </v-tooltip>
      <v-tooltip bottom v-else>
        <template v-slot:activator="{ on }">
          <v-btn flat fab dark color="pink" v-on="on" @click="removeFavoriteItem">
            <v-icon dark>favorite</v-icon>
          </v-btn>
        </template>
        <span>お気に入り解除</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn flat fab dark color="success" v-on="on" @click="openPublicUrl">
            <v-icon dark>web</v-icon>
          </v-btn>
        </template>
        <span>公式サイトへ</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn flat fab dark color="info" v-on="on" @click="openTwitter">
            <font-awesome-icon :icon="['fab', 'twitter']" size="lg"/>
          </v-btn>
        </template>
        <span>ツイッターへ</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
import store from "../store";
import { Base64 } from "js-base64";

export default {
  name: "itemDetail",
  data() {
    return {
      itemDetail: null,
      isFavolit: false
    };
  },
  methods: {
    openPublicUrl() {
      window.open(this.itemDetail[0].public_url);
    },
    openTwitter() {
      window.open("https://twitter.com/" + this.itemDetail[0].twitter_account);
    },
    addFavoriteItem() {
      // ローカルストレージを取得
      let item = localStorage.getItem("FavoriteList");
      if (item === null || item === "") {
        localStorage.setItem(
          "FavoriteList",
          Base64.encode(JSON.stringify(this.itemDetail[0]))
        );
      } else {
        const itemList =
          item + "," + Base64.encode(JSON.stringify(this.itemDetail[0]));
        localStorage.setItem("FavoriteList", itemList);
      }
      this.isFavolit = true;
    },
    removeFavoriteItem() {
      // ローカルストレージを取得
      let array = [];
      let item = localStorage.getItem("FavoriteList");
      item = item.split(",");
      for (let i = 0; i < item.length; i++) {
        const data = JSON.parse(Base64.decode(item[i]));
        if (data.id !== this.itemDetail[0].id) {
           array.push(Base64.encode(JSON.stringify(data)));
        } 
      }
      array = array.join(",");
      localStorage.setItem("FavoriteList", array);
      this.isFavolit = false;
    },
    backToHome(){
      this.$router.push("/");
    }
  },
  created() {
    const itemId = Number(this.$route.params.itemId);
    this.itemDetail = store.getters.getDetailData(itemId);
    console.log(this.itemDetail);
  }
};
</script>
