importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.4f19b429cc31da40d984.js",
    "revision": "166312a93b699b87ebea5fd0808d648e"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.aae57794fc30fc99f73f.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.774304f1116b7ad606e4.js",
    "revision": "2140a0e585642823d69ff28cf84254ce"
  },
  {
    "url": "/rap-tap-app/static/pages/about.eee20c58ccddd330615d.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.cda79cc745133ff5b2b5.js",
    "revision": "afc5a57fcd7b8e67c1e268852574b44c"
  },
  {
    "url": "/rap-tap-app/static/pages/host.3995cd8f6337e417c59a.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.301cdc555ec655dc76f5.js",
    "revision": "1a3553f9165f0905727270ac88c2d5cc"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.1cb86dd911a3ce485b12.js",
    "revision": "be871f615adafa60f3fe45dd2ef3767c"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.e3d94fee2317523a0624.js",
    "revision": "b452cf7ee5264a3d249472796a4fc4fc"
  },
  {
    "url": "/rap-tap-app/static/vendor.dd46d48c30d8f32ec01a.js",
    "revision": "edf7ca2c8eecd3bc32217cda7f076f45"
  }
], {
  "cacheId": "rap-tap-app",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/rap-tap-app/static/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/rap-tap-app/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workbox.routing.registerRoute(new RegExp('.(?:png|gif|jpg|jpeg|svg)$'), workbox.strategies.cacheFirst({"cacheExpiration":{"maxEntries":60,"maxAgeSeconds":2592000}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://6llw9ziqp5.execute-api.ap-northeast-1.amazonaws.com/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





