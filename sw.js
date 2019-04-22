importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.399086b15158b82c1e3e.js",
    "revision": "c8b4844e455516c6c8e0ee1b9b8840eb"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.5d22c3ac9260c14efb7e.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.10605984d19ea8105b9a.js",
    "revision": "416dbd6be3af69e85c794dd91648218c"
  },
  {
    "url": "/rap-tap-app/static/pages/about.2bbb89ca221bfc407bcd.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.c93522bfc7237d2c527f.js",
    "revision": "8bb4ab34b8956ef7a8a23b76ceaca831"
  },
  {
    "url": "/rap-tap-app/static/pages/host.de1ec685f5af86b61c89.js",
    "revision": "ea4fe794484bf4da5a2ee420439925e1"
  },
  {
    "url": "/rap-tap-app/static/pages/index.1c5a6dde1375e45f8841.js",
    "revision": "940c1e16b0536bcde701c8402471f738"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.605ab439171023a442ad.js",
    "revision": "746b10dff9b3b549a7e3f5bfb1813a73"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.f82505a2c5c5513131fc.js",
    "revision": "c69226cb5cd1576aabbe23ee0b737e26"
  },
  {
    "url": "/rap-tap-app/static/vendor.4691131cc4c6b1de6c19.js",
    "revision": "a48f37f00c6a23cc446421104078c46a"
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





