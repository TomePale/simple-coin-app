<template>
  <div class="ui segment coin desktop">
    <router-link :to="'/currency/' + coin.slug" class="ui grid" id="mobile-view">
      <div id="rank" class="one wide column segment__bold">{{coin.cmc_rank}}</div>
      <div class="two wide column segment__primary">
        <img
          :src="`https://chasing-coins.com/api/v1/std/logo/${coin.symbol}`"
          class="segment__crypto-logo"
        >
        {{coin.name}}
      </div>
      <div class="one wide column segment__bold">{{coin.symbol}}</div>
      <div
        id="market-cap"
        class="three wide column segment__bold"
      >{{formatCurrency(coinQuotes.market_cap)}}</div>
      <div class="two wide column segment__primary">{{formatCurrency(coinQuotes.price)}}</div>
      <div
        id="circulating-supply"
        class="three wide column segment__primary"
      >{{formatNumber(coin.circulating_supply)}} {{coin.symbol}}</div>
      <div
        id="change-perc-1"
        class="two wide column"
        :class="[isValuePositive(coinQuotes.percent_change_1h) ? 'segment__positive' : 'segment__negative']"
      >{{coinQuotes.percent_change_1h}} %</div>
      <div
        id="change-perc-2"
        class="two wide column"
        :class="[isValuePositive(coinQuotes.percent_change_24h) ? 'segment__positive' : 'segment__negative']"
      >{{coinQuotes.percent_change_24h}} %</div>
    </router-link>
  </div>
</template>

<script>
import utils from "@/utils";

export default {
  name: "HomeCoinItem",
  props: {
    coin: Object,
    coinQuotes: Object
  },
  created() {
    this.formatCurrency = utils.formatCurrency;
    this.formatNumber = utils.formatNumber;
    this.isValuePositive = utils.isValuePositive;
  }
};
</script>

<style src="@/assets/styles/home-coin-item.css">
</style>