importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.16d5841823a216b6fb70.js",
    "revision": "366cde81f43a7ca857dc3332da6d7f7d"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.8d908eac2f7baf585fd0.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.17d8e5d6c7c58d798b25.js",
    "revision": "3da2580cc8ca7b0fcb9328702359e8b0"
  },
  {
    "url": "/rap-tap-app/static/pages/about.114c21626c875c1bcbdb.js",
    "revision": "529d769d23131e9df29001381d95f535"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.d375b3c2bd9d33ed1106.js",
    "revision": "da04ea467bc372717c19d63aa2f33d4e"
  },
  {
    "url": "/rap-tap-app/static/pages/host.0e16b2193856590fec95.js",
    "revision": "dae93b2a64d4d7bc7d5da3702723508a"
  },
  {
    "url": "/rap-tap-app/static/pages/index.e99c3ebc8c65247d4d7b.js",
    "revision": "61d0a7f6840f90d23cdbd419569f7bd7"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.da204573fdd1011f1426.js",
    "revision": "31795067392e12ec54da608390014791"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.dab0ce88637f3810e817.js",
    "revision": "c13d1f1350e2928d78a5d2013abf39ca"
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





