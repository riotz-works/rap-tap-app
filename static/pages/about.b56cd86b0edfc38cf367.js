webpackJsonp([2],{BkMv:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},JA22:function(e,t,n){var s=n("BkMv");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n("rjj0")("80c13008",s,!1,{sourceMap:!1})},Sxwk:function(e,t,n){"use strict";var s=n("/5sW"),r=n("7YgM"),i=n.n(r);t.a=s.default.extend({computed:{title:function(){return"About"},modules:function(){return[i.a]},headers:function(){return[{text:"#",sortable:!1,width:"24px"},{text:"Module Name",sortable:!1,width:"240px"},{text:"Version",sortable:!1}]}},head:function(){return{title:this.title}}})},hSk2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Sxwk"),r=n("l8tZ"),i=!1;var o=function(e){i||n("JA22")},a=n("VU/8")(s.a,r.a,!1,o,"data-v-0a606064",null);a.options.__file="pages/about.vue",t.default=a.exports},l8tZ:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",e._l(e.modules,function(t){return n("section",{key:t.name},[n("h3",[e._v(e._s(t.name)+" "+e._s(t.version))]),e._l([["Dependencies",t.dependencies],["Develoment Dependencies",t.devDependencies]],function(t){return n("div",{key:t[0]},[n("h4",[e._v(e._s(t[0])+" ["+e._s(Object.keys(t[1]||{}).length)+"]")]),n("v-data-table",{attrs:{headers:e.headers,items:Object.entries(t[1]||{}),"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[n("tr",[n("td",[e._v(e._s(t.index+1))]),n("td",[e._v(e._s(t.item[0]))]),n("td",[e._v(e._s(t.item[1].replace("^","")))])])]}}])})],1)})],2)}))};s._withStripped=!0;var r={render:s,staticRenderFns:[]};t.a=r}});