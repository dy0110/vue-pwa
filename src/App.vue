<template>
  <div id="app">
    <v-app>
      <nav-menu></nav-menu>
      <router-view />
    </v-app>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";

export default {
  name: "app",
  components: {
    NavMenu
  }
};
</script>
