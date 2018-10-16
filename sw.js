importScripts('/rap-tap-app/static/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.1f61f0655a7b1070442d.js",
    "revision": "a0e465b2d8adadc12dfac345be227108"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.fa05af67111c9477d30a.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.ead632e8fa8876999210.js",
    "revision": "bd741141db1bfde65915f1caa967fd19"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b6a699a42550eb8da488.js",
    "revision": "736e620878af5b613859d67ab407a21f"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.ec0225e137663968ee6f.js",
    "revision": "cbff9bc4e9de7ae0b5f09de7c15d22f4"
  },
  {
    "url": "/rap-tap-app/static/pages/host.1659e06d05e4b88ba47e.js",
    "revision": "1865bef61494add3238e3d36a63ecf07"
  },
  {
    "url": "/rap-tap-app/static/pages/index.0b85bfe5a8e106d405f5.js",
    "revision": "d7187849c285f7cfcb1f6a7d7bd80977"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.34633825dcbc425b2adc.js",
    "revision": "e597d27c16ce6a3cc0f0ff74370de307"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.9c4a80f8a55ccfeb841f.js",
    "revision": "8b84bcb322b0e930f6b4ed66a7753b36"
  },
  {
    "url": "/rap-tap-app/static/vendor.029213348089b39ef627.js",
    "revision": "135613ea188ef36db9fb775480042f92"
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

workbox.routing.registerRoute(new RegExp('undefined/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





