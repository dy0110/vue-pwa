<template>
  <!-- <div>{{ $route.params.itemId }}</div> -->
  <v-card>
    <v-card-title>
      <span class="title font-weight-light">{{itemDetail[0].title}}</span>
    </v-card-title>
    <v-card-text>
      <v-flex xs12 sm3>
        <a :href="itemDetail[0].public_url">
          <v-btn flat icon color="indigo">
            <v-icon>web</v-icon>
          </v-btn>
        </a>
      </v-flex>
    </v-card-text>
    <v-card-actions>
      <v-btn flat>お気に入り</v-btn>
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
    console.log(this.itemDetail);
  }
};
</script>
