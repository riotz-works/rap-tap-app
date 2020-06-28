importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.e1babf7198d57ef68d26.js",
    "revision": "e8c8f13d5d3ecb700881ef1c19f4b70e"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.11d97fbd804d9cf9c4a2.js",
    "revision": "4ccd1193ed7d8a0926e3288a8728de30"
  },
  {
    "url": "/rap-tap-app/static/manifest.840e31e491d5643a3ec0.js",
    "revision": "87284ea8fd71e1a3669745db3a133804"
  },
  {
    "url": "/rap-tap-app/static/pages/about.fc16287cd0e444732280.js",
    "revision": "f853aaf6391383bc736af413ef0de46a"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.ee072b5fff9a840bdd2d.js",
    "revision": "3379ed174778431d93ad4217bb688d54"
  },
  {
    "url": "/rap-tap-app/static/pages/host.d3c3c32c408c25929375.js",
    "revision": "68b7c27760b030dd5758ccc28180b0f8"
  },
  {
    "url": "/rap-tap-app/static/pages/index.f7fd81b34d42bc81170e.js",
    "revision": "b28fa5f8cd9aac3d6117d90c87f9266d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.8962dd59cc33ef6825d5.js",
    "revision": "61842e33a853e83637216705b4f33ab7"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.8003507e90243f35b93d.js",
    "revision": "cd7865d896c941909e8e5ea062cf3982"
  },
  {
    "url": "/rap-tap-app/static/vendor.dd46d48c30d8f32ec01a.js",
    "revision": "edf7ca2c8eecd3bc32217cda7f076f45"
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





