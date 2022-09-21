<template lang="pug">
.container
  h1 Crypto Coin Market
  Searcher
  CoinsTable
</template>

<script lang="ts">
import Searcher from "./components/Searcher.vue";
import CoinsTable from "./components/CoinsTable.vue";

export default {
  name: "App",
  components: {
    Searcher,
    CoinsTable,
  },
};
</script>

<style scoped></style>
