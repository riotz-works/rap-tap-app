importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.c9b726fa594f8efc8ee7.js",
    "revision": "e8a06df6547fca81184c7b061e9e2367"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.cfaedded599f31d95941.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.8d5c47814b9fd19b66d1.js",
    "revision": "d3796d9aa6902e30dc7912b623236de6"
  },
  {
    "url": "/rap-tap-app/static/pages/about.11ffe12db255de09d35e.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.c746d10416a7cd41b1a7.js",
    "revision": "fec1cfc10aab8ce70d9e810c7fa0e4e1"
  },
  {
    "url": "/rap-tap-app/static/pages/host.746ddc4a90af9ae622a6.js",
    "revision": "9ef3e8bff56fdc27c850a8192a35183d"
  },
  {
    "url": "/rap-tap-app/static/pages/index.5126ca3bb9db3f6f124d.js",
    "revision": "67c764a44d0171a088e8884b52083a7a"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.3f83b2b2b2bdbea88ca4.js",
    "revision": "8991913b0dcb6742e1b0a7c655a924fb"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.cd3bc803e7a6dd92867f.js",
    "revision": "1ba9bbaf3956d03f4b943b83f2a1d92c"
  },
  {
    "url": "/rap-tap-app/static/vendor.f822751bea6f9f6a5d28.js",
    "revision": "4ad0ae44c141a8b1a669b5c33646eb8c"
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





