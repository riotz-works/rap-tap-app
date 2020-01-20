importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.8b5818cdc36b5938e40a.js",
    "revision": "1e2405cbbaa12823692e51fa82d92c44"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.cfaedded599f31d95941.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.8a94aa61474f34197ca3.js",
    "revision": "dd39046f97b3d59a8de8754b289a150f"
  },
  {
    "url": "/rap-tap-app/static/pages/about.11ffe12db255de09d35e.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.0ef4564d1cb7a05087fb.js",
    "revision": "6bbeb7891c44ec25ecf72067adc23911"
  },
  {
    "url": "/rap-tap-app/static/pages/host.746ddc4a90af9ae622a6.js",
    "revision": "9ef3e8bff56fdc27c850a8192a35183d"
  },
  {
    "url": "/rap-tap-app/static/pages/index.31aee8edf3668174038e.js",
    "revision": "d36f0d8f5e3f0b7c6b7a5396bea66a66"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.643e2e4bc408028dded5.js",
    "revision": "0cb3f75c0d2cd72de03bc66561800273"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.2b1df18bd9547df29735.js",
    "revision": "d5bd6e238a9c28f16d6d7d4e1ca60ed2"
  },
  {
    "url": "/rap-tap-app/static/vendor.b16acb626bdb8bfd416b.js",
    "revision": "6f93d20749d49961ca6d1d1b30579bac"
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





