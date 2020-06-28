importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.f6bfbe65f511f708cbd1.js",
    "revision": "63d5f8d32a74128687ca9163eb90cbb4"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.11d97fbd804d9cf9c4a2.js",
    "revision": "4ccd1193ed7d8a0926e3288a8728de30"
  },
  {
    "url": "/rap-tap-app/static/manifest.07118b8fd163a1eab61b.js",
    "revision": "e6323d1c801e771bd9ef44935481e51e"
  },
  {
    "url": "/rap-tap-app/static/pages/about.f5df45fd6dc45dd90590.js",
    "revision": "b7be38182f3a5ccd298cfdf67de5d546"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.18fd36840d84e457005a.js",
    "revision": "1c8353ed13076a47f7083dc2f43fa11f"
  },
  {
    "url": "/rap-tap-app/static/pages/host.d3c3c32c408c25929375.js",
    "revision": "68b7c27760b030dd5758ccc28180b0f8"
  },
  {
    "url": "/rap-tap-app/static/pages/index.c4f8776ebd690cb0f2fd.js",
    "revision": "77ee7fc52e1f0807cac5859b88e3407e"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.8962dd59cc33ef6825d5.js",
    "revision": "61842e33a853e83637216705b4f33ab7"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.8003507e90243f35b93d.js",
    "revision": "cd7865d896c941909e8e5ea062cf3982"
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

workbox.routing.registerRoute(new RegExp('(?:.png|.gif|.jpg|.jpeg|.svg)$'), workbox.strategies.cacheFirst({"cacheExpiration":{"maxEntries":60,"maxAgeSeconds":2592000}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://6llw9ziqp5.execute-api.ap-northeast-1.amazonaws.com/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





