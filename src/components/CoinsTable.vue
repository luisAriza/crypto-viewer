<template lang="pug">
.coins-table
	table
		thead
			tr
				th.title(v-for="title in $parent.titles" :key="title")
					span {{ title }}
		tbody
			tr(v-for="(coin, index) in $parent.filteredCoins", :key="coin.id")
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
    this.$parent.coins = data;
    this.$parent.filteredCoins = data;
  },
};
</script>

<style scoped lang="postcss">
.coins-table {
  @apply w-full max-w-4xl;
}
table {
  @apply w-full rounded-lg;
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
