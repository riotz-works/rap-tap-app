importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.25293d232bd4e4275731.js",
    "revision": "4533d7121d8e831fef92d2a77c5b77fe"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.acdbc7ed362ff64e825c.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.9c284cf3ff6c008257fb.js",
    "revision": "55e946be36a2accba858f71e3139e299"
  },
  {
    "url": "/rap-tap-app/static/pages/about.facc13b7ef8dab905fc1.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.3de02b14c8667cac9be7.js",
    "revision": "6158a91cc697ac1ba989622edc63500c"
  },
  {
    "url": "/rap-tap-app/static/pages/host.f296aa8c2f53095a2fa5.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.842df8e3d8dda5a519e3.js",
    "revision": "c53c2e67e9f2331abd7b0d670ccade7c"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.f2f1c5c13ad2f2a88765.js",
    "revision": "9d7f42c0e89251ccb3225650a9a3dce3"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.e03627db3d5c6538b8a2.js",
    "revision": "0a68377e3383a8264ba4576b6fc98a74"
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





