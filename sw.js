importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.710ddbbf2f68e54e61ed.js",
    "revision": "581fda3a0573da0610680dc72577dea9"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.8d908eac2f7baf585fd0.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.47a4472ee2711886adba.js",
    "revision": "2321df01836018966b6bd11dd3db0de9"
  },
  {
    "url": "/rap-tap-app/static/pages/about.114c21626c875c1bcbdb.js",
    "revision": "529d769d23131e9df29001381d95f535"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.98de63f8af4e4b850a8c.js",
    "revision": "1e385479d9137a2fc6b2170965b7933e"
  },
  {
    "url": "/rap-tap-app/static/pages/host.268c6f8bc7c02c01700b.js",
    "revision": "6965f9aa8f9323a75e205311512736e7"
  },
  {
    "url": "/rap-tap-app/static/pages/index.19ecbc13266da402a412.js",
    "revision": "b64f1c0d5a4e909754a27eeaeb490a1e"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.f8f1ec635a5eaf219a91.js",
    "revision": "c43258f273e72eca22250e6c3a6461c0"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.663a81ebc9cafebd398d.js",
    "revision": "25928b743d636c39ce95c6d36cd3bcd6"
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





