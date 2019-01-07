importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.2cb64c3f6354ae8caf5d.js",
    "revision": "abb987df12752dfec67c6386add801cc"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.a8913b25accd1c9e84b4.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.0b5174fe3b2ffe7d04e2.js",
    "revision": "ad0a6977527e81f6de5a65739946956f"
  },
  {
    "url": "/rap-tap-app/static/pages/about.3bf7302cec63e724c98d.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.4ad1d47aa834c9a25aa7.js",
    "revision": "92722e80c0e3a9cae4dbb6e8a60eb3b1"
  },
  {
    "url": "/rap-tap-app/static/pages/host.64aed8178462bfcee1d7.js",
    "revision": "3f57ce92cbccdc9fbc49b6f49fd9b224"
  },
  {
    "url": "/rap-tap-app/static/pages/index.45c6dd2335018c2c0729.js",
    "revision": "142b139339ca36c911a6f6970c503647"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.8d20fc1536ee5e40d262.js",
    "revision": "02d0f465bc742afef568b8c1b1578173"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.a96eddfc7319723765c0.js",
    "revision": "837bb2f534e089fbb87e900a77549fa5"
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





