<template>
  <v-dialog width="500" v-model="dailog" @click.self="closeModal()">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        <slot name="dialog_title"></slot>
      </v-card-title>
      <v-card-text>
        <slot name="dialog_text"></slot>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click="closeModal()">閉じる</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "appDialog",
  data() {
    return {
      dailog: false
    };
  },
  methods: {
    closeModal() {
      this.dialog = false;
    }
  }
};
</script>
