(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{256:function(e,t,n){"use strict";n.r(t);n(18);var r=n(2),s=n(0),i=n(50),a=n(108),u=s.default.extend({asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,t.t0=a,t.next=4,n.$axios.get("".concat(i.a.coreApiEndpoint,"/version?detail=true"));case 4:return t.t1=t.sent.data,t.t2=[t.t0,t.t1],t.abrupt("return",{modules:t.t2});case 7:case"end":return t.stop()}}),t)})))()},computed:{title:function(){return"About"},headers:function(){return[{text:"#",sortable:!1,width:"24px"},{text:"Module Name",sortable:!1,width:"240px"},{text:"Version",sortable:!1}]}},head:function(){return{title:this.title}}}),o=n(25),c=Object(o.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",e._l(e.modules,(function(t){return n("section",{key:t.name},[n("h3",[e._v(e._s(t.name)+" "+e._s(t.version))]),e._v(" "),e._l([["Dependencies",t.dependencies],["Develoment Dependencies",t.devDependencies]],(function(t){return n("div",{key:t[0]},[n("h4",[e._v(e._s(t[0])+" ["+e._s(Object.keys(t[1]||{}).length)+"]")]),e._v(" "),n("v-data-table",{attrs:{headers:e.headers,items:Object.entries(t[1]||{}),"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[n("tr",[n("td",[e._v(e._s(t.index+1))]),e._v(" "),n("td",[e._v(e._s(t.item[0]))]),e._v(" "),n("td",[e._v(e._s(t.item[1].replace("^","")))])])]}}],null,!0)})],1)}))],2)})),0)}),[],!1,null,null,null);t.default=c.exports}}]);