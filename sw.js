importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.752bb73709d0067142e7.js",
    "revision": "6e380f88f0d10c37a72a41df1f24e43b"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.a8913b25accd1c9e84b4.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.dc4f726cad2557c7e0c5.js",
    "revision": "a78d63bb694751fe7fac7547833b029f"
  },
  {
    "url": "/rap-tap-app/static/pages/about.3bf7302cec63e724c98d.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.0613507ff8df88734bb0.js",
    "revision": "93bb9285a6922d9e7fa9e5234c74693f"
  },
  {
    "url": "/rap-tap-app/static/pages/host.f8a645b8c617951d875b.js",
    "revision": "6f7e7be1f866837fc8245cca3719b377"
  },
  {
    "url": "/rap-tap-app/static/pages/index.7707850b02200693fa86.js",
    "revision": "9d1dfa13e8b62a32ac57d56e56c98e44"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.0b741b3b78890cc69bf3.js",
    "revision": "d9f15b245b4e0e5183da5aec6344de33"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.a35157e457fc92f8de50.js",
    "revision": "307940374869bbb8b990be08848856ed"
  },
  {
    "url": "/rap-tap-app/static/vendor.a17c1e11cbf7a53be363.js",
    "revision": "0bb2832ede6d4b65d750cf904e164dae"
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





