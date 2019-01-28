import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/home/HomePage.vue'
import CoinDetailsPage from '@/views/coin-details/CoinDetailsPage'
import AboutPage from '@/views/about/AboutPage'
import NotFoundPage from '@/views/not-found/NotFoundPage'
import store from '@/store';


Vue.use(Router)
const checkIfCoinExists =(to, from, next) => {
  const slug = to.params.slug;
  const coins = store.getters.coins;

  if(!coins.length) {
    store.watch(state => state.coins, () => {
      if(store.getters.coinDataFromSlug(slug)) next();
      else next('/not-found');
    })
  } else {
    if(store.getters.coinDataFromSlug(slug)) next();
    else next('/not-found');
  }


};


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/currency/:slug',
      name: 'CoinsDetailsPage',
      component: CoinDetailsPage,
      props:true,
      beforeEnter: checkIfCoinExists
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})
