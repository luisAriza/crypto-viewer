<template lang="pug">
.searcher
	input(type="text", placeholder="Search coin", @keyup="searchCoin()", v-model="textSearch")
</template>

<script lang="ts">
interface Search {
  textSearch: string;
}
interface CoinItem {
  name: string;
  symbol: string;
}

export default {
  name: "Searcher",
  data(): Search {
    return {
      textSearch: "",
    };
  },
  methods: {
    searchCoin(): void {
      this.$store.state.filteredCoins = this.$store.state.coins.filter(
        (coin: CoinItem): boolean =>
          coin.name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(this.textSearch.toLowerCase())
      );
    },
  },
};
</script>
