<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <v-app>
      <v-container>
        <v-layout>
          <v-flex xs4>
            <v-btn color="success">Success</v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn color="error">Error</v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn color="warning">Warning</v-btn>
          </v-flex>
          <v-flex xs4>
            <v-btn color="info">Info</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
