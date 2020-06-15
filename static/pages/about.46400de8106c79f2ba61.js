webpackJsonp([6],{"7YgM":function(t,e){t.exports={name:"rap-tap-app",displayName:"ラップ、タップ、アップ 🎶",displayShortName:"ラップ🎤",description:"リアルタイム の 競演 と 参加型観戦 で 音楽を最高に楽しむ",applicationHost:"https://riotz.works",version:"0.0.1",private:!0,scripts:{clean:"rimraf .nuxt dist static/sw.js static/sitemap.xml*",setup:"yarn install --ignore-optional",dev:"nuxt",build:"cross-env DEPLOY_ENV=GH_PAGES nuxt build","build:analyze":"nuxt build --analyze",lint:"eslint . --ext .js,.ts,.vue --ignore-path .gitignore","lint:fix":"yarn lint --fix",deploy:"gh-pages -d dist -b master -m 'Update Site [ci skip]'","contributors:add":"all-contributors add","contributors:generate":"all-contributors generate"},dependencies:{axios:"^0.19.0",firebase:"^7.15.0",nuxt:"^1.4.2",qrcode:"^1.4.4","skyway-js":"^1.4.0",vue:"^2.5.17"},devDependencies:{"@nuxtjs/axios":"^5.11.0","@nuxtjs/dotenv":"^1.4.1","@nuxtjs/google-analytics":"^2.3.0","@nuxtjs/pwa":"^2.6.0","@nuxtjs/sitemap":"^2.3.1","@nuxtjs/vuetify":"^0.5.7","@types/node":"^14.0.11","@typescript-eslint/eslint-plugin":"^2.34.0","@typescript-eslint/parser":"^2.34.0","all-contributors-cli":"^6.15.0","cross-env":"^7.0.2",eslint:"^6.8.0","eslint-plugin-nuxt":"^1.0.0","eslint-plugin-vue":"^6.2.2","gh-pages":"^3.0.0","node-sass":"^4.14.1","sass-loader":"^7.3.1","ts-loader":"3.5.0",typescript:"^3.9.5"},browserslist:["> 1%","last 2 versions"],homepage:"https://github.com/riotz-works/rap-tap-app#readme",repository:{type:"git",url:"https://github.com/riotz-works/rap-tap-app.git"},bugs:{url:"https://github.com/riotz-works/rap-tap-app/issues"},author:"Riotz.works (https://riotz.works)",license:"MIT"}},BkMv:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},JA22:function(t,e,n){var r=n("BkMv");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("80c13008",r,!1,{sourceMap:!1})},hSk2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("jokW"),i=n("l8tZ"),s=!1;var a=function(t){s||n("JA22")},o=n("VU/8")(r.a,i.a,!1,a,"data-v-0a606064",null);o.options.__file="pages/about.vue",e.default=o.exports},jokW:function(t,e,n){"use strict";var r=n("/5sW"),i=n("c4q6"),s=n("7YgM"),a=n.n(s),o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,s){function a(t){try{u(r.next(t))}catch(t){s(t)}}function o(t){try{u(r.throw(t))}catch(t){s(t)}}function u(t){t.done?i(t.value):function(t){return t instanceof n?t:new n(function(e){e(t)})}(t.value).then(a,o)}u((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}};e.a=r.default.extend({asyncData:function(t){var e=t.app;return o(this,void 0,void 0,function(){var t,n;return u(this,function(r){switch(r.label){case 0:return t={},n=[a.a],[4,e.$axios.get(i.a.coreApiEndpoint+"/version?detail=true")];case 1:return[2,(t.modules=n.concat([r.sent().data]),t)]}})})},computed:{title:function(){return"About"},headers:function(){return[{text:"#",sortable:!1,width:"24px"},{text:"Module Name",sortable:!1,width:"240px"},{text:"Version",sortable:!1}]}},head:function(){return{title:this.title}}})},l8tZ:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._l(t.modules,function(e){return n("section",{key:e.name},[n("h3",[t._v(t._s(e.name)+" "+t._s(e.version))]),t._l([["Dependencies",e.dependencies],["Develoment Dependencies",e.devDependencies]],function(e){return n("div",{key:e[0]},[n("h4",[t._v(t._s(e[0])+" ["+t._s(Object.keys(e[1]||{}).length)+"]")]),n("v-data-table",{attrs:{headers:t.headers,items:Object.entries(e[1]||{}),"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("tr",[n("td",[t._v(t._s(e.index+1))]),n("td",[t._v(t._s(e.item[0]))]),n("td",[t._v(t._s(e.item[1].replace("^","")))])])]}}],null,!0)})],1)})],2)}),0)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i}});