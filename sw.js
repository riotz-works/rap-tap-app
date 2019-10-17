importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.071029fbfeb3a074f569.js",
    "revision": "c3c589c9ea7c9ecb2455a172da9d8740"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.c4a81f0b09d7cb8a80f8.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.d0c38f23b0a6126906c5.js",
    "revision": "3f27d2a9b7f75ed033b14003a9a5c15c"
  },
  {
    "url": "/rap-tap-app/static/pages/about.978a9d07340c8a59f500.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.805eecf19a0aa780b549.js",
    "revision": "36e093763358b0bc055a465e083ea5e5"
  },
  {
    "url": "/rap-tap-app/static/pages/host.88867813706917213a70.js",
    "revision": "dae93b2a64d4d7bc7d5da3702723508a"
  },
  {
    "url": "/rap-tap-app/static/pages/index.fcae19d9117d03d6b1f9.js",
    "revision": "8bbeda8b23695b9bea14fa82a6eec437"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.3563acbc68d55e6298a8.js",
    "revision": "d644afa1aac94a8e0a4b8e9bd2b34abb"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.1312c42e28d196759fa8.js",
    "revision": "24cf276faef2b32abf0415d03b6213f6"
  },
  {
    "url": "/rap-tap-app/static/vendor.4520302cd135140617cf.js",
    "revision": "66741501b06439affa6ae602ca7717ee"
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





