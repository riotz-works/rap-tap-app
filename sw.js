importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.4a8993c3cad657a926e5.js",
    "revision": "e137a7c8c6378c7011e89f5c07989378"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.acdbc7ed362ff64e825c.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.6c71c8f76f7c22f932f3.js",
    "revision": "492de0bd9065daa537239482700190b9"
  },
  {
    "url": "/rap-tap-app/static/pages/about.facc13b7ef8dab905fc1.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.0d71ddf380b019ff18fa.js",
    "revision": "6870ad79054ba33cd99a0b5579baedcb"
  },
  {
    "url": "/rap-tap-app/static/pages/host.f296aa8c2f53095a2fa5.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.060e22245f42f50f3d68.js",
    "revision": "968a171b4e2e92f36efdabde99cc0174"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.24acc40aa10e98290530.js",
    "revision": "41dfbe0646d95a8b346bf831c1076eda"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.bd4b9777dc99be829d8a.js",
    "revision": "bb33076101beb782f8ab0a0b747d02a3"
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





