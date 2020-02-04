importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.0fe0166809776da792c8.js",
    "revision": "5106fac030ea1c8ba8ec715e6f755df8"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.3fe2d8261bcf87560be6.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.c30dda6f7a17f77b54d6.js",
    "revision": "633fcb376a2d1a2d9021ede5c9aa3b24"
  },
  {
    "url": "/rap-tap-app/static/pages/about.7bca81c24d323652b9b1.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.8627c8e0d537c8909497.js",
    "revision": "6bbeb7891c44ec25ecf72067adc23911"
  },
  {
    "url": "/rap-tap-app/static/pages/host.4ca874803fb294ef5405.js",
    "revision": "9ef3e8bff56fdc27c850a8192a35183d"
  },
  {
    "url": "/rap-tap-app/static/pages/index.756ee89f061ad0dc64ee.js",
    "revision": "d36f0d8f5e3f0b7c6b7a5396bea66a66"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.42df75d56f142254143a.js",
    "revision": "0cb3f75c0d2cd72de03bc66561800273"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.d58e188e1970fa7fca88.js",
    "revision": "d5bd6e238a9c28f16d6d7d4e1ca60ed2"
  },
  {
    "url": "/rap-tap-app/static/vendor.b16acb626bdb8bfd416b.js",
    "revision": "6f93d20749d49961ca6d1d1b30579bac"
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





