importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.0f6c7904f00bf29799be.js",
    "revision": "ccdfc8eb14c6368c437c1fbf131a6bf8"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.317ab608734abaa1f044.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.d77151d0b7cf2c145a65.js",
    "revision": "c88ec83e33c0c714dab6d7983fef3cb2"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b648bc7c6e56c784e029.js",
    "revision": "529d769d23131e9df29001381d95f535"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.104ef0802acbceee9470.js",
    "revision": "af775ab3958dc59a258b0dc6c4e0bc78"
  },
  {
    "url": "/rap-tap-app/static/pages/host.40424fc75d111cf4994b.js",
    "revision": "6965f9aa8f9323a75e205311512736e7"
  },
  {
    "url": "/rap-tap-app/static/pages/index.03d5de104783a088eed7.js",
    "revision": "effb3a4197adacef9a85d40e5255ad09"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.027a1519689a26c14594.js",
    "revision": "b5388ac34a5214f7ed8aaec26e2be769"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.a405f7aab05eb492107f.js",
    "revision": "4fd1853143184df88b2d4ef27228f49a"
  },
  {
    "url": "/rap-tap-app/static/vendor.2bc40c3ee134cfc877fd.js",
    "revision": "b2659353d0c3a68797f08308b44137cc"
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





