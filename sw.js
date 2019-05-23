importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.311f859a8617236b043b.js",
    "revision": "feb31428d1f5b2a271c6bd637b9bedb2"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.317ab608734abaa1f044.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.f70fdd7fba735caf7a72.js",
    "revision": "1b5961deaad0ec0759ef1a7d85222fa3"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b648bc7c6e56c784e029.js",
    "revision": "529d769d23131e9df29001381d95f535"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.407699722e68d695413f.js",
    "revision": "a38b243396d1c7f1d49bbae9dc8a4056"
  },
  {
    "url": "/rap-tap-app/static/pages/host.40424fc75d111cf4994b.js",
    "revision": "6965f9aa8f9323a75e205311512736e7"
  },
  {
    "url": "/rap-tap-app/static/pages/index.1691079965f989943ca8.js",
    "revision": "0d4b95ff8e43636a5b4ade532b02ab24"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.c632f6371e028de7b26a.js",
    "revision": "db6e39fb094c02c05739119ca0111027"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.dab759a3b263b84c5f69.js",
    "revision": "490d3462a417d13017c3e683aabeb1fb"
  },
  {
    "url": "/rap-tap-app/static/vendor.2bc40c3ee134cfc877fd.js",
    "revision": "b2659353d0c3a68797f08308b44137cc"
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





