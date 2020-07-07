importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.e05ddae.js",
    "revision": "b5bf776ddb08334992ba2611958b95da"
  },
  {
    "url": "/rap-tap-app/static/commons/app.5e4d7eb.js",
    "revision": "c1a768e6c74c0bf5a28cd08da9f60034"
  },
  {
    "url": "/rap-tap-app/static/commons/fdb2c280.111483f.js",
    "revision": "d4b5c6542e3cd65506fda26413014507"
  },
  {
    "url": "/rap-tap-app/static/commons/room.rapper~room.watcher.44b7f0b.js",
    "revision": "dedee60b8fe1e21102c4e75b9afe4a54"
  },
  {
    "url": "/rap-tap-app/static/pages/about.167ed9a.js",
    "revision": "a54acc059d3754ded17728d6828183d0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.76375bc.js",
    "revision": "56aac5ed5eaa64b3e1ffac1fd6eb0121"
  },
  {
    "url": "/rap-tap-app/static/pages/host.d6a2fb0.js",
    "revision": "93c38a0da8f595157a6f4952b2540a81"
  },
  {
    "url": "/rap-tap-app/static/pages/index.f496b02.js",
    "revision": "f824cc45ef2747324c208ede1b6e2842"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.dfb3a10.js",
    "revision": "437a19b71e518ead8f2f94eac708e170"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.9d62e89.js",
    "revision": "368bf259caeb4a3c6efcef9a19f5be9a"
  },
  {
    "url": "/rap-tap-app/static/runtime.c7ac231.js",
    "revision": "a5c1d031eb8aa7208258078abdc2cd67"
  },
  {
    "url": "/rap-tap-app/static/vendors~app.3410368.js",
    "revision": "8e7727855e17bf95829e466426f4b6c3"
  },
  {
    "url": "/rap-tap-app/static/vendors~pages/host.d524073.js",
    "revision": "a3444f1ab9228e7ae0011f95688ca011"
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
