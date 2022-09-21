<template lang="pug">
.Searcher
	input(type="text", placeholder="Search coin", @keyup="searchCoin()", v-model="textSearch")
</template>

<script lang="ts">
export default {
  name: "Searcher",
  data() {
    return {
      textSearch: "",
      filteredCoins: [],
    };
  },
  methods: {
    searchCoin(): void {
      this.filteredCoins = this.coins.filter(
        (coin): object =>
          coin.name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(this.textSearch.toLowerCase())
      );
    },
  },
};
</script>

<style scoped></style>
