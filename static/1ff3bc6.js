(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{199:function(t,e,a){"use strict";a(206),a(207);var n=a(203),r=a.n(n),s=a(50);if(r.a.initializeApp(s.a.firebase),!r.a.auth||!r.a.database)throw Error("firebase auth and database are not supported");r.a.auth().signInAnonymously();var o=r.a.database();e.a=o},202:function(t,e,a){var n=a(213);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(38).default)("f9165bb8",n,!0,{sourceMap:!1})},211:function(t,e,a){var n=a(259);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(38).default)("5426cd64",n,!0,{sourceMap:!1})},212:function(t,e,a){"use strict";var n=a(202);a.n(n).a},213:function(t,e,a){(e=a(37)(!1)).push([t.i,".chat-contents[data-v-3c6248f3]{max-height:200px;overflow:scroll}.chat-content-flex[data-v-3c6248f3],.chat-input-flex[data-v-3c6248f3]{margin:.2em}",""]),t.exports=e},216:function(t,e,a){"use strict";a.r(e);a(27);var n=a(0),r=a(199),s=n.default.extend({name:"Chat",props:{roomId:{type:String,required:!0},myNickname:{type:String,required:!0}},data:function(){return{chatCount:0,chats:[],chatInputMessage:""}},mounted:function(){var t=this;r.a.ref("/rooms/".concat(this.roomId,"/messages")).on("child_added",(function(e){if(e&&e.val()){var a=e.val();t.chats.push({id:"chatid-".concat(t.chatCount+1),nickname:a.name,content:a.content}),t.chatCount++}}))},methods:{sendChatMessage:function(){r.a.ref("/rooms/".concat(this.roomId,"/messages")).push({name:this.myNickname,content:this.chatInputMessage}),this.chatInputMessage=""}}}),o=(a(212),a(25)),i=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"chat-content-flex",attrs:{xs12:""}},[a("v-card",{staticClass:"chat-contents transparent-panel"},t._l(t.chats,(function(e){return a("div",{key:e.id},[a("v-chip",{attrs:{label:"",color:"pink","text-color":"white"}},[t._v("\n            "+t._s(e.nickname)+"\n          ")]),t._v(t._s(e.content)+"\n        ")],1)})),0)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"chat-input-flex",attrs:{xs12:""}},[a("v-card",{staticClass:"transparent-panel"},[a("v-card-actions",[a("v-text-field",{attrs:{counter:20,"append-icon":"chat",label:"メッセージを入力してください",required:""},on:{"click:append":t.sendChatMessage},model:{value:t.chatInputMessage,callback:function(e){t.chatInputMessage=e},expression:"chatInputMessage"}})],1)],1)],1)],1)],1)}),[],!1,null,"3c6248f3",null);e.default=i.exports},258:function(t,e,a){"use strict";var n=a(211);a.n(n).a},259:function(t,e,a){(e=a(37)(!1)).push([t.i,".battle-movie[data-v-dda0ba22]{width:100%;height:280px}.display-label[data-v-dda0ba22]{width:100%;margin:.5em 0}.margin-0-2[data-v-dda0ba22]{margin:.2em}",""]),t.exports=e},267:function(t,e,a){"use strict";a.r(e);a(224);var n=a(225),r=a.n(n),s=a(0),o=a(50),i=a(199),c=s.default.extend({data:function(){return{roomState:"entered",rappers:{me:{nickname:"Waiting...",peerId:"",feedback:{thumbUp:0,thumbDown:0}},competitor:{nickname:"Waiting...",peerId:"",feedback:{thumbUp:0,thumbDown:0}}},peer:void 0,chatCount:0,chats:[],chatMessage:""}},computed:{roomId:function(){return this.$route.query.roomId},roomName:function(){return this.$route.query.roomName},nickname:function(){return this.$route.query.nickname}},mounted:function(){var t=this;this.rappers.me.nickname=this.$route.query.nickname,this.rappers.me.peerId=this.$route.query.peerId,this.roomState="entered",this.$coreApi.get("/rooms/".concat(this.roomId)).then((function(e){var a=e.data.rappers.find((function(e){return e.peerId!==t.peerId}));t.rappers.competitor.peerId=a.peerId})),i.a.ref("/rooms/".concat(this.roomId,"/rappers/").concat(this.rappers.me.peerId,"/feedback")).on("value",(function(e){e&&e.val()&&(t.rappers.me.feedback=e.val())})),this.peer=new r.a(this.rappers.me.peerId,{key:o.a.skywayApiKey,debug:3})},methods:{onStart:function(){var t=this;this.roomState="connecting",navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){return document.getElementById("battle-movie-me").srcObject=e,t.roomState="waiting",e})).then((function(e){t.peer.joinRoom(t.roomId,{mode:"sfu",stream:e}).on("stream",(function(e){t.$coreApi.get("/rooms/".concat(t.roomId)).then((function(a){var n=a.data.rappers.find((function(e){return e.peerId!==t.rappers.me.peerId}));n.peerId===e.peerId&&(t.rappers.competitor.nickname=n.nickname,t.rappers.competitor.peerId=n.peerId,i.a.ref("/rooms/".concat(t.roomId,"/rappers/").concat(t.rappers.competitor.peerId,"/feedback")).on("value",(function(e){e&&e.val()&&(t.rappers.competitor.feedback=e.val())})),t.roomState="fighting")})),document.getElementById("battle-movie-competitor").srcObject=e}))}))},sendMessage:function(){i.a.ref("/rooms/".concat(this.$route.query.roomId,"/messages")).push({name:this.rappers.me.nickname,content:this.chatMessage}),this.chatMessage=""}}}),p=(a(258),a(25)),l=Object(p.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},["entered"===t.roomState?a("v-btn",{staticClass:"display-label",attrs:{dark:"",color:"black"},on:{click:t.onStart}},[t._v("START")]):t._e(),t._v(" "),"connecting"===t.roomState?a("v-btn",{staticClass:"display-label",attrs:{dark:"",color:"black",disabled:""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"red"}})],1):t._e(),t._v(" "),"waiting"===t.roomState?a("v-btn",{staticClass:"display-label",attrs:{dark:"",color:"black",disabled:""}},[t._v("対戦相手が入場するまでお待ち下さい。")]):t._e(),t._v(" "),"fighting"===t.roomState?a("v-btn",{staticClass:"display-label",attrs:{dark:"",color:"black",disabled:""}},[t._v("FIGHT")]):t._e()],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"margin-0-2",attrs:{xs6:"","text-xs-center":""}},[a("v-card",{staticClass:"transparent-panel"},[a("video",{staticClass:"battle-movie",attrs:{id:"battle-movie-me",autoplay:"",playsinline:""}}),t._v(" "),a("v-card-title",[a("div",[t._v(t._s(t.rappers.me.nickname))])]),t._v(" "),a("v-card-actions",[a("v-chip",{attrs:{color:"white",label:"",outline:""}},[a("v-avatar",[a("v-icon",{staticClass:"neon"},[t._v("thumb_up")])],1),t._v(" "),a("span",{staticClass:"neon"},[t._v(t._s(t.rappers.me.feedback.thumbUp))])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-chip",{attrs:{color:"white",label:"",outline:""}},[a("span",{staticClass:"neon-blue"},[t._v(t._s(t.rappers.me.feedback.thumbDown))]),t._v(" "),a("v-avatar",[a("v-icon",{staticClass:"neon-blue thumbDown"},[t._v("thumb_down")])],1)],1)],1)],1)],1),t._v(" "),a("v-flex",{staticClass:"margin-0-2",attrs:{xs6:"","text-xs-center":""}},[a("v-card",{staticClass:"transparent-panel"},[a("video",{staticClass:"battle-movie",attrs:{id:"battle-movie-competitor",autoplay:"",playsinline:""}}),t._v(" "),a("v-card-title",[a("div",[t._v(t._s(t.rappers.competitor.nickname))])]),t._v(" "),a("v-card-actions",[a("v-chip",{attrs:{color:"white",label:"",outline:""}},[a("v-avatar",[a("v-icon",{staticClass:"neon"},[t._v("thumb_up")])],1),t._v(" "),a("span",{staticClass:"neon"},[t._v(t._s(t.rappers.competitor.feedback.thumbUp))])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-chip",{attrs:{color:"white",label:"",outline:""}},[a("span",{staticClass:"neon-blue"},[t._v(t._s(t.rappers.competitor.feedback.thumbDown))]),t._v(" "),a("v-avatar",[a("v-icon",{staticClass:"neon-blue thumbDown"},[t._v("thumb_down")])],1)],1)],1)],1)],1)],1),t._v(" "),a("chat",{attrs:{"room-id":t.roomId,"my-nickname":t.rappers.me.nickname}})],1)}),[],!1,null,"dda0ba22",null);e.default=l.exports;installComponents(l,{Chat:a(216).default})}}]);