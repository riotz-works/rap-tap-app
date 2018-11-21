importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.955861ad0f83670f08aa.js",
    "revision": "76de3d0f4380c3d740d79b0b6a6693e2"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.957e86aab7dd8b031f11.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.5c75b23297f706203edf.js",
    "revision": "d882f9e05aec67f356d6014416e8337d"
  },
  {
    "url": "/rap-tap-app/static/pages/about.5de71f9403198fa52518.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.cc584e793c4c2f952972.js",
    "revision": "16847d16ce367441e11cb9870dc90017"
  },
  {
    "url": "/rap-tap-app/static/pages/host.f577e331f00c535368ee.js",
    "revision": "3f57ce92cbccdc9fbc49b6f49fd9b224"
  },
  {
    "url": "/rap-tap-app/static/pages/index.b71f05852afc97aa5642.js",
    "revision": "4aeea53944557b8b8a715c74a0f3fe91"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.3243878897d60d787f90.js",
    "revision": "7ba19049bac31428ad747ee6542afda9"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.8b0e17504bb97c459ca3.js",
    "revision": "34ef34a3199b3ea9973bdca8a3bc2a08"
  },
  {
    "url": "/rap-tap-app/static/vendor.a17c1e11cbf7a53be363.js",
    "revision": "0bb2832ede6d4b65d750cf904e164dae"
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

workbox.routing.registerRoute(new RegExp('https://ra0izso5i7.execute-api.us-west-2.amazonaws.com/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





