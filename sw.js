importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.a7d8712b9712b437ee35.js",
    "revision": "17c8fdd22c08bf83dac58cc904a3d7f7"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.8d908eac2f7baf585fd0.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.dae6000dbf512cbeac6f.js",
    "revision": "934f34607f905bc4c527eabd448a6971"
  },
  {
    "url": "/rap-tap-app/static/pages/about.114c21626c875c1bcbdb.js",
    "revision": "529d769d23131e9df29001381d95f535"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.a4f6508f8ea4bef52478.js",
    "revision": "8063ecdb30e2acca6da7be1d1ebb6136"
  },
  {
    "url": "/rap-tap-app/static/pages/host.268c6f8bc7c02c01700b.js",
    "revision": "6965f9aa8f9323a75e205311512736e7"
  },
  {
    "url": "/rap-tap-app/static/pages/index.25818e29ae1410ad493f.js",
    "revision": "cafe40d4b2f28e46442641a675d0f32b"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.0a014ae239fa90cab3b4.js",
    "revision": "681c6f4fe23c623a3e7354a153885671"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.9687782cf071f9a2bb94.js",
    "revision": "7f5214a69cc371a241b5775b9941e9c9"
  },
  {
    "url": "/rap-tap-app/static/vendor.ee30cf7179e2d300850b.js",
    "revision": "f4e8d88647eb5f3367aa655b7b41d53f"
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





