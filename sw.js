importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.096c5c2aeb63559563ce.js",
    "revision": "e3a271ee2e741e41d8ea1aafa5192a49"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.6609c6e579437e28aeb9.js",
    "revision": "0d98e31f2fb2ed6abdc1a72351367e16"
  },
  {
    "url": "/rap-tap-app/static/manifest.3160e9d2d7890fe354e1.js",
    "revision": "8e6813f0f5b647a6678f2223051be179"
  },
  {
    "url": "/rap-tap-app/static/pages/about.9f08d79d0c4664a810f6.js",
    "revision": "0a1defe86cc30b11ebb96d4a553daeaf"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.b9e2d689029648daaa74.js",
    "revision": "d9b2df786978e71957bb98baa8cbc863"
  },
  {
    "url": "/rap-tap-app/static/pages/host.91b230f676cdfa0e53f8.js",
    "revision": "600813d411303ab733b5b7048c7d7280"
  },
  {
    "url": "/rap-tap-app/static/pages/index.9dcaa5185ffa2dc113cc.js",
    "revision": "7547b5c1f22545deba96079c08c16ecb"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.d5f802dd55dc36395bb3.js",
    "revision": "3b284b7ffe83b548c0b5fd18f6e08fef"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.251f1cd6098d399b73b3.js",
    "revision": "9ad52ac1db2cbe24b68b7b9a05307079"
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





