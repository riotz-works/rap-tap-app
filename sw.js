importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.bd0a3a187664389fe8aa.js",
    "revision": "bb48441bdc45dec09ff3c6d0f072b631"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.2ad477e133637c2d6180.js",
    "revision": "4ccd1193ed7d8a0926e3288a8728de30"
  },
  {
    "url": "/rap-tap-app/static/manifest.f3e22fa59be4571d72b6.js",
    "revision": "cbc4dab85bb8cdc44ac52ee269bfd2ba"
  },
  {
    "url": "/rap-tap-app/static/pages/about.3cae0d71b7cdcf21467a.js",
    "revision": "b7be38182f3a5ccd298cfdf67de5d546"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.f1cce6f186064e617f33.js",
    "revision": "75b4ccf98eeb4e69504d5ca47e03bc08"
  },
  {
    "url": "/rap-tap-app/static/pages/host.acacbedcc006def5c448.js",
    "revision": "68b7c27760b030dd5758ccc28180b0f8"
  },
  {
    "url": "/rap-tap-app/static/pages/index.b08dac48820e4a7893e2.js",
    "revision": "98d4ffc9e0decb87bf2fa3bbd6d974bd"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.9d6dd72e4173d557ca04.js",
    "revision": "6555135cca53c6101a5a303b24d5fe62"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.57f337e3f1afd85a40ff.js",
    "revision": "94082d5d066c165337281c8c4a239ae1"
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





