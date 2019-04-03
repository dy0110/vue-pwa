<template>
  <!-- <div>{{ $route.params.itemId }}</div> -->
  <v-card>
    <v-card-title>
      <span class="title font-weight-light">テスト</span>
    </v-card-title>
    <v-card-text>
      <span>ほげ</span>
    </v-card-text>
    <v-card-actions>
      <v-btn flat dark>お気に入り</v-btn>
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
  created() {
    const itemId = Number(this.$route.params.itemId);
    this.itemDetail = store.getters.getDetailData(itemId);
  }
};
</script>
