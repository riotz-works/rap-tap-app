importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.c9a4c7a1bf35b672ec86.js",
    "revision": "96591001d48c5a5680304a323900a8ee"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.69d218190f8dab9d29fd.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.ae0230136bfd53cbf97a.js",
    "revision": "9d9a06d9ed3222e7a69b614cd51fe3fb"
  },
  {
    "url": "/rap-tap-app/static/pages/about.989021cc1a58134f2eb6.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.47122d317b7801600214.js",
    "revision": "8fec0e1f3ebcc0cc3ecf7f622ebcaf70"
  },
  {
    "url": "/rap-tap-app/static/pages/host.1102f590477e6b5e8201.js",
    "revision": "ea4fe794484bf4da5a2ee420439925e1"
  },
  {
    "url": "/rap-tap-app/static/pages/index.bbc9fc849a5ca229b7d2.js",
    "revision": "268cd70b63a9c2d33853bd0527874895"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.09a601e9eaa63a08baa1.js",
    "revision": "8649cc11d7cd867f290b1d6aef13f444"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.bb6fc07c04fb203d39af.js",
    "revision": "4b09744ca657c3ce0d539b6fc696cddf"
  },
  {
    "url": "/rap-tap-app/static/vendor.90831afbcfb3c7075a30.js",
    "revision": "9b4febe1bcbc66ecab5116546021b645"
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





