importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.18d79df8fbec0a73c70d.js",
    "revision": "9b5772a1639dae8154b46b152ccfb8ee"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.acdbc7ed362ff64e825c.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.ffbc6d6b8e165e467c55.js",
    "revision": "79e698c35834c5bf74c2d9c15b415498"
  },
  {
    "url": "/rap-tap-app/static/pages/about.facc13b7ef8dab905fc1.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.6cd1b2aa3d60d20ab86f.js",
    "revision": "7fefc127e16ce8ae3c9f1934211e4879"
  },
  {
    "url": "/rap-tap-app/static/pages/host.f296aa8c2f53095a2fa5.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.118c0ceca6df062c07d8.js",
    "revision": "d9ec5c627bc516822cc7b2d0cf63d2f4"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.dc874e76e74acebd6f0b.js",
    "revision": "2aedfc9fc21f2d9e937bca10b35e4f9f"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.768a24ddaf35db6bc375.js",
    "revision": "6486fc57fb99f167ed02beec7ea70f28"
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





