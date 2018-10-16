importScripts('/rap-tap-app/static/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.d3351bbe58b094bbb7ee.js",
    "revision": "57a5874de12e3ef76f8f8b11adaf9ff9"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.b794032c0c64d0e59602.js",
    "revision": "dd57cc1a88182df3246432e317f4b666"
  },
  {
    "url": "/rap-tap-app/static/manifest.5805613789d1722868f6.js",
    "revision": "6b81ebc261c58408674f79177c20bc07"
  },
  {
    "url": "/rap-tap-app/static/pages/about.f16bf3e153e777cc8a59.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.2efd79e820416900a868.js",
    "revision": "d9d67cecbb6bf6d033bfe0114b638292"
  },
  {
    "url": "/rap-tap-app/static/pages/host.a70614b8150eed4b84b5.js",
    "revision": "23605d3bf40b3172eafcdc16f03acfe1"
  },
  {
    "url": "/rap-tap-app/static/pages/index.56afdc9af1d265e478a3.js",
    "revision": "0a72e129a4a3c4887f80815304bd4670"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.8d9824713c9e4c027632.js",
    "revision": "75e0b4b18f01dd881dda3403100184a8"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.125d59c19abbea3a068d.js",
    "revision": "c0fb8235f388bba55fb8ffed58bebca9"
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





