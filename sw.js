importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.39f2c0b4da14414c28c9.js",
    "revision": "853c3ce6cc0df87f716a48091caa8657"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.f7cb50d860f80bf1ed38.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.a6bcb16dab835c2892b7.js",
    "revision": "62a4b964be3b23aa0ee73bf2d8ec80d1"
  },
  {
    "url": "/rap-tap-app/static/pages/about.c5e44cd88009d9c22d24.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.647fc0bd8ae38f70b3f5.js",
    "revision": "4e28fe20982c8466afef89a318354c8f"
  },
  {
    "url": "/rap-tap-app/static/pages/host.9c472f95166236ac7d0c.js",
    "revision": "9ef3e8bff56fdc27c850a8192a35183d"
  },
  {
    "url": "/rap-tap-app/static/pages/index.ef890136d69bb6fcc952.js",
    "revision": "8178d95a142e551baa76e7511910770a"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.14de615124e3c81ca565.js",
    "revision": "f9a02731acd55a6ba4977588f921ec0c"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.09de008f8bb5b2322b76.js",
    "revision": "65fda1374fbad6e20cfd468d9452031a"
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





