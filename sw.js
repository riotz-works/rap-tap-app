importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.c4d4ad76abda093b1425.js",
    "revision": "cd06a302b3885fbd8746650e12474b75"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.317ab608734abaa1f044.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.58c832fee8979a4596da.js",
    "revision": "cf9d7cfa478b55ee969cad741cf0ce84"
  },
  {
    "url": "/rap-tap-app/static/pages/about.fc8737e0f7f5f0974b2d.js",
    "revision": "43e1f3b3c8b5a52e16a1989d5c1cdec0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.053f4c1da275081424e6.js",
    "revision": "107d57136e88b49fe60221aa916eef26"
  },
  {
    "url": "/rap-tap-app/static/pages/host.40424fc75d111cf4994b.js",
    "revision": "6965f9aa8f9323a75e205311512736e7"
  },
  {
    "url": "/rap-tap-app/static/pages/index.1691079965f989943ca8.js",
    "revision": "0d4b95ff8e43636a5b4ade532b02ab24"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.fcdddae01d87ece020d8.js",
    "revision": "185eeb4fb02fb083be35b0c9f61d096f"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.fe7cbf9d09a79dfb7250.js",
    "revision": "d73a8961f60bd5741fe94098da827da7"
  },
  {
    "url": "/rap-tap-app/static/vendor.0f9f86d223f713ee390a.js",
    "revision": "a48f37f00c6a23cc446421104078c46a"
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





