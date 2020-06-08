importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.d7c113784853bd0ce927.js",
    "revision": "ac39aa0ae7307af05bbb39bc2f95e4b0"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.e0525ce5749e1923d26c.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.bbd289f1002f0b1509e0.js",
    "revision": "3a697534be4962eec5174005e6ca41d6"
  },
  {
    "url": "/rap-tap-app/static/pages/about.d00c4c686b86747b2660.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.44ca146e3a6301b86ee5.js",
    "revision": "2953bafec05bae9a7efb5fb84cdb6f27"
  },
  {
    "url": "/rap-tap-app/static/pages/host.3c18b6210e99ab80a5f3.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.8981a9eb3d87dedcf702.js",
    "revision": "273da1015cc7fcf4f8695e46a6ab2de3"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.38d3c37d2418b34d937a.js",
    "revision": "099972168421cd2f05ab0c84fd128d5d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.3a9af6ef2a3ca858b352.js",
    "revision": "8a9ec143ec0519ffaaf9cf1e353db016"
  },
  {
    "url": "/rap-tap-app/static/vendor.dd46d48c30d8f32ec01a.js",
    "revision": "edf7ca2c8eecd3bc32217cda7f076f45"
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





