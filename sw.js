importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.f8b067e.js",
    "revision": "56cbb9032ed82898a424040786464175"
  },
  {
    "url": "/rap-tap-app/static/commons/app.87e9acd.js",
    "revision": "7af15f861057aa0a3c1403bd7218c11e"
  },
  {
    "url": "/rap-tap-app/static/commons/fdb2c280.9ab4ad0.js",
    "revision": "7e8f90aeda8f6498b0281125063f335e"
  },
  {
    "url": "/rap-tap-app/static/commons/room.rapper~room.watcher.6640caa.js",
    "revision": "fa9241678098d9f209cbaf576ce2e229"
  },
  {
    "url": "/rap-tap-app/static/pages/about.301399c.js",
    "revision": "d14a01a931112d68aba4f8f751eacf97"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.e08eeaf.js",
    "revision": "d4cb3734eaae38ddfd30c9283b5497b3"
  },
  {
    "url": "/rap-tap-app/static/pages/host.4f4419c.js",
    "revision": "3b84e64b01f628acfad2e9528b59d308"
  },
  {
    "url": "/rap-tap-app/static/pages/index.d484434.js",
    "revision": "fba9d5f70ef97e5f5cc66274ab0fe9ae"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.52987b1.js",
    "revision": "bed690731f059470ff7e17c4e236d745"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.107cc29.js",
    "revision": "13ca4012f15e1ec8f79aaa612a5fb8ac"
  },
  {
    "url": "/rap-tap-app/static/runtime.5459db0.js",
    "revision": "aea0945742933c3ce925400644617994"
  },
  {
    "url": "/rap-tap-app/static/vendors~app.a4a14fb.js",
    "revision": "906ac51bd600b6c56bc4cd7b425d8da8"
  },
  {
    "url": "/rap-tap-app/static/vendors~pages/host.e897961.js",
    "revision": "9c1df7f5afc2bcd50bb2999ede420a5d"
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

workbox.routing.registerRoute(new RegExp('https://eguv57s481.execute-api.ap-northeast-1.amazonaws.com/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')
