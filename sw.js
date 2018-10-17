importScripts('/rap-tap-app/static/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.fea66e70fce408dc268d.js",
    "revision": "4ada66aa45012e08f64a6bf74051bc79"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.fa05af67111c9477d30a.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.ad7c5bb638f933c7a7ea.js",
    "revision": "62bfe738ef2dbe4462e1f679b185d89c"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b31cf48ec4c78093aee8.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.17da5131f4721f9ea9eb.js",
    "revision": "a339e8c17bf080d7fe7c0b9123665c5f"
  },
  {
    "url": "/rap-tap-app/static/pages/host.1659e06d05e4b88ba47e.js",
    "revision": "1865bef61494add3238e3d36a63ecf07"
  },
  {
    "url": "/rap-tap-app/static/pages/index.4dcdddde3860e0a51255.js",
    "revision": "d8e2b2a790fed04fc6108ee73285060c"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.7e43cfdae6e8eba8cc32.js",
    "revision": "3244ee9638d83b2b1a350da0f5f74a17"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.f513955f84f4b0764085.js",
    "revision": "c350eac85ba22ff5d18dae68a691b43a"
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





