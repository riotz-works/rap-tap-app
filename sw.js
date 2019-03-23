importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.488e6b625a84f44a02ac.js",
    "revision": "138635706098ec76aa8b4d83889ded00"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.a9190b9a27254b78fda9.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.360a59d4ead3ea64a120.js",
    "revision": "021cae43be74f4e7de7512baa79a6b93"
  },
  {
    "url": "/rap-tap-app/static/pages/about.139c530628979db98a9a.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.9bb7ded9a922f9e5c8a6.js",
    "revision": "95c6e25ba1214d1dc1d21d8aeccf9ac7"
  },
  {
    "url": "/rap-tap-app/static/pages/host.4988f6533cb3ede9dec2.js",
    "revision": "ea4fe794484bf4da5a2ee420439925e1"
  },
  {
    "url": "/rap-tap-app/static/pages/index.a33141b5d9720f61f328.js",
    "revision": "ca75d06575d8ada65aa08e926a366e1c"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.77b0a9104ab0305098ec.js",
    "revision": "b676f996c9580da6381f5a05e7343c74"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.578ec717254ae5610eec.js",
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





