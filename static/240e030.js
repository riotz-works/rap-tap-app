(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{113:function(t,e,a){"use strict";var s=a(56),i=a.n(s),o=a(75);e.a=function(t,e){e("coreApi",i.a.create({baseURL:o.a.coreApiEndpoint}))}},150:function(t){t.exports=JSON.parse('{"name":"rap-tap-app","displayName":"ラップ、タップ、アップ 🎶","displayShortName":"ラップ🎤","description":"リアルタイム の 競演 と 参加型観戦 で 音楽を最高に楽しむ","appHost":"https://riotz.works","version":"0.0.1","private":true,"scripts":{"clean":"rimraf node_modules/.cache .nuxt dist src/static/sw.js src/static/sitemap.xml* .lighthouseci","setup":"yarn install --ignore-optional","dev":"nuxt-ts","build":"cross-env DEPLOY_ENV=GH_PAGES nuxt-ts build","export":"nuxt-ts export","lint":"yarn lint:js && yarn lint:style","lint:js":"eslint . --ext .js,.ts,.vue --ignore-path .gitignore","lint:style":"stylelint **/*.{vue,css} --ignore-path .gitignore","lint:fix":"yarn lint:fix:js && yarn lint:fix:style","lint:fix:js":"yarn lint:js --fix","lint:fix:style":"yarn lint:style --fix","lhci":"lhci autorun --output json --output html","deploy":"gh-pages -t -d dist/rap-tap-app -b master -m \'Update Site [ci skip]\'","contributors:add":"all-contributors add","contributors:generate":"all-contributors generate"},"dependencies":{"@firebase/app":"^0.6.11","@firebase/auth":"^0.14.9","@firebase/database":"^0.6.10","qrcode":"^1.4.4","skyway-js":"^1.4.0"},"devDependencies":{"@lhci/cli":"^0.4.4","@nuxt/typescript-build":"^1.0.3","@nuxt/typescript-runtime":"^0.4.10","@nuxtjs/axios":"^5.12.2","@nuxtjs/dotenv":"^1.4.1","@nuxtjs/google-analytics":"^2.4.0","@nuxtjs/pwa":"^3.0.2","@nuxtjs/sitemap":"^2.4.0","@nuxtjs/vuetify":"^1.11.2","@types/node":"^14.11.2","@typescript-eslint/eslint-plugin":"^2.34.0","@typescript-eslint/parser":"^2.34.0","all-contributors-cli":"^6.17.4","cross-env":"^7.0.2","eslint":"^6.8.0","eslint-plugin-nuxt":"^1.0.0","eslint-plugin-vue":"^6.2.2","gh-pages":"^3.1.0","nuxt":"^2.14.6","sass":"^1.26.11","sass-loader":"^10.0.2","stylelint":"^13.7.2","stylelint-config-recess-order":"^2.1.0","stylelint-config-recommended-scss":"^4.2.0","stylelint-config-standard":"^20.0.0","stylelint-scss":"^3.18.0"},"browserslist":["> 1%","last 2 versions"],"homepage":"https://github.com/riotz-works/rap-tap-app#readme","repository":{"type":"git","url":"https://github.com/riotz-works/rap-tap-app.git"},"bugs":{"url":"https://github.com/riotz-works/rap-tap-app/issues"},"author":"Riotz.works (https://riotz.works)","license":"MIT"}')},167:function(t,e,a){"use strict";a(42);var s=a(0),i=a(75),o=a(209),n=a(210),r=s.a.extend({data:function(){return{displayName:i.a.displayName}},methods:{wallpaper:function(){var t=this.$route.path,e=this.$route.query.mode,a=t.startsWith("/room")||"watcher"===e?"room":"top",s="top"===a?"bottom":"top",i=o;return"room"===a&&(i=n),{background:"url('".concat(i,"') center ").concat(s," / cover no-repeat fixed !important")}}}}),p=(a(211),a(58)),l=a(116),c=a.n(l),u=a(268),f=a(269),d=a(271),x=a(272),g=a(270),m=a(109),h=a(108),b=Object(p.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{style:t.wallpaper(),attrs:{dark:""}},[s("v-toolbar",{attrs:{app:"",flat:"",height:"36px"}},[s("v-toolbar-title",{staticClass:"title"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:a(208),alt:t.displayName}}),t._v(" "),s("span",{staticClass:"neon"},[t._v(t._s(t.displayName))])])],1),t._v(" "),s("v-spacer")],1),t._v(" "),s("v-content",[s("v-container",[s("nuxt")],1)],1),t._v(" "),s("v-footer",{staticClass:"footer",attrs:{app:"",height:"18px"}},[s("v-spacer"),t._v(" "),s("small",[t._v("© Since 2018 "),s("a",{attrs:{href:"https://riotz.works"}},[t._v("Riotz.works")]),t._v(".")])],1)],1)}),[],!1,null,null,null);e.a=b.exports;c()(b,{VApp:u.a,VContainer:f.a,VContent:d.a,VFooter:x.a,VSpacer:g.a,VToolbar:m.a,VToolbarTitle:h.a})},177:function(t,e,a){a(178),t.exports=a(179)},206:function(t,e,a){var s=a(207);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(22).default)("67b3c67e",s,!0,{sourceMap:!1})},207:function(t,e,a){(e=a(21)(!1)).push([t.i,'body,html{-webkit-font-feature-settings:"palt";font-feature-settings:"palt"}a{text-decoration:none}.no-margin{margin:0}.neon{color:#fff;text-shadow:0 0 1px #fff,0 0 2px #fff,0 0 3px #fff,0 0 4px #ff00de,0 0 7px #ff00de,0 0 8px #ff00de,0 0 10px red,0 0 15px red}.neon-blue{color:#fff;text-shadow:0 0 1px #fff,0 0 2px #fff,0 0 3px #fff,0 0 4px #c0f,0 0 7px #c0f,0 0 8px #ff00de,0 0 10px #00f,0 0 15px #00f}.bottom{overflow:hidden;position:fixed;bottom:32px;left:20px;right:20px}.transparent-panel{background-color:rgba(0,0,0,.2)!important}.thumbDown{padding-left:40px}',""]),t.exports=e},208:function(t,e,a){t.exports=a.p+"img/icon.eaa7e69.png"},209:function(t,e,a){t.exports=a.p+"img/wallpaper-top.c49fd3a.jpg"},210:function(t,e,a){t.exports=a.p+"img/wallpaper-room.86bdf53.jpg"},211:function(t,e,a){"use strict";var s=a(92);a.n(s).a},212:function(t,e,a){(e=a(21)(!1)).push([t.i,"nav{background-color:transparent!important}.application{height:100%}.v-toolbar__content{padding-left:4px}.title a span{font-size:medium;font-weight:700}.title img{width:28px;margin-top:4px;margin-right:4px}.footer{min-height:0;padding-right:4px;text-align:right;background-color:transparent!important}.footer a{color:#fff}",""]),t.exports=e},75:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a(106);var s=a(150),i=Object.freeze({displayName:s.displayName,coreApiEndpoint:"https://eguv57s481.execute-api.ap-northeast-1.amazonaws.com/dev",skywayApiKey:"cc6b9988-7335-4bac-93fb-b10792c2c018",firebase:{apiKey:"AIzaSyBxQQufPDG2M3GF4V-qDfsJJ_5kGeNWzuE",authDomain:"rap-tap-app.firebaseapp.com",databaseURL:"https://rap-tap-app.firebaseio.com"}})},92:function(t,e,a){var s=a(212);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(22).default)("7be3cd73",s,!0,{sourceMap:!1})}},[[177,12,5,13]]]);