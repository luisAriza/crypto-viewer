<template lang="pug">
.container
  h1 Crypto Coin Market
  table
    thead
      tr: th Coins
    tbody
      tr(v-for="coin in coins", :key="coin.id")
        td.coin
          img.coin-img(:src="coin.image" :alt="coin.name" width="20" height="20")
          span.coin-name {{ coin.name }}
          span.coin-symbol {{ coin.symbol }}
</template>

<script lang="ts">
export default {
  name: "App",
  data(): { coins: [] } {
    return {
      coins: [],
    };
  },
  async mounted(): Promise<void> {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    console.log(data);
    this.coins = data;
  },
};
</script>

<style scoped lang="postcss">
.container {
  @apply flex flex-col items-center p-12;
}
h1 {
  @apply mb-6 text-5xl text-center;
}
table {
  @apply w-full max-w-3xl rounded-lg bg-zinc-800 pb-6;
}
th {
  @apply p-4 text-2xl uppercase;
}
.coin {
  @apply flex items-center gap-2 mx-8 p-2 border-t border-zinc-700;
}
.coin-symbol {
  @apply uppercase text-zinc-600;
}
</style>
