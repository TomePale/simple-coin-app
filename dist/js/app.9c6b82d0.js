(function(t){function e(e){for(var a,o,r=e[0],c=e[1],u=e[2],d=0,m=[];d<r.length;d++)o=r[d],s[o]&&m.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"063c":function(t,e,n){"use strict";var a=n("1ac7"),s=n.n(a);s.a},"1ac7":function(t,e,n){},"4e31":function(t,e,n){"use strict";var a=n("cb84"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=n("4a7a"),i=n.n(s),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("AppHeader")],1),n("router-view")],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui top attached menu"},[n("div",{staticClass:"item name"},[t._v("\n    SimpleCoinCap\n  ")]),n("router-link",{staticClass:"ui icon item",class:{item__active:"/"===t.$route.path},attrs:{to:"/"}},[n("i",{staticClass:"home icon"})]),n("router-link",{staticClass:"ui icon item",class:{item__active:"/about"===t.$route.path},attrs:{to:"/about"}},[n("i",{staticClass:"question icon"})]),n("div",{staticClass:"right menu"},[n("div",{staticClass:"ui right aligned category search item"},[n("div",{staticClass:"ui transparent icon input"},[n("v-select",{attrs:{id:"v-select",placeholder:"Search...",options:t.coins,label:"name"},on:{input:t.selectCoin},scopedSlots:t._u([{key:"option",fn:function(e){return[n("img",{staticClass:"select__logo",attrs:{src:"https://chasing-coins.com/api/v1/std/logo/"+e.symbol}}),n("span",{staticClass:"select__name"},[t._v(t._s(e.name))])]}}])}),n("i",{staticClass:"search link icon"})],1)])])],1)},u=[],l=n("cebc"),d=n("2f62"),m={name:"AppHeader",computed:Object(l["a"])({},Object(d["b"])(["coins"])),methods:{selectCoin:function(t){t&&this.$router.push("/currency/".concat(t.slug))}}},_=m,v=(n("063c"),n("2877")),p=Object(v["a"])(_,c,u,!1,null,null,null),h=p.exports,g={name:"App",created:function(){this.$store.dispatch("getCoins"),this.$store.dispatch("getMarketData")},components:{AppHeader:h}},f=g,C=(n("4e31"),Object(v["a"])(f,o,r,!1,null,null,null)),b=C.exports,y=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.loading?n("div",{staticClass:"ui active large loader"}):t._e(),t.loading?t._e():n("div",{staticClass:"ui grid"},[n("div",{staticClass:"sixteen wide column coin-market"},[n("div",{staticClass:"ui three column grid"},[n("div",{staticClass:"column"},[n("div",{staticClass:"ui segment banner"},[t._v("\n                        Market Cap: "+t._s(t.formatCurrency(t.totalMarketCap))+"\n                    ")])]),n("div",{staticClass:"column"},[n("div",{staticClass:"ui segment banner"},[t._v("\n                        Volume (24hr): "+t._s(t.formatCurrency(t.total24HrVolume))+"\n                    ")])]),n("div",{staticClass:"column"},[n("div",{staticClass:"ui segment banner"},[t._v("\n                        BTC Dominance: "+t._s(t.totalBTCPercentage.toFixed(2)+"%")+"\n                    ")])])])]),n("div",{staticClass:"sixteen wide column"},[t._m(0),t._l(t.coins,function(t){return n("HomeCoinItem",{key:t.id,attrs:{coin:t,coinQuotes:t.quote.USD}})})],2)])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui segment header desktop"},[n("div",{staticClass:"ui grid"},[n("div",{staticClass:"one wide column"},[t._v("#")]),n("div",{staticClass:"two wide column"},[t._v("Name")]),n("div",{staticClass:"one wide column"},[t._v("Symbol")]),n("div",{staticClass:"three wide column"},[t._v("Market Cap")]),n("div",{staticClass:"two wide column"},[t._v("Price")]),n("div",{staticClass:"three wide column"},[t._v("Circulating Supply")]),n("div",{staticClass:"two wide column"},[t._v("% 1h")]),n("div",{staticClass:"two wide column"},[t._v("% 24h")])])])}],P={formatCurrency:function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}),n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:4});return"$0"===e.format(t)?n.format(t):e.format(t)},formatNumber:function(t){return(new Intl.NumberFormat).format(t)},isValuePositive:function(t){return t>0}},S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui segment coin desktop"},[n("router-link",{staticClass:"ui grid",attrs:{to:"/currency/"+t.coin.slug}},[n("div",{staticClass:"one wide column segment__bold"},[t._v(t._s(t.coin.cmc_rank))]),n("div",{staticClass:"two wide column segment__primary"},[n("img",{staticClass:"segment__crypto-logo",attrs:{src:"https://chasing-coins.com/api/v1/std/logo/"+t.coin.symbol}}),t._v("\n      "+t._s(t.coin.name)+"\n    ")]),n("div",{staticClass:"one wide column segment__bold"},[t._v(t._s(t.coin.symbol))]),n("div",{staticClass:"three wide column segment__bold"},[t._v(t._s(t.formatCurrency(t.coinQuotes.market_cap)))]),n("div",{staticClass:"two wide column segment__primary"},[t._v(t._s(t.formatCurrency(t.coinQuotes.price)))]),n("div",{staticClass:"three wide column segment__primary"},[t._v(t._s(t.formatNumber(t.coin.circulating_supply))+" "+t._s(t.coin.symbol))]),n("div",{staticClass:"two wide column",class:[t.isValuePositive(t.coinQuotes.percent_change_1h)?"segment__positive":"segment__negative"]},[t._v("\n      "+t._s(t.coinQuotes.percent_change_1h)+" %\n    ")]),n("div",{staticClass:"two wide column",class:[t.isValuePositive(t.coinQuotes.percent_change_24h)?"segment__positive":"segment__negative"]},[t._v("\n      "+t._s(t.coinQuotes.percent_change_24h)+" %\n    ")])])],1)},D=[],O={name:"HomeCoinItem",props:{coin:Object,coinQuotes:Object},created:function(){this.formatCurrency=P.formatCurrency,this.formatNumber=P.formatNumber,this.isValuePositive=P.isValuePositive}},j=O,T=(n("7442"),Object(v["a"])(j,S,D,!1,null,null,null)),V=T.exports,A={name:"HomePage",created:function(){this.formatCurrency=P.formatCurrency},computed:Object(l["a"])({},Object(d["b"])(["coins","totalMarketCap","total24HrVolume","totalBTCPercentage","loading"])),components:{HomeCoinItem:V}},E=A,x=(n("891d"),Object(v["a"])(E,k,w,!1,null,null,null)),$=x.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.coin?n("div",{staticClass:"ui grid dashboard"},[n("div",{staticClass:"sixteen wide column"},[n("img",{attrs:{src:"https://chasing-coins.com/api/v1/std/logo/"+t.coin.symbol}}),n("h1",{staticClass:"ui header"},[t._v(t._s(t.coin.name)+" "),n("span",[t._v(t._s(t.coin.symbol))])]),n("a",{staticClass:"ui orange label"},[t._v("Rank "+t._s(t.coin.cmc_rank))]),n("p",{staticClass:"dashboard__trading"},[t._v("Currently trading at\n      "),n("span",{staticClass:"segment__primary"},[t._v(t._s(t.formatCurrency(t.coinQuotes.price)))])]),n("p",{staticClass:"dashboard__market-cap"},[t._v("with a Market Cap of\n      "),n("span",{staticClass:"segment__primary"},[t._v(t._s(t.formatCurrency(t.coinQuotes.market_cap)))])]),n("div",{staticClass:"ui cards"},[n("div",{staticClass:"card"},[n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[t._v("Volume (24hr)")]),n("div",{staticClass:"meta"},[t._v("Volume that has been traded in the last 24hrs")]),n("div",{staticClass:"description"},[t._v("\n            "+t._s(t.formatCurrency(t.coinQuotes.volume_24h))+"\n          ")])])]),n("div",{staticClass:"card"},[n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[t._v("1hr Change")]),n("div",{staticClass:"meta"},[t._v("Price change in the last hour")]),n("div",{staticClass:"description",class:[t.isValuePositive(t.coinQuotes.percent_change_1h)?"segment__positive":"segment__negative"]},[t._v("\n            "+t._s(t.coinQuotes.percent_change_1h)+" %\n          ")])])]),n("div",{staticClass:"card"},[n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[t._v("24hr Change")]),n("div",{staticClass:"meta"},[t._v("Price change in the last 24 hrs")]),n("div",{staticClass:"description",class:[t.isValuePositive(t.coinQuotes.percent_change_24h)?"segment__positive":"segment__negative"]},[t._v("\n            "+t._s(t.coinQuotes.percent_change_24h)+" %\n          ")])])]),n("div",{staticClass:"card"},[n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[t._v("7 day Change")]),n("div",{staticClass:"meta"},[t._v("Price change in the last 7 days")]),n("div",{staticClass:"description",class:[t.isValuePositive(t.coinQuotes.percent_change_7d)?"segment__positive":"segment__negative"]},[t._v("\n            "+t._s(t.coinQuotes.percent_change_7d)+" %\n          ")])])])])])]):t._e()},Q=[],H={name:"CoinDetailsPage",props:["slug"],created:function(){this.formatCurrency=P.formatCurrency,this.isValuePositive=P.isValuePositive},computed:{coin:function(){return this.$store.getters.coinDataFromSlug(this.slug)},coinQuotes:function(){return this.$store.getters.coinDataFromSlug(this.slug).quote.USD}}},F=H,N=(n("b29b"),Object(v["a"])(F,M,Q,!1,null,null,null)),I=N.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui grid about"},[n("h1",{staticClass:"ui header"},[t._v("SimpleCoinCap")]),n("div",{staticClass:"content"},[t._m(0),n("img",{staticClass:"content__book-img",attrs:{src:t.bookCover}}),t._m(1)])])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("SimpleCoinCap displays market cap rankings, price, details and more for the top \n\t\t\t100 largest cryptocurrencies based on overall market cap. Built with\n      "),n("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("Vue")]),t._v(", "),n("a",{attrs:{href:"https://router.vuejs.org/en/",target:"_blank"}},[t._v("Vue Router")]),t._v(",\n      "),n("a",{attrs:{href:"https://vuex.vuejs.org/en/",target:"_blank"}},[t._v("Vuex")]),t._v(", and deployed on "),n("a",{attrs:{href:"https://www.heroku.com/",target:"_blank"}},[t._v("Heroku")]),t._v(";\n      this app was built as a "),n("strong",[t._v("Screencast Tutorial")]),t._v(" as part of the enhanced package of\n      "),n("a",{attrs:{href:"https://www.fullstack.io/vue/",target:"_blank"}},[t._v("Fullstack Vue: The Complete Guide to Vue.js")]),t._v(".")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n\t\t\t\tCryptocurrency data obtained from the "),n("a",{attrs:{href:"https://coinmarketcap.com/api/",target:"_blank"}},[t._v("Coinmarketcap API")]),t._v(".\n        Cryptocurrency logo images obtained from the "),n("a",{attrs:{href:"https://chasing-coins.com/api",target:"_blank"}},[t._v("Chasing Coins API")]),t._v(".\n\t\t\t\tDesign loosely inspired by "),n("a",{attrs:{href:"https://dribbble.com/shots/4375541-Crypto-Market",target:"_blank"}},[t._v("Mark Henry")]),t._v(".\n\t\t\t\tFavicon created by "),n("a",{attrs:{href:"https://thenounproject.com/habanerodesigns/",target:"_blank"}},[t._v("Grant Taylor")]),t._v(".\n\t\t\t")])}],q=n("9da1"),G=n.n(q),R={name:"AboutPage",data:function(){return{bookCover:G.a}}},L=R,J=(n("7422"),Object(v["a"])(L,U,B,!1,null,null,null)),K=J.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"not-found"}},[n("h2",{staticClass:"ui center icon header"},[n("i",{staticClass:"question circle icon"}),t._v("\n      Sorry! This page can't be found\n    ")])])}],X={name:"NotFoundPage"},Y=X,Z=(n("8684"),Object(v["a"])(Y,z,W,!1,null,null,null)),tt=Z.exports,et=(n("7514"),n("55dd"),n("a4bb")),nt=n.n(et),at=n("bc3a"),st=n.n(at);a["a"].use(d["a"]);var it=new d["a"].Store({state:{coins:[],totalMarketCap:0,total24HrVolume:0,totalBTCPercentage:0,loading:!1},mutations:{UPDATE_COINS:function(t,e){var n=e.data,a=nt()(n).map(function(t){return n[t]});t.coins=a.sort(function(t,e){return t.cmc_rank-e.cmc_rank})},UPDATE_MARKET_DATA:function(t,e){var n=e.data,a=n.quote;t.totalMarketCap=a.USD.total_market_cap,t.total24HrVolume=a.USD.total_volume_24h,t.totalBTCPercentage=n.btc_dominance},SET_LOADING:function(t,e){t.loading=e}},actions:{getCoins:function(t){var e=t.commit;e("SET_LOADING",!0),st.a.get("/api/coins").then(function(t){e("UPDATE_COINS",t.data),e("SET_LOADING",!1)})},getMarketData:function(t){var e=t.commit;st.a.get("/api/market_data").then(function(t){e("UPDATE_MARKET_DATA",t.data)})}},getters:{coins:function(t){return t.coins},totalMarketCap:function(t){return t.totalMarketCap},total24HrVolume:function(t){return t.total24HrVolume},totalBTCPercentage:function(t){return t.totalBTCPercentage},loading:function(t){return t.loading},coinDataFromSlug:function(t){return function(e){return t.coins.find(function(t){return t.slug===e})}}}});a["a"].use(y["a"]);var ot=function(t,e,n){var a=t.params.slug,s=it.getters.coins;s.length?it.getters.coinDataFromSlug(a)?n():n("/not-found"):it.watch(function(t){return t.coins},function(){it.getters.coinDataFromSlug(a)?n():n("/not-found")})},rt=new y["a"]({mode:"history",base:"/",routes:[{path:"/",name:"HomePage",component:$},{path:"/currency/:slug",name:"CoinsDetailsPage",component:I,props:!0,beforeEnter:ot},{path:"/about",name:"AboutPage",component:K},{path:"*",name:"NotFoundPage",component:tt}]});n("87ee");a["a"].component("v-select",i.a),a["a"].config.productionTip=!1,new a["a"]({router:rt,store:it,render:function(t){return t(b)}}).$mount("#app")},7422:function(t,e,n){"use strict";var a=n("9dde"),s=n.n(a);s.a},7442:function(t,e,n){"use strict";var a=n("db41"),s=n.n(a);s.a},8684:function(t,e,n){"use strict";var a=n("8992"),s=n.n(a);s.a},"891d":function(t,e,n){"use strict";var a=n("9363"),s=n.n(a);s.a},8992:function(t,e,n){},9363:function(t,e,n){},"9da1":function(t,e,n){t.exports=n.p+"img/book-cover.4457e48a.png"},"9dde":function(t,e,n){},b29b:function(t,e,n){"use strict";var a=n("d7bd"),s=n.n(a);s.a},cb84:function(t,e,n){},d7bd:function(t,e,n){},db41:function(t,e,n){}});
//# sourceMappingURL=app.9c6b82d0.js.map