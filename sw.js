importScripts('/rap-tap-app/static/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.18bcc05fbd1219290833.js",
    "revision": "7ba9458bd915d9672647c9276b472d82"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.860485f7694926d31a51.js",
    "revision": "a027f8a5d7ae8a43d456c813d6fe0c84"
  },
  {
    "url": "/rap-tap-app/static/manifest.52a68eb3b0cf759b19ab.js",
    "revision": "8088c3fb5030b658e3621bac2cf0c4c5"
  },
  {
    "url": "/rap-tap-app/static/pages/about.80542407b6f3dd5e64fc.js",
    "revision": "3c686c841f9b4d1f5a5d6db56d1b053f"
  },
  {
    "url": "/rap-tap-app/static/pages/index.cb1007d02803ddd198e6.js",
    "revision": "be5d90d131fb854c95c494b7a8ab4616"
  },
  {
    "url": "/rap-tap-app/static/vendor.435393b8e7871da48572.js",
    "revision": "0e57276773d3780e362999e33e3cd299"
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





