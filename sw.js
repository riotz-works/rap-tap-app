importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.9a8bd3f1a3dc5930af99.js",
    "revision": "17e14fbd2bd4350e23e95a58516dd657"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.61009cfd502cca954ff0.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.acf9a4ea746aae645f70.js",
    "revision": "a01c11af5be12839371304ee4d7fed90"
  },
  {
    "url": "/rap-tap-app/static/pages/about.86675348bf44bb8c1abc.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.69b2e05e22f13d32e1b7.js",
    "revision": "668ba677885888c943d89772104c6eaf"
  },
  {
    "url": "/rap-tap-app/static/pages/host.0f75a7727093489498cc.js",
    "revision": "ea4fe794484bf4da5a2ee420439925e1"
  },
  {
    "url": "/rap-tap-app/static/pages/index.4c30c771dd6ecb7561ea.js",
    "revision": "b1c8ecbb2ff971742ac2acfc912f5313"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.befa28e7158ce681af18.js",
    "revision": "871608ebe2cc29f87a01bfa211f193ec"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.e97750ae3a72a34173b3.js",
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





