<template lang="pug">
h1 Crypto Coin Market
table
  thead
    tr
      th Coins
  tbody
    tr(v-for="coin in coins", :key="coin.id")
      td
        img(:src="coin.image" :alt="coin.name" width="20" height="20")
        span {{ coin.name }}
        span {{ coin.symbol }}
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

<style scoped>
table {
  width: 100%;
  padding: 20px;
  text-align: left;
  background-color: #2c2c2c;
}
th {
  padding-bottom: 12px;
  font-size: 24px;
  /* border: 1px solid #3d3d3d; */
}
td {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid #3d3d3d;
}
img {
  margin-right: 8px;
}
</style>
