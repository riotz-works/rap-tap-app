importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.903fdfc399517e382aa4.js",
    "revision": "90bb6fce7903f5bfb73ae9b189f6da08"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.8d908eac2f7baf585fd0.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.fe2d17ce4b5ed8dde583.js",
    "revision": "56e7113a7759283a2f4cf0b84986cf38"
  },
  {
    "url": "/rap-tap-app/static/pages/about.114c21626c875c1bcbdb.js",
    "revision": "529d769d23131e9df29001381d95f535"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.044eb761f39d63c680fb.js",
    "revision": "2e26e6b1cf66e8a203f63fbd14158d2d"
  },
  {
    "url": "/rap-tap-app/static/pages/host.268c6f8bc7c02c01700b.js",
    "revision": "6965f9aa8f9323a75e205311512736e7"
  },
  {
    "url": "/rap-tap-app/static/pages/index.5fd71715c9122dbb7ef6.js",
    "revision": "e6a045e46cd56566cfd9927938b795cc"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.5f5bb0e3a2da09395aa6.js",
    "revision": "b1f7c7510255b91cf8726707fbacd924"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.170d3a0ce570303f1316.js",
    "revision": "673c3fb6b0b2418e22594f78fdd8879a"
  },
  {
    "url": "/rap-tap-app/static/vendor.ee30cf7179e2d300850b.js",
    "revision": "f4e8d88647eb5f3367aa655b7b41d53f"
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





