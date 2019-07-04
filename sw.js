importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.d32baf7654c8942f202a.js",
    "revision": "f297dcf866173845551ab5f9d2b403d1"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.8d908eac2f7baf585fd0.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.cfcf48292ae8e38b6545.js",
    "revision": "3e830d3d2af8de8391ecd8f88cd291d9"
  },
  {
    "url": "/rap-tap-app/static/pages/about.114c21626c875c1bcbdb.js",
    "revision": "529d769d23131e9df29001381d95f535"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.e8d29e363bdc7c2ad9b0.js",
    "revision": "b7715b70bbdbfc0a733e4ad9438f1e82"
  },
  {
    "url": "/rap-tap-app/static/pages/host.0e16b2193856590fec95.js",
    "revision": "dae93b2a64d4d7bc7d5da3702723508a"
  },
  {
    "url": "/rap-tap-app/static/pages/index.6757f44fee3127101d4e.js",
    "revision": "9e025f3ccab08aafb89b804fdd089f6e"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.391f0f165a3ee9101340.js",
    "revision": "55680ac2fc33978ec73a5f81ffdf5247"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.8fd863db718a39761258.js",
    "revision": "eb64f84db8eba96a516b259be7fdc19a"
  },
  {
    "url": "/rap-tap-app/static/vendor.ee30cf7179e2d300850b.js",
    "revision": "f4e8d88647eb5f3367aa655b7b41d53f"
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





