importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.1f78e51fcbf1a260d469.js",
    "revision": "c8a17c7a56d336c8a3a9b10e4fbc781f"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.a8913b25accd1c9e84b4.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.7fff9d4978191b857fa5.js",
    "revision": "48e2cd9a1cdef9bf36794c44d8145533"
  },
  {
    "url": "/rap-tap-app/static/pages/about.3bf7302cec63e724c98d.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.57d23bc6a7eb887e05bf.js",
    "revision": "1dde0e8d4d4ed19208441c272fc01a4f"
  },
  {
    "url": "/rap-tap-app/static/pages/host.64aed8178462bfcee1d7.js",
    "revision": "3f57ce92cbccdc9fbc49b6f49fd9b224"
  },
  {
    "url": "/rap-tap-app/static/pages/index.933c43a3e36f847ecdbd.js",
    "revision": "dba4cb106bc562611d5490ccddff706a"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.9540b356d9ecc29ae058.js",
    "revision": "5940b7aea6eaaf2d2a6414b440497235"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.1350eb489ce1e6041c24.js",
    "revision": "71372d75da6d6f55ebe8c569750e3020"
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





