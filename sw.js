importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.0ca1c4b5d99670d702f2.js",
    "revision": "e4d2e325d16fa88abc0cf13e082493c5"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.9c3d87ad555ca200ca75.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.893ac1b5f4e544536877.js",
    "revision": "624f79d5d2c721c70cade66135eee5bb"
  },
  {
    "url": "/rap-tap-app/static/pages/about.3a0d65fb0c3511966470.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.5d159a39a74ae35dda2b.js",
    "revision": "2fe83cb752b4176b521a63669066d1c4"
  },
  {
    "url": "/rap-tap-app/static/pages/host.ff0c5ef01b456f37d3be.js",
    "revision": "dae93b2a64d4d7bc7d5da3702723508a"
  },
  {
    "url": "/rap-tap-app/static/pages/index.08c247506257ac3daeeb.js",
    "revision": "e4a78a48d7d2170ee49257f49dffa613"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.e6d5860cae00eb3d91d6.js",
    "revision": "11d48ca082901f2bd2c99205243ad109"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.0ea3b5844cea51e386f8.js",
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





