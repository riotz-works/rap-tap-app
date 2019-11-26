importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.a577562f0e6594e6c17d.js",
    "revision": "848a87f05635913b9ebf255dc775ee60"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.cfaedded599f31d95941.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.a44f29b1ab7bab7fa098.js",
    "revision": "01a5507fcdea91c6f28d456d50faf1cc"
  },
  {
    "url": "/rap-tap-app/static/pages/about.11ffe12db255de09d35e.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.d487099c11d1f7857cdb.js",
    "revision": "4e28fe20982c8466afef89a318354c8f"
  },
  {
    "url": "/rap-tap-app/static/pages/host.746ddc4a90af9ae622a6.js",
    "revision": "9ef3e8bff56fdc27c850a8192a35183d"
  },
  {
    "url": "/rap-tap-app/static/pages/index.c20bc70e9fc63e0ee11e.js",
    "revision": "8178d95a142e551baa76e7511910770a"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.37ba0aec5f870a3aca32.js",
    "revision": "f9a02731acd55a6ba4977588f921ec0c"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.ab3d8cd2d9e76d1af95d.js",
    "revision": "65fda1374fbad6e20cfd468d9452031a"
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





