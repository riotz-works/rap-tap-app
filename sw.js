importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.42efbe07991956803e61.js",
    "revision": "3e1929736c0c2591c068099690cb5120"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.7db3455e17d44b56d856.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.eea24a8f97984de177ca.js",
    "revision": "aadcffab6b17600b24d23d0169eb9b73"
  },
  {
    "url": "/rap-tap-app/static/pages/about.8648d4f4a322d11071ad.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.1d2d8464805812ab9494.js",
    "revision": "71ab2a1db573a793ad4ebc7c51935390"
  },
  {
    "url": "/rap-tap-app/static/pages/host.838b9be066375370afb7.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.21967c3b05da5526458b.js",
    "revision": "0860517877363e328b6c7e41ac06380f"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.4d21cfb993ce26e12a3a.js",
    "revision": "bcfa2f17042e084a0770fdf0b2068d8d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.fa8d85fc2e528de33f75.js",
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





