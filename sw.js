importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.4d58482854fc8e9597df.js",
    "revision": "a441f843c8242f86c5bf7fde4bb7d4e8"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.5bcd47d05d511afc98fe.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.d561432776e47df1a7fe.js",
    "revision": "f2547f9daeea915063eccdf0cd946c04"
  },
  {
    "url": "/rap-tap-app/static/pages/about.eee9a663e359be0a91da.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.293fa72868c22b276c45.js",
    "revision": "3ffe0bbf5404a67e95e56ad3517b8529"
  },
  {
    "url": "/rap-tap-app/static/pages/host.9394e9288ceb6db0dc1d.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.0a8becc01403e08393b2.js",
    "revision": "d969b0d0dd2aea05ae90df791ddc191d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.7b3cf3aa6b79b460d929.js",
    "revision": "03856a4c6abc0a54bc5426cac2232cdb"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.706c674aa81d7839ab71.js",
    "revision": "40001af24db15a6569188e4b83e795ec"
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





