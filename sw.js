importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.c6885793148e2e4cf155.js",
    "revision": "a4ab25806a64a87dcd6e440eaf19a028"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.331b3bc8b98e740b01fa.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.a858250fcf17dab4fe0d.js",
    "revision": "19ccc1a819e5efb984f5ca2af1037c93"
  },
  {
    "url": "/rap-tap-app/static/pages/about.22be13245b654e79aa69.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.abbdcf070382c4d49cc0.js",
    "revision": "e4b3f4bfab73c53aaf6911584f3fca90"
  },
  {
    "url": "/rap-tap-app/static/pages/host.b903f77bdb36b854f860.js",
    "revision": "dae93b2a64d4d7bc7d5da3702723508a"
  },
  {
    "url": "/rap-tap-app/static/pages/index.223fb7516fc91a73f7d2.js",
    "revision": "16f3c4b50a577f24f954bc1ff4e30320"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.e7aeb7f42d7ab1d954a8.js",
    "revision": "70394ea9a911e02340532a3afc182497"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.cb5fa4130519c8711e1c.js",
    "revision": "2f5171c1ea608ece970ef4aa9aceb4ff"
  },
  {
    "url": "/rap-tap-app/static/vendor.4520302cd135140617cf.js",
    "revision": "66741501b06439affa6ae602ca7717ee"
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





