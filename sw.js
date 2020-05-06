importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.1953df6f8e26c698206a.js",
    "revision": "9da29bbbda6faa93257dfe012091737b"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.8c2279aa359a4dac9d16.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.c20b24f4079c443b4338.js",
    "revision": "b20054a8d5148fbf9589a458542c22ec"
  },
  {
    "url": "/rap-tap-app/static/pages/about.6edf3538f17758f66c80.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.7a64dc81f2dfbbe349c9.js",
    "revision": "8622b7d611ca020d3defde2ac79450c4"
  },
  {
    "url": "/rap-tap-app/static/pages/host.97d986d47dfa0183b5a4.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.4b435f6d8c03eff78abc.js",
    "revision": "9745a73d2a6216d213ceb5bf07c61568"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.fa78c33472887f6a720a.js",
    "revision": "83b0c75f614f2fef25bd872826d4138e"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.373623910163ea2af3dd.js",
    "revision": "eb8845d65ad342ba95273cb4b99405be"
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





