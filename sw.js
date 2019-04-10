importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.434a70a61eae904b5a49.js",
    "revision": "1cfa22b088ef52e25f2db72bbb280b6b"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.5d22c3ac9260c14efb7e.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.9a5c6de9dd673393a377.js",
    "revision": "5d2bb0b746e6ee51a6f2e3b5d7bedee2"
  },
  {
    "url": "/rap-tap-app/static/pages/about.2bbb89ca221bfc407bcd.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.91b493b8d2985c94cac8.js",
    "revision": "b4a04d173e847ecb3d5c9a2a3cce828f"
  },
  {
    "url": "/rap-tap-app/static/pages/host.de1ec685f5af86b61c89.js",
    "revision": "ea4fe794484bf4da5a2ee420439925e1"
  },
  {
    "url": "/rap-tap-app/static/pages/index.905db3135e589b86b920.js",
    "revision": "21bd1d570e115c282d769d7ec6f3220e"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.e413aa84b28cb9a90f22.js",
    "revision": "b3dc9dd2c02208eaa5b205594945c83a"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.e99496c545eeceb3f5d3.js",
    "revision": "b52f8867eeab6015be72409462668b1d"
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





