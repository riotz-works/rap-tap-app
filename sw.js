importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.b9d6fbf5747f09c18d55.js",
    "revision": "80dfccf373bee6228860e52ed2ced7df"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.1bd3c04cf554e45c1435.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.83632e2e469fd5b7d4b4.js",
    "revision": "d9f2d94fc72537143de309f4219ac128"
  },
  {
    "url": "/rap-tap-app/static/pages/about.e0d0788822bc36712f8e.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.afd92fbdc9be9fd9393c.js",
    "revision": "910eecee93a2813dd67dd892360145ad"
  },
  {
    "url": "/rap-tap-app/static/pages/host.b924579184a9915093d6.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.366fad7996a3a61e9b01.js",
    "revision": "df36e015a5e0897ccf4d35e673cd0d12"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.28d929d3677f8a479404.js",
    "revision": "791b69005bd9f84cd80d46dc27853ab8"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.fc7178cb546ccec328fe.js",
    "revision": "ee851ac0b31291785774514c5b328eb3"
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





