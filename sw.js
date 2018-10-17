importScripts('/rap-tap-app/static/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.1b363f5153e9c5d72bdc.js",
    "revision": "e1c6f899ca574fa1215e12b6a2a4cd78"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.fa05af67111c9477d30a.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.8513bfff3f684d74873d.js",
    "revision": "d4bbcd3277724844e0ae597b472304be"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b31cf48ec4c78093aee8.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.ec0225e137663968ee6f.js",
    "revision": "cbff9bc4e9de7ae0b5f09de7c15d22f4"
  },
  {
    "url": "/rap-tap-app/static/pages/host.1659e06d05e4b88ba47e.js",
    "revision": "1865bef61494add3238e3d36a63ecf07"
  },
  {
    "url": "/rap-tap-app/static/pages/index.0b85bfe5a8e106d405f5.js",
    "revision": "d7187849c285f7cfcb1f6a7d7bd80977"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.991b97e3e36386d4f67b.js",
    "revision": "7f0f1d8bf1670a963c9d8da4e04fbd39"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.7d84a8fe5cb356e7bbb4.js",
    "revision": "2bb9eb29c82526f913d3f43d87e52d0c"
  },
  {
    "url": "/rap-tap-app/static/vendor.029213348089b39ef627.js",
    "revision": "135613ea188ef36db9fb775480042f92"
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

workbox.routing.registerRoute(new RegExp('https://ra0izso5i7.execute-api.us-west-2.amazonaws.com/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





