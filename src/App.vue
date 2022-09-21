<template lang="pug">
h1 Crypto Coin Market
Searcher
CoinsTable
</template>

<script lang="ts">
import Searcher from "./components/Searcher.vue";
import CoinsTable from "./components/CoinsTable.vue";

interface Data {
  textSearch: string;
  coins: object[];
  filteredCoins: object[];
  titles: string[];
}
export default {
  name: "App",
  components: {
    Searcher,
    CoinsTable,
  },
  data(): Data {
    return {
      textSearch: "",
      coins: [],
      filteredCoins: [],
      titles: ["#", "coins", "price", "price change", "24h volume"],
    };
  },
};
</script>

<style scoped lang="postcss">
h1 {
  @apply mb-6 text-5xl text-center font-bold;
}
</style>
