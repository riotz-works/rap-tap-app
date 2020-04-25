importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.17c648451d276b1e8783.js",
    "revision": "cba4cf12208fba56feb470b66fa41115"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.8c2279aa359a4dac9d16.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.68188490d67a3d7f9568.js",
    "revision": "90a184c4aba671d564f38fc4a2bd9d7a"
  },
  {
    "url": "/rap-tap-app/static/pages/about.6edf3538f17758f66c80.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.fb91f1939da4893b5341.js",
    "revision": "ebe40a3cbcf3d9183341a79d045c304c"
  },
  {
    "url": "/rap-tap-app/static/pages/host.97d986d47dfa0183b5a4.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.b922fd353a5910e475f8.js",
    "revision": "9fd2771f6d127e61e2aade5232f1f380"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.b3f24e67deb07d6bcbdb.js",
    "revision": "836b6e7ac716d5774d3ceabf315daf25"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.5d5590d286528808ec40.js",
    "revision": "627e49dca24e0e47976855d84934b66f"
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





