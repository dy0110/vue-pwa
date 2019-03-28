<template>
  <div id="appFooter">
    <v-footer class="pa-5 grey lighten-2">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "appFooter"
};
</script>
