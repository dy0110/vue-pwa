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
          <v-btn flat fab dark color="pink" v-on="on" @click="addFavoriteItem">
            <v-icon dark>favorite_border</v-icon>
          </v-btn>
        </template>
        <span>お気に入り</span>
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
            ツイッター
          </v-btn>
        </template>
        <span>ツイッターへ</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
import store from "../store";

export default {
  name: "itemDetail",
  data() {
    return {
      itemDetail: null
    };
  },
  methods: {
    openPublicUrl() {
      window.open(this.itemDetail[0].public_url);
    },
    openTwitter() {
      window.open("https://twitter.com/");
    },
    addFavoriteItem() {
      store.commit("setFavoriteList", this.itemDetail);
      this.$localStorage.set("objectKey", this.itemDetail);
    }
  },
  created() {
    const itemId = Number(this.$route.params.itemId);
    this.itemDetail = store.getters.getDetailData(itemId);
    console.log(this.itemDetail);
  }
};
</script>
