(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{206:function(e,t,a){var r=a(257);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,a(38).default)("930581f4",r,!0,{sourceMap:!1})},256:function(e,t,a){"use strict";var r=a(206);a.n(r).a},257:function(e,t,a){(t=a(37)(!1)).push([e.i,".battle-movie[data-v-500008f1]{width:100%;height:auto}.display-label[data-v-500008f1]{width:100%;margin:.5em 0}.margin-0-2[data-v-500008f1]{margin:.2em}",""]),e.exports=t},264:function(e,t,a){"use strict";a.r(t);a(215);var r=a(216),n=a.n(r),o=a(0),s=a(50),i=a(199),c=o.default.extend({data:function(){return{roomState:"wating",peer:void 0,rapperStreamA:void 0,rapperStreamB:void 0,rappers:{A:{state:"waiting",nickname:"Waiting...",peerId:void 0,feedback:{thumbUp:0,thumbDown:0}},B:{state:"waiting",nickname:"Waiting...",peerId:void 0,feedback:{thumbUp:0,thumbDown:0}}}}},computed:{roomId:function(){return this.$route.query.roomId},roomName:function(){return this.$route.query.roomName},nickname:function(){return this.$route.query.nickname}},mounted:function(){var e=this;this.peer=new n.a({key:s.a.skywayApiKey,debug:3}),this.peer.on("open",(function(){var t=e.peer.joinRoom(e.roomId,{mode:"sfu"});t.on("peerJoin",(function(){})),t.on("stream",(function(t){e.$coreApi.get("/rooms/".concat(e.roomId)).then((function(a){var r=a.data.rappers.find((function(e){return e.peerId===t.peerId}));if(r){if(e.rappers.A.peerId){if(!e.rappers.B.peerId){e.rappers.B.peerId=r.peerId,e.rappers.B.nickname=r.nickname,i.a.ref("/rooms/".concat(e.roomId,"/rappers/").concat(e.rappers.B.peerId,"/feedback")).on("value",(function(t){t&&t.val()&&(e.rappers.B.feedback=t.val())})),e.rappers.B.state="entered",e.rapperStreamB=t,document.getElementById("rapper-b").srcObject=t}}else e.rappers.A.peerId=r.peerId,e.rappers.A.nickname=r.nickname,i.a.ref("/rooms/".concat(e.roomId,"/rappers/").concat(e.rappers.A.peerId,"/feedback")).on("value",(function(t){t&&t.val()&&(e.rappers.A.feedback=t.val())})),e.rappers.A.state="entered",e.rapperStreamA=t,document.getElementById("rapper-a").srcObject=t;e.rappers.A.peerId&&e.rappers.B.peerId&&(e.roomState="started")}}))}))}))},methods:{sendMessage:function(){i.a.ref("/rooms/".concat(this.$route.query.roomId,"/messages")).push({name:this.nickname,content:this.chatMessage}),this.chatMessage=""},onClickThumbUpForA:function(){i.a.ref("/rooms/".concat(this.$route.query.roomId,"/rappers/").concat(this.rappers.A.peerId,"/feedback")).transaction((function(e){return e?{thumbUp:e.thumbUp+1,thumbDown:e.thumbDown}:void 0}))},onClickThumbDownForA:function(){i.a.ref("/rooms/".concat(this.$route.query.roomId,"/rappers/").concat(this.rappers.A.peerId,"/feedback")).transaction((function(e){return e?{thumbUp:e.thumbUp,thumbDown:e.thumbDown+1}:void 0}))},onClickThumbUpForB:function(){i.a.ref("/rooms/".concat(this.$route.query.roomId,"/rappers/").concat(this.rappers.B.peerId,"/feedback")).transaction((function(e){return e?{thumbUp:e.thumbUp+1,thumbDown:e.thumbDown}:void 0}))},onClickThumbDownForB:function(){i.a.ref("/rooms/".concat(this.$route.query.roomId,"/rappers/").concat(this.rappers.B.peerId,"/feedback")).transaction((function(e){return e?{thumbUp:e.thumbUp,thumbDown:e.thumbDown+1}:void 0}))}}}),p=(a(256),a(26)),u=Object(p.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"margin-0-2",attrs:{xs6:"","text-xs-center":""}},[a("v-card",{staticClass:"transparent-panel"},["waiting"===e.rappers.A.state?a("div",[a("br"),e._v(" "),a("v-progress-circular",{staticClass:"battle-movie",attrs:{size:50,color:"amber",indeterminate:""}})],1):e._e(),e._v(" "),a("video",{staticClass:"battle-movie",attrs:{id:"rapper-a",autoplay:"",playsinline:""}}),e._v(" "),a("v-card-title",[a("div",[e._v(e._s(e.rappers.A.nickname))])]),e._v(" "),a("v-card-actions",[a("v-chip",{attrs:{color:"white",label:"",outline:""},on:{click:e.onClickThumbUpForA}},[a("v-avatar",[a("v-icon",{staticClass:"neon"},[e._v("thumb_up")])],1),e._v(" "),a("span",{staticClass:"neon"},[e._v(e._s(e.rappers.A.feedback.thumbUp))])],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-chip",{attrs:{color:"white",label:"",outline:""},on:{click:e.onClickThumbDownForA}},[a("span",{staticClass:"neon-blue"},[e._v(e._s(e.rappers.A.feedback.thumbDown))]),e._v(" "),a("v-avatar",[a("v-icon",{staticClass:"neon-blue thumbDown"},[e._v("thumb_down")])],1)],1)],1)],1)],1),e._v(" "),a("v-flex",{staticClass:"margin-0-2",attrs:{xs6:"","text-xs-center":""}},[a("v-card",{staticClass:"transparent-panel"},["waiting"===e.rappers.B.state?a("div",[a("br"),e._v(" "),a("v-progress-circular",{staticClass:"battle-movie",attrs:{size:50,color:"amber",indeterminate:""}})],1):e._e(),e._v(" "),a("video",{staticClass:"battle-movie",attrs:{id:"rapper-b",autoplay:"",playsinline:""}}),e._v(" "),a("v-card-title",[a("div",[e._v(e._s(e.rappers.B.nickname))])]),e._v(" "),a("v-card-actions",[a("v-chip",{attrs:{color:"white",label:"",outline:""},on:{click:e.onClickThumbUpForB}},[a("v-avatar",[a("v-icon",{staticClass:"neon"},[e._v("thumb_up")])],1),e._v(" "),a("span",{staticClass:"neon"},[e._v(e._s(e.rappers.B.feedback.thumbUp))])],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-chip",{attrs:{color:"white",label:"",outline:""},on:{click:e.onClickThumbDownForB}},[a("span",{staticClass:"neon-blue"},[e._v(e._s(e.rappers.B.feedback.thumbDown))]),e._v(" "),a("v-avatar",[a("v-icon",{staticClass:"neon-blue thumbDown"},[e._v("thumb_down")])],1)],1)],1)],1)],1)],1),e._v(" "),a("chat",{attrs:{"room-id":e.roomId,"my-nickname":e.nickname}})],1)}),[],!1,null,"500008f1",null);t.default=u.exports;installComponents(u,{Chat:a(217).default})}}]);