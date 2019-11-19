importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.fb4e52315fd32cbb843e.js",
    "revision": "25ccff95649b02b81e6ffec1834f4fca"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.f7cb50d860f80bf1ed38.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.aebfa9c527aec9b373a7.js",
    "revision": "f45223b502e3d93dc52798b7b7c8c4d3"
  },
  {
    "url": "/rap-tap-app/static/pages/about.c5e44cd88009d9c22d24.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.9c8b4c7f44b4011348d6.js",
    "revision": "f05c8537207b2ae844acdb258e7498f2"
  },
  {
    "url": "/rap-tap-app/static/pages/host.9c472f95166236ac7d0c.js",
    "revision": "9ef3e8bff56fdc27c850a8192a35183d"
  },
  {
    "url": "/rap-tap-app/static/pages/index.f79e33fcad1d85496108.js",
    "revision": "9e1eacad95fc29a858518a22422b57a1"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.64583d48dcbce02f520e.js",
    "revision": "06fc8f67224071cbd55f5c037d17dbe5"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.8d524e5bca5179ffd875.js",
    "revision": "d550b21505fb692cf445b008ee46657d"
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





