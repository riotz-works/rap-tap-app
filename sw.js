importScripts('/rap-tap-app/static/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.1a6127cbfe52269fb1d7.js",
    "revision": "d385f883907ec12e665bb93cd0d1bc3c"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.b6bf4005a3b720775907.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.8cba68d63ade5be2bc72.js",
    "revision": "fefa6ceb01fd9dc2c211c09e336df411"
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
    "url": "/rap-tap-app/static/pages/index.8a514e12a9115f242d7c.js",
    "revision": "d8e2b2a790fed04fc6108ee73285060c"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.7085f583512164a35988.js",
    "revision": "323794742825fd4ff93e973793591def"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.7373062ee47bab01896f.js",
    "revision": "dcbaecfe1aaef1adf71b22576c206de1"
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





