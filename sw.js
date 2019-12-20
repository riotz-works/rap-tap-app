importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.f3c8e853b936d3c31e3a.js",
    "revision": "3986135713ac3d8ddefc41ea783530c4"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.cfaedded599f31d95941.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.e8770783e304a7e2a90a.js",
    "revision": "35faa7eee9d8f86929f61146f0526f98"
  },
  {
    "url": "/rap-tap-app/static/pages/about.11ffe12db255de09d35e.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.8f6b9cf8aa1c50828838.js",
    "revision": "61cc3ef8b6bd45eef5face1df6657831"
  },
  {
    "url": "/rap-tap-app/static/pages/host.746ddc4a90af9ae622a6.js",
    "revision": "9ef3e8bff56fdc27c850a8192a35183d"
  },
  {
    "url": "/rap-tap-app/static/pages/index.695abf6bc802c9c99187.js",
    "revision": "6beb81f63122a4fb9edadebc0f0c3bc8"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.ffbda1d40595b513d845.js",
    "revision": "6ad566d6ee08b65496a85331b08c5c72"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.0b1c57a6a3591b983b0b.js",
    "revision": "66ec76837df1444e36c4dcba975fd8e6"
  },
  {
    "url": "/rap-tap-app/static/vendor.ea7adbafffb0e3a77901.js",
    "revision": "de413f8dc0769c16ce42ca1dfcf037c6"
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





