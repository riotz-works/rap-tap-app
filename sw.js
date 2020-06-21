importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.f36675755938d67ce1c4.js",
    "revision": "b41a66d71dbfc963651aa597b6d536d0"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.2ad477e133637c2d6180.js",
    "revision": "4ccd1193ed7d8a0926e3288a8728de30"
  },
  {
    "url": "/rap-tap-app/static/manifest.580fc63fd530e05bee73.js",
    "revision": "438181889c982de263f1e50af0235cef"
  },
  {
    "url": "/rap-tap-app/static/pages/about.3cae0d71b7cdcf21467a.js",
    "revision": "b7be38182f3a5ccd298cfdf67de5d546"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.22250eb0c1d1e66b749c.js",
    "revision": "e5bfb967238173c05c37cee023cdbf04"
  },
  {
    "url": "/rap-tap-app/static/pages/host.acacbedcc006def5c448.js",
    "revision": "68b7c27760b030dd5758ccc28180b0f8"
  },
  {
    "url": "/rap-tap-app/static/pages/index.43a53a454c04c65d3e20.js",
    "revision": "fa007e409ddb71d66e360c4ab4e6d8e4"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.52142e071f5fc590ac27.js",
    "revision": "270acabab8171a336fc3e2096809e6ec"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.c8287246581b95d86ef9.js",
    "revision": "9cf4b6b3fea9951bbe4b2a16979d9995"
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





