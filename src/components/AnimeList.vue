<template>
  <v-list-tile>
    <v-list-tile-avatar>
      <v-icon color="grey lighten-1">folder</v-icon>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>{{ anime_title }}</v-list-tile-title>
      <v-list-tile-sub-title v-if="anime_sex === 0"
        >男性向け</v-list-tile-sub-title
      >
      <v-list-tile-sub-title v-else>女性向け</v-list-tile-sub-title>
    </v-list-tile-content>

    <v-list-tile-action>
      <v-btn icon ripple @click="showItemDetail()">
        <v-icon color="grey lighten-1">info</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  name: "animeList",
  props: {
    anime_title: String,
    anime_sex: Number,
    anime_id: Number
  },
  methods: {
    showItemDetail() {
      this.$router.push({ path: `/item/${this.anime_id}` });
    }
  }
};
</script>
