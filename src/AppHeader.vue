<template>
  <div class="ui top attached menu">
    <div class="item name">
      SimpleCoinCap
    </div>
    <router-link
      to="/"
      class="ui icon item"
      :class="{ 'item__active' : $route.path === '/'}">
      <i class="home icon"></i>
    </router-link>
    <div class="right menu">
      <div class="ui right aligned category search item">
        <div class="ui transparent icon input">
          <v-select
            id="v-select"
            placeholder="Search..."
            :options="coins"
            @input="selectCoin"
            label="name"
          >
            <template slot="option" slot-scope="option">
              <img :src="`https://s2.coinmarketcap.com/static/img/coins/64x64/${option.cmc_rank}.png`" class="select__logo"/>
              <span class="select__name">{{ option.name }}</span>
            </template>
          </v-select>
          <i class="search link icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters([
      'coins'
    ])
  },
  methods: {
    selectCoin(val) {
      if (val) {
        this.$router.push(`/currency/${val.slug}`);
      }
    }
  }
}
</script>

<style src="@/assets/styles/app-header.css">

</style>