importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.3b46d64df20ae1d12ee8.js",
    "revision": "63a51c2eb214c26c93687a3428413f44"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.a9190b9a27254b78fda9.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.b9c43e44f6831d04f09b.js",
    "revision": "dc1014936f51424db165211ff501534b"
  },
  {
    "url": "/rap-tap-app/static/pages/about.139c530628979db98a9a.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.b61e23cddf4a36642d6e.js",
    "revision": "668ba677885888c943d89772104c6eaf"
  },
  {
    "url": "/rap-tap-app/static/pages/host.4988f6533cb3ede9dec2.js",
    "revision": "ea4fe794484bf4da5a2ee420439925e1"
  },
  {
    "url": "/rap-tap-app/static/pages/index.48b9b5e767acbe82fa91.js",
    "revision": "b1c8ecbb2ff971742ac2acfc912f5313"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.44008c4043bf01d4d547.js",
    "revision": "871608ebe2cc29f87a01bfa211f193ec"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.c2e21ab4a068bcf39126.js",
    "revision": "3ed29d310ae1d7dcde6064f97a4a1069"
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





