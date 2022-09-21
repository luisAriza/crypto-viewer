<template lang="pug">
h1 Crypto Coin Market
//- input(type="text", placeholder="Search coin", @keyup="searchCoin()", v-model="textSearch")
table
  thead
    tr
      th.title(v-for="title in titles" :key="title")
        span {{ title }}
  tbody
    tr(v-for="(coin, index) in filteredCoins", :key="coin.id")
      td.index {{ index + 1 }}
      td.coin
        img.coin-img(:src="coin.image" :alt="coin.name" width="20" height="20")
        span.coin-name {{ coin.name }}
        span.coin-symbol {{ coin.symbol }}
      td.price $ {{ coin.current_price }}
      td(:class="[coin.price_change_percentage_24h > 0 ? 'price-upper' : 'price-lower']")
        | {{ coin.price_change_percentage_24h.toFixed(2) }}%
      td.coin-volume $ {{ coin.total_volume.toLocaleString() }}
</template>

<script lang="ts">
interface Data {
  textSearch?: string;
  coins: object[];
  filteredCoins?: object[];
  titles: string[];
}
export default {
  name: "App",
  data(): Data {
    return {
      // textSearch: "",
      coins: [],
      // filteredCoins: [],
      titles: ["#", "coins", "price", "price change", "24h volume"],
    };
  },
  // methods: {
  //   searchCoin(): void {
  //     this.filteredCoins = this.coins.filter(
  //       (coin): object =>
  //         coin.name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
  //         coin.symbol.toLowerCase().includes(this.textSearch.toLowerCase())
  //     );
  //   },
  // },
  async mounted(): Promise<void> {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    this.coins = data;
    this.filteredCoins = data;
  },
};
</script>

<style lang="postcss">
#app {
  @apply flex flex-col items-center p-16;
}
h1 {
  @apply mb-6 text-5xl text-center font-bold;
}
input {
  @apply w-full max-w-4xl py-2 px-4 outline-none my-5 text-lg rounded-md border border-neutral-700 bg-neutral-800 placeholder:text-neutral-600 focus:bg-neutral-700;
}
table {
  @apply w-full max-w-4xl rounded-lg;
}
.title {
  @apply py-4 text-left text-xl font-bold uppercase;
}
tbody tr {
  @apply border-t border-neutral-700;
}
.index {
  @apply text-neutral-600;
}
.coin {
  @apply flex items-center gap-2 py-2;
}
.coin-name {
  @apply text-lg font-medium;
}
.coin-symbol {
  @apply uppercase text-neutral-600;
}
.price-upper {
  @apply text-green-500;
}
.price-lower {
  @apply text-rose-600;
}
</style>
