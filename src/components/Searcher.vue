<template lang="pug">
.searcher
	input(type="text", placeholder="Search coin", @keyup="searchCoin()", v-model="$parent.textSearch")
</template>

<script lang="ts">
// interface Searcher {
// textSearch: string;
// filteredCoins: object[];
// }
export default {
  name: "Searcher",
  // data(): Searcher {
  // return {
  // textSearch: "",
  // filteredCoins: [],
  //   };
  // },
  methods: {
    searchCoin(): void {
      this.$parent.filteredCoins = this.$parent.coins.filter(
        (coin): object =>
          coin.name
            .toLowerCase()
            .includes(this.$parent.textSearch.toLowerCase()) ||
          coin.symbol
            .toLowerCase()
            .includes(this.$parent.textSearch.toLowerCase())
      );
    },
  },
};
</script>

<style scoped lang="postcss">
.searcher {
  @apply w-full max-w-4xl;
}
input {
  @apply w-full py-2 px-4 outline-none my-5 text-lg rounded-md border border-neutral-700 bg-neutral-800 placeholder:text-neutral-600 focus:bg-neutral-700;
}
</style>
