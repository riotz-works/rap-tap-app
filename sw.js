importScripts('/rap-tap-app/static/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.e30fb8a257dd2a95f172.js",
    "revision": "a3ad59f290a207834d2624925d00dcab"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.242e8687c2f0e5b9b45b.js",
    "revision": "c6a2763dfd31d975c688c63a77d2f23c"
  },
  {
    "url": "/rap-tap-app/static/manifest.f9344362aea122add16d.js",
    "revision": "1864d462ce7a567e6352dd616e53834d"
  },
  {
    "url": "/rap-tap-app/static/pages/about.0dfe088db587b7eda985.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.31f386f9006b012f3e70.js",
    "revision": "72515e9283e0fdbf87f47df4761f4cf7"
  },
  {
    "url": "/rap-tap-app/static/pages/host.f64cb90e36e5b5800be0.js",
    "revision": "f3fb57290b3e07bb92a6cb00fe56b562"
  },
  {
    "url": "/rap-tap-app/static/pages/index.b4c1d3bbcf0a454a5f81.js",
    "revision": "a801558da993a14e35d85d08df711212"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.58ea540751792f6ea9ac.js",
    "revision": "eafe1af69612114d41ca105b3632e687"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.08d27d4af9f2a1a55303.js",
    "revision": "2180b57acc30806faaf7b2357153a4d0"
  },
  {
    "url": "/rap-tap-app/static/vendor.029213348089b39ef627.js",
    "revision": "135613ea188ef36db9fb775480042f92"
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





