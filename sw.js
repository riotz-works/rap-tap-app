importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.1cb89b969e92ea3c03c5.js",
    "revision": "06205e4fec40db2f6190e4be82d4bc4a"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.957e86aab7dd8b031f11.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.b3ac9fdd72b1a3dd32dc.js",
    "revision": "dfd89420caa363c2881f29fd1a8e0ed2"
  },
  {
    "url": "/rap-tap-app/static/pages/about.5de71f9403198fa52518.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.83c0d5f2a5534b0b902b.js",
    "revision": "a31e2de7abc5a894d2ddfd194bbc1406"
  },
  {
    "url": "/rap-tap-app/static/pages/host.f577e331f00c535368ee.js",
    "revision": "3f57ce92cbccdc9fbc49b6f49fd9b224"
  },
  {
    "url": "/rap-tap-app/static/pages/index.7244814cc4077edd78ba.js",
    "revision": "8eecd5ee5f9b89548869c222558d6e11"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.a7cd8929533840532bad.js",
    "revision": "7f2a59caeafaff9072f6c5466871b9bf"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.cd8b007905b4fead92e7.js",
    "revision": "eda6c86a39950a9ee6da241bd2bed2be"
  },
  {
    "url": "/rap-tap-app/static/vendor.036c02dddfe6630d417a.js",
    "revision": "4f256545501ea4d72b2bc8b15aea3646"
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

workbox.routing.registerRoute(new RegExp('https://ra0izso5i7.execute-api.us-west-2.amazonaws.com/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





