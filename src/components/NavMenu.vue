<template>
  <div id="navmenu">
    <v-toolbar color="info">
      <v-toolbar-side-icon
        class="white--text"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pt-0" dense>
        <v-list-tile></v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title @click="goToHome()" class="side_menu_item">
              <v-icon>home</v-icon>トップ
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title
              @click="goToFavolitList()"
              class="side_menu_item"
            >
              <v-icon>list</v-icon>お気に入り一覧
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      drawer: null
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToFavolitList() {
      this.$router.push("/favolitList");
    }
  }
};
</script>

<style>
.side_menu_item {
  font-size: 18px;
}
</style>
