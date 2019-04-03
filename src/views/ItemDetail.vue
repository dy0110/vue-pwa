<template>
  <div>{{ $route.params.itemId }}</div>
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
