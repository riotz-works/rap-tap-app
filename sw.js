importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.a5f1661.js",
    "revision": "0c8681ed73b9cc13569cf84edd0d07a6"
  },
  {
    "url": "/rap-tap-app/static/commons/app.5e4d7eb.js",
    "revision": "c1a768e6c74c0bf5a28cd08da9f60034"
  },
  {
    "url": "/rap-tap-app/static/commons/fdb2c280.2383e61.js",
    "revision": "781096eb7c1f3dc6695d7b232be129f2"
  },
  {
    "url": "/rap-tap-app/static/commons/room.rapper~room.watcher.e2ca25d.js",
    "revision": "cfc9c90432f672548c700cd5c676bee5"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b21d060.js",
    "revision": "9aa8189f4e0ee7b0028749d71f16236b"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.8d28ee4.js",
    "revision": "6fe39397a560b89e68e6bafa43aa9062"
  },
  {
    "url": "/rap-tap-app/static/pages/host.c336c27.js",
    "revision": "bda4aa25bd306e679c930053cc629fd0"
  },
  {
    "url": "/rap-tap-app/static/pages/index.b6e9400.js",
    "revision": "17d485452c8425b77a658992649b6489"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.123dd67.js",
    "revision": "3b1cdeb38d01c9b54cb5e9481cbe5516"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.e0b08ac.js",
    "revision": "cdbaa76f061a4e06dd4b137d43ac22b4"
  },
  {
    "url": "/rap-tap-app/static/runtime.39c1fc1.js",
    "revision": "53dbaf6a89a96a3c3b185d91eb826f83"
  },
  {
    "url": "/rap-tap-app/static/vendors~app.3410368.js",
    "revision": "8e7727855e17bf95829e466426f4b6c3"
  },
  {
    "url": "/rap-tap-app/static/vendors~pages/host.979fb1b.js",
    "revision": "8ab90e10dfe2ef0267aa46bc3755ae0b"
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

workbox.routing.registerRoute(new RegExp('(?:.png|.gif|.jpg|.jpeg|.svg)$'), workbox.strategies.cacheFirst({"cacheExpiration":{"maxEntries":60,"maxAgeSeconds":2592000}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://6llw9ziqp5.execute-api.ap-northeast-1.amazonaws.com/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')
