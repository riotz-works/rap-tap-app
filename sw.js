importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.f72ac0b49f7b7e82ac4f.js",
    "revision": "8099e48bd89f46c792df68e41c047af0"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.3dec328dab68a4e6eeb9.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.809cecd579def3b60f68.js",
    "revision": "32a6456cb5fa774ffc57b95b6e427439"
  },
  {
    "url": "/rap-tap-app/static/pages/about.4b094921b5d6508ec037.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.2c6094ac045f972fef56.js",
    "revision": "71ab2a1db573a793ad4ebc7c51935390"
  },
  {
    "url": "/rap-tap-app/static/pages/host.3f8d2a3a1129cee5edba.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.e7895e242f2ba72edb9c.js",
    "revision": "0860517877363e328b6c7e41ac06380f"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.6502612a6e5681472019.js",
    "revision": "bcfa2f17042e084a0770fdf0b2068d8d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.6ba3aeadda15c9b7ab49.js",
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





