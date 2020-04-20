importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.1fc24b1e26cf9a8c5ff2.js",
    "revision": "95e9827b7220e5dfb5f54cc6cbbbae45"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.1bd3c04cf554e45c1435.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.954eebc38c06e96a8d66.js",
    "revision": "682d6b52d353311401308330c80a58b9"
  },
  {
    "url": "/rap-tap-app/static/pages/about.e0d0788822bc36712f8e.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.6b3a9f0dd62361401718.js",
    "revision": "ebe40a3cbcf3d9183341a79d045c304c"
  },
  {
    "url": "/rap-tap-app/static/pages/host.b924579184a9915093d6.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.0a5f8616a36b27abc270.js",
    "revision": "9fd2771f6d127e61e2aade5232f1f380"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.b5c92498af2bcde4e307.js",
    "revision": "836b6e7ac716d5774d3ceabf315daf25"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.7b5b75d6f02589e6a631.js",
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





