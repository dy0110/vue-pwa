<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <v-app>
      <nav-menu></nav-menu>
      <v-container>
        <v-layout wrap>
          <v-flex xs12 sm3 md3>
            <v-btn color="success">Success</v-btn>
          </v-flex>
          <v-flex xs12 sm3 md3>
            <v-btn color="error">Error</v-btn>
          </v-flex>
          <v-flex xs12 sm3 md3>
            <v-btn color="warning">Warning</v-btn>
          </v-flex>
          <v-flex xs12 sm3 md3>
            <v-btn color="info">Info</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu";

export default {
  name: "home",
  components: {
    NavMenu
  }
};
</script>
