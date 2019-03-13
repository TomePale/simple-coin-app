(function(t){function e(e){for(var a,o,c=e[0],r=e[1],u=e[2],d=0,m=[];d<c.length;d++)o=c[d],s[o]&&m.push(s[o][0]),s[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"063c":function(t,e,n){"use strict";var a=n("1ac7"),s=n.n(a);s.a},"1ac7":function(t,e,n){},"4e31":function(t,e,n){"use strict";var a=n("cb84"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),s=n("4a7a"),i=n.n(s),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("AppHeader")],1),n("router-view")],1)},c=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui top attached menu"},[n("div",{staticClass:"item name"},[t._v("Simple Coin App")]),n("router-link",{staticClass:"ui icon item",class:{item__active:"/"===t.$route.path},attrs:{to:"/"}},[n("i",{staticClass:"home icon"})]),n("div",{staticClass:"right menu"},[n("div",{staticClass:"ui right aligned category search item"},[n("div",{staticClass:"ui transparent icon input"},[n("v-select",{attrs:{id:"v-select",placeholder:"Search...",options:t.coins,label:"name"},on:{input:t.selectCoin},scopedSlots:t._u([{key:"option",fn:function(e){return[n("img",{staticClass:"select__logo",attrs:{src:"https://chasing-coins.com/api/v1/std/logo/"+e.symbol}}),n("span",{staticClass:"select__name"},[t._v(t._s(e.name))])]}}])}),n("i",{staticClass:"search link icon"})],1)])])],1)},u=[],l=n("cebc"),d=n("2f62"),m={name:"AppHeader",computed:Object(l["a"])({},Object(d["b"])(["coins"])),methods:{selectCoin:function(t){t&&this.$router.push("/currency/".concat(t.slug))}}},_=m,v=(n("063c"),n("2877")),p=Object(v["a"])(_,r,u,!1,null,null,null),g=p.exports,f={name:"App",created:function(){this.$store.dispatch("getCoins"),this.$store.dispatch("getMarketData")},components:{AppHeader:g}},h=f,C=(n("4e31"),Object(v["a"])(h,o,c,!1,null,null,null)),b=C.exports,y=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.loading?n("div",{staticClass:"ui active large loader"}):t._e(),t.loading?t._e():n("div",{staticClass:"ui grid"},[n("div",{staticClass:"sixteen wide column coin-market"},[n("div",{staticClass:"ui three column grid"},[n("div",{staticClass:"column"},[n("div",{staticClass:"ui segment banner"},[t._v("\n                        Market Cap: "+t._s(t.formatCurrency(t.totalMarketCap))+"\n                    ")])]),n("div",{staticClass:"column"},[n("div",{staticClass:"ui segment banner"},[t._v("\n                        Volume (24hr): "+t._s(t.formatCurrency(t.total24HrVolume))+"\n                    ")])]),n("div",{staticClass:"column"},[n("div",{staticClass:"ui segment banner"},[t._v("\n                        BTC Dominance: "+t._s(t.totalBTCPercentage.toFixed(2)+"%")+"\n                    ")])])])]),n("div",{staticClass:"sixteen wide column"},[t._m(0),t._l(t.coins,function(t){return n("HomeCoinItem",{key:t.id,attrs:{coin:t,coinQuotes:t.quote.USD}})})],2)])])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui segment header desktop"},[n("div",{staticClass:"ui grid"},[n("div",{staticClass:"one wide column"},[t._v("#")]),n("div",{staticClass:"two wide column"},[t._v("Name")]),n("div",{staticClass:"one wide column"},[t._v("Symbol")]),n("div",{staticClass:"three wide column"},[t._v("Market Cap")]),n("div",{staticClass:"two wide column"},[t._v("Price")]),n("div",{staticClass:"three wide column"},[t._v("Circulating Supply")]),n("div",{staticClass:"two wide column"},[t._v("% 1h")]),n("div",{staticClass:"two wide column"},[t._v("% 24h")])])])}],k={formatCurrency:function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}),n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:4});return"$0"===e.format(t)?n.format(t):e.format(t)},formatNumber:function(t){return(new Intl.NumberFormat).format(t)},isValuePositive:function(t){return t>0}},S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui segment coin desktop"},[n("router-link",{staticClass:"ui grid",attrs:{to:"/currency/"+t.coin.slug,id:"mobile-view"}},[n("div",{staticClass:"one wide column segment__bold"},[t._v(t._s(t.coin.cmc_rank))]),n("div",{staticClass:"two wide column segment__primary"},[n("img",{staticClass:"segment__crypto-logo",attrs:{src:"https://chasing-coins.com/api/v1/std/logo/"+t.coin.symbol}}),t._v("\n      "+t._s(t.coin.name)+"\n    ")]),n("div",{staticClass:"one wide column segment__bold"},[t._v(t._s(t.coin.symbol))]),n("div",{staticClass:"three wide column segment__bold",attrs:{id:"market-cap"}},[t._v(t._s(t.formatCurrency(t.coinQuotes.market_cap)))]),n("div",{staticClass:"two wide column segment__primary"},[t._v(t._s(t.formatCurrency(t.coinQuotes.price)))]),n("div",{staticClass:"three wide column segment__primary",attrs:{id:"circulating-supply"}},[t._v(t._s(t.formatNumber(t.coin.circulating_supply))+" "+t._s(t.coin.symbol))]),n("div",{staticClass:"two wide column",class:[t.isValuePositive(t.coinQuotes.percent_change_1h)?"segment__positive":"segment__negative"]},[t._v(t._s(t.coinQuotes.percent_change_1h)+" %")]),n("div",{staticClass:"two wide column",class:[t.isValuePositive(t.coinQuotes.percent_change_24h)?"segment__positive":"segment__negative"]},[t._v(t._s(t.coinQuotes.percent_change_24h)+" %")])])],1)},D=[],O={name:"HomeCoinItem",props:{coin:Object,coinQuotes:Object},created:function(){this.formatCurrency=k.formatCurrency,this.formatNumber=k.formatNumber,this.isValuePositive=k.isValuePositive}},T=O,j=(n("7442"),Object(v["a"])(T,S,D,!1,null,null,null)),V=j.exports,A={name:"HomePage",created:function(){this.formatCurrency=k.formatCurrency},computed:Object(l["a"])({},Object(d["b"])(["coins","totalMarketCap","total24HrVolume","totalBTCPercentage","loading"])),components:{HomeCoinItem:V}},E=A,Q=(n("891d"),Object(v["a"])(E,w,P,!1,null,null,null)),M=Q.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.coin?n("div",{staticClass:"ui grid dashboard"},[n("div",{staticClass:"sixteen wide column"},[n("img",{attrs:{src:"https://chasing-coins.com/api/v1/std/logo/"+t.coin.symbol}}),n("h1",{staticClass:"ui header"},[t._v(t._s(t.coin.name)+" "),n("span",[t._v(t._s(t.coin.symbol))])]),n("a",{staticClass:"ui orange label"},[t._v("Rank "+t._s(t.coin.cmc_rank))]),n("p",{staticClass:"dashboard__trading"},[t._v("Currently trading at\n      "),n("span",{staticClass:"segment__primary"},[t._v(t._s(t.formatCurrency(t.coinQuotes.price)))])]),n("p",{staticClass:"dashboard__market-cap"},[t._v("with a Market Cap of\n      "),n("span",{staticClass:"segment__primary"},[t._v(t._s(t.formatCurrency(t.coinQuotes.market_cap)))])]),n("div",{staticClass:"ui cards"},[n("div",{staticClass:"card"},[n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[t._v("Volume (24hr)")]),n("div",{staticClass:"meta"},[t._v("Volume that has been traded in the last 24hrs")]),n("div",{staticClass:"description"},[t._v("\n            "+t._s(t.formatCurrency(t.coinQuotes.volume_24h))+"\n          ")])])]),n("div",{staticClass:"card"},[n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[t._v("1hr Change")]),n("div",{staticClass:"meta"},[t._v("Price change in the last hour")]),n("div",{staticClass:"description",class:[t.isValuePositive(t.coinQuotes.percent_change_1h)?"segment__positive":"segment__negative"]},[t._v("\n            "+t._s(t.coinQuotes.percent_change_1h)+" %\n          ")])])]),n("div",{staticClass:"card"},[n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[t._v("24hr Change")]),n("div",{staticClass:"meta"},[t._v("Price change in the last 24 hrs")]),n("div",{staticClass:"description",class:[t.isValuePositive(t.coinQuotes.percent_change_24h)?"segment__positive":"segment__negative"]},[t._v("\n            "+t._s(t.coinQuotes.percent_change_24h)+" %\n          ")])])]),n("div",{staticClass:"card"},[n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[t._v("7 day Change")]),n("div",{staticClass:"meta"},[t._v("Price change in the last 7 days")]),n("div",{staticClass:"description",class:[t.isValuePositive(t.coinQuotes.percent_change_7d)?"segment__positive":"segment__negative"]},[t._v("\n            "+t._s(t.coinQuotes.percent_change_7d)+" %\n          ")])])])])])]):t._e()},$=[],N={name:"CoinDetailsPage",props:["slug"],created:function(){this.formatCurrency=k.formatCurrency,this.isValuePositive=k.isValuePositive},computed:{coin:function(){return this.$store.getters.coinDataFromSlug(this.slug)},coinQuotes:function(){return this.$store.getters.coinDataFromSlug(this.slug).quote.USD}}},H=N,F=(n("b29b"),Object(v["a"])(H,x,$,!1,null,null,null)),U=F.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"not-found"}},[n("h2",{staticClass:"ui center icon header"},[n("i",{staticClass:"question circle icon"}),t._v("\n      Sorry! This page can't be found\n    ")])])}],q={name:"NotFoundPage"},G=q,L=(n("8684"),Object(v["a"])(G,I,B,!1,null,null,null)),R=L.exports,J=(n("7514"),n("55dd"),n("a4bb")),K=n.n(J),z=n("bc3a"),W=n.n(z);a["a"].use(d["a"]);var X=new d["a"].Store({state:{coins:[],totalMarketCap:0,total24HrVolume:0,totalBTCPercentage:0,loading:!1},mutations:{UPDATE_COINS:function(t,e){var n=e.data,a=K()(n).map(function(t){return n[t]});t.coins=a.sort(function(t,e){return t.cmc_rank-e.cmc_rank})},UPDATE_MARKET_DATA:function(t,e){var n=e.data,a=n.quote;t.totalMarketCap=a.USD.total_market_cap,t.total24HrVolume=a.USD.total_volume_24h,t.totalBTCPercentage=n.btc_dominance},SET_LOADING:function(t,e){t.loading=e}},actions:{getCoins:function(t){var e=t.commit;e("SET_LOADING",!0),W.a.get("/api/coins").then(function(t){e("UPDATE_COINS",t.data),e("SET_LOADING",!1)})},getMarketData:function(t){var e=t.commit;W.a.get("/api/market_data").then(function(t){e("UPDATE_MARKET_DATA",t.data)})}},getters:{coins:function(t){return t.coins},totalMarketCap:function(t){return t.totalMarketCap},total24HrVolume:function(t){return t.total24HrVolume},totalBTCPercentage:function(t){return t.totalBTCPercentage},loading:function(t){return t.loading},coinDataFromSlug:function(t){return function(e){return t.coins.find(function(t){return t.slug===e})}}}});a["a"].use(y["a"]);var Y=function(t,e,n){var a=t.params.slug,s=X.getters.coins;s.length?X.getters.coinDataFromSlug(a)?n():n("/not-found"):X.watch(function(t){return t.coins},function(){X.getters.coinDataFromSlug(a)?n():n("/not-found")})},Z=new y["a"]({mode:"history",base:"/",routes:[{path:"/",name:"HomePage",component:M},{path:"/currency/:slug",name:"CoinsDetailsPage",component:U,props:!0,beforeEnter:Y},{path:"*",name:"NotFoundPage",component:R}]});n("87ee");a["a"].component("v-select",i.a),a["a"].config.productionTip=!1,new a["a"]({router:Z,store:X,render:function(t){return t(b)}}).$mount("#app")},7442:function(t,e,n){"use strict";var a=n("db41"),s=n.n(a);s.a},8684:function(t,e,n){"use strict";var a=n("8992"),s=n.n(a);s.a},"891d":function(t,e,n){"use strict";var a=n("9363"),s=n.n(a);s.a},8992:function(t,e,n){},9363:function(t,e,n){},b29b:function(t,e,n){"use strict";var a=n("d7bd"),s=n.n(a);s.a},cb84:function(t,e,n){},d7bd:function(t,e,n){},db41:function(t,e,n){}});
//# sourceMappingURL=app.bb103bb1.js.map