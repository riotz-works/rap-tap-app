importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.b74202978f25237c7a03.js",
    "revision": "495fada89e0295995706a8ca5cc484a0"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.b6868ef9f52dd51e845b.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.d719606df75312353b61.js",
    "revision": "aa85b42fcc0588d233879ae8cbb688b2"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b2694edb374bcb63371c.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.38e854a19b7288c9417a.js",
    "revision": "71ab2a1db573a793ad4ebc7c51935390"
  },
  {
    "url": "/rap-tap-app/static/pages/host.92cb885a7eb3dd15ff32.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.01fb91fe3bf4c3838243.js",
    "revision": "0860517877363e328b6c7e41ac06380f"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.02be04d80ae895b715f2.js",
    "revision": "bcfa2f17042e084a0770fdf0b2068d8d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.169c79aa8697322d0c82.js",
    "revision": "fb77367930a5dc3a3309a92dd498e23e"
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





