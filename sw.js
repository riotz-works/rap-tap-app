importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.1751ddeca295d7ca6e45.js",
    "revision": "94c902bda40deb3d321eefc37def4bc1"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.f7cb50d860f80bf1ed38.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.283b2cfef9c1c173cafb.js",
    "revision": "6a1e7581f9a9f0f5122d50ddf755e6df"
  },
  {
    "url": "/rap-tap-app/static/pages/about.c5e44cd88009d9c22d24.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.853434b2a7c769a8da61.js",
    "revision": "04a15a53a26b147fffbfc20eed884805"
  },
  {
    "url": "/rap-tap-app/static/pages/host.9c472f95166236ac7d0c.js",
    "revision": "9ef3e8bff56fdc27c850a8192a35183d"
  },
  {
    "url": "/rap-tap-app/static/pages/index.6dad15694cb13d0b6fe6.js",
    "revision": "9748885060265bc48aa7f7d270487593"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.5899ed72061f5e73b665.js",
    "revision": "3822ce7398b6c363a5a5f0ddc05643f6"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.939a7ff4fbc627f65ad7.js",
    "revision": "955ab8754218d0bbe19bb3567923e96b"
  },
  {
    "url": "/rap-tap-app/static/vendor.ea7adbafffb0e3a77901.js",
    "revision": "de413f8dc0769c16ce42ca1dfcf037c6"
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





