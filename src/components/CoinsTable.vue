<template lang="pug">
.coins-table
	table
		thead
			tr
				th.title(v-for="title in $store.state.titles" :key="title")
					span {{ title }}
		tbody
			tr(v-for="(coin, index) in $store.state.filteredCoins", :key="coin.id")
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
export default {
  name: "CoinsTable",
  async mounted(): Promise<void> {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    this.$store.state.coins = data;
    this.$store.state.filteredCoins = data;
  },
};
</script>

<style scoped></style>
