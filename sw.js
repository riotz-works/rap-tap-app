importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.8ae8e003e5e0e6c8caab.js",
    "revision": "e8c9fe95c9ec2e9bc9eb2bd3b9ae8321"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.5bcd47d05d511afc98fe.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.c1d04102f41ed3577131.js",
    "revision": "f54c8830496ea4ad796ddefa0b8d19f7"
  },
  {
    "url": "/rap-tap-app/static/pages/about.eee9a663e359be0a91da.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.ee92c20b8c2a988b3a08.js",
    "revision": "28cde97cb367a71c0594222ff4f6c1ba"
  },
  {
    "url": "/rap-tap-app/static/pages/host.9394e9288ceb6db0dc1d.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.d1ae7a98cd146d357d6d.js",
    "revision": "ba135aa870c25f03e685cc8f78bda57b"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.e20dbe5a1946744a51ee.js",
    "revision": "0e3435ae882419d1b701e6cdd71d75f7"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.9c4ecfa941aa66448a57.js",
    "revision": "74d0cdf655cd100c8f6f9e6d93de4bc2"
  },
  {
    "url": "/rap-tap-app/static/vendor.3ff17577d0aa45def7ac.js",
    "revision": "a0fc7bd70cc02fae93858b38fbed3850"
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

workbox.routing.registerRoute(new RegExp('https://6llw9ziqp5.execute-api.ap-northeast-1.amazonaws.com/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





