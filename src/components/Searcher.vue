<template lang="pug">
.searcher
	input(type="text", placeholder="Search coin", @keyup="searchCoin()", v-model="$store.state.textSearch")
</template>

<script lang="ts">
export default {
  name: "Searcher",
  methods: {
    searchCoin(): void {
      this.$store.state.filteredCoins = this.$store.state.coins.filter(
        (coin): object =>
          coin.name
            .toLowerCase()
            .includes(this.$store.state.textSearch.toLowerCase()) ||
          coin.symbol
            .toLowerCase()
            .includes(this.$store.state.textSearch.toLowerCase())
      );
    },
  },
};
</script>

<style scoped></style>
