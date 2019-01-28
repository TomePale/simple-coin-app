<template>
  <div id="app">
    <div id="nav">
      <AppHeader />
    </div>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './AppHeader';
 
export default {
  name: 'App',
  created() {
    this.$store.dispatch('getCoins');
    this.$store.dispatch('getMarketData');
  },
  components: {
    AppHeader
  }
}
</script>

<style src="@/assets/styles/app.css">

</style>
