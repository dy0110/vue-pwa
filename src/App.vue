<template>
  <div id="app">
    <v-app>
      <nav-menu></nav-menu>
      <router-view />
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";
import AppFooter from "./components/AppFooter";

export default {
  name: "app",
  components: {
    NavMenu,
    AppFooter
  }
};
</script>
