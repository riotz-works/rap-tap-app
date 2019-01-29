importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.a7b1b762c01b49d45eae.js",
    "revision": "7cd54b58f0e43280092b50ccb206f554"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.a8913b25accd1c9e84b4.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.cedae4705e869798f48b.js",
    "revision": "bd1b6844a29060a8b1e843b2b3f575f3"
  },
  {
    "url": "/rap-tap-app/static/pages/about.3bf7302cec63e724c98d.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.710f595ff97117a58fb1.js",
    "revision": "d67f3bde15ff59f1b32f7e2a53f7cd1a"
  },
  {
    "url": "/rap-tap-app/static/pages/host.f8a645b8c617951d875b.js",
    "revision": "6f7e7be1f866837fc8245cca3719b377"
  },
  {
    "url": "/rap-tap-app/static/pages/index.fc7631bade3625200889.js",
    "revision": "69d7da03468df3ce545d44d670b4a702"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.d750301084182352c7b6.js",
    "revision": "25a51533efb865d03001ad7627f3efe8"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.49fbe94353251a3acee6.js",
    "revision": "a747143f8c94d93a9a3543e4f9b2f013"
  },
  {
    "url": "/rap-tap-app/static/vendor.0ca754c47c67cc69341a.js",
    "revision": "199e7d6db05fa8f37102e3cfa03dec03"
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





