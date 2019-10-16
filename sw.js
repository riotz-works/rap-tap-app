importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.92385f0d696a7ba8ce0f.js",
    "revision": "a04c603efc78336e113e5b12fe3ad250"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.c4a81f0b09d7cb8a80f8.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.0774ef332d26c8a01fd8.js",
    "revision": "de5193f054036ace17e08ba46a25ece9"
  },
  {
    "url": "/rap-tap-app/static/pages/about.978a9d07340c8a59f500.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.d8473f54e4b2843181a7.js",
    "revision": "2fe83cb752b4176b521a63669066d1c4"
  },
  {
    "url": "/rap-tap-app/static/pages/host.88867813706917213a70.js",
    "revision": "dae93b2a64d4d7bc7d5da3702723508a"
  },
  {
    "url": "/rap-tap-app/static/pages/index.6086bc2a53054fbfe0d2.js",
    "revision": "e4a78a48d7d2170ee49257f49dffa613"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.04197ffc250f4f2ba226.js",
    "revision": "11d48ca082901f2bd2c99205243ad109"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.10cd2ef608857cb275a5.js",
    "revision": "e8d7d4b75cea6a2acae41b5a8b37154d"
  },
  {
    "url": "/rap-tap-app/static/vendor.4520302cd135140617cf.js",
    "revision": "66741501b06439affa6ae602ca7717ee"
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

workbox.routing.registerRoute(new RegExp('https://6llw9ziqp5.execute-api.ap-northeast-1.amazonaws.com/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





