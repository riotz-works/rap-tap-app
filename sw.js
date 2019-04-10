importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.6b273a842d55f841e7e0.js",
    "revision": "5068ab8b952bd2198dfc8a9c04d40510"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.5d22c3ac9260c14efb7e.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.9fb7becdb45ee1cfed63.js",
    "revision": "cea348bfabfc947394d9b1c828c6e3f3"
  },
  {
    "url": "/rap-tap-app/static/pages/about.2bbb89ca221bfc407bcd.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.90fb419ad219c90ad327.js",
    "revision": "95c6e25ba1214d1dc1d21d8aeccf9ac7"
  },
  {
    "url": "/rap-tap-app/static/pages/host.de1ec685f5af86b61c89.js",
    "revision": "ea4fe794484bf4da5a2ee420439925e1"
  },
  {
    "url": "/rap-tap-app/static/pages/index.94dc6202ec5d40a2af4f.js",
    "revision": "ca75d06575d8ada65aa08e926a366e1c"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.209de2505031d12b4add.js",
    "revision": "b676f996c9580da6381f5a05e7343c74"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.19af417cd9a5a635bc6c.js",
    "revision": "c3356a3b0f30d41478cf41fae6dcd974"
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





