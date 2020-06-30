importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.d316f19.js",
    "revision": "cc36320139975e2467a7202586e1449f"
  },
  {
    "url": "/rap-tap-app/static/commons.app.c396181.js",
    "revision": "9806ab06596c0d0315e2189f1edb8f98"
  },
  {
    "url": "/rap-tap-app/static/pages/about.dd6ddf3.js",
    "revision": "832bbf2b0d48eaa50760e4ca36d85e4a"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.7fa176f.js",
    "revision": "fc063400a8c28503ad3fcf11006c55ab"
  },
  {
    "url": "/rap-tap-app/static/pages/host.a1667cc.js",
    "revision": "d2fabc5802c448248ce19097fde6711b"
  },
  {
    "url": "/rap-tap-app/static/pages/index.f6dbe0d.js",
    "revision": "7f986471d3916951954b7cf430350a77"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.8911642.js",
    "revision": "342d23be54ec799e899ec44284e9d340"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.492d341.js",
    "revision": "5298b34d383104587ae947f2c3f1f75f"
  },
  {
    "url": "/rap-tap-app/static/runtime.512055e.js",
    "revision": "3871dd09c0af2478afa22d46a9be3e6a"
  },
  {
    "url": "/rap-tap-app/static/vendors.app.f808abe.js",
    "revision": "fd48b0baa0ce2a155ab8710d6cce315a"
  },
  {
    "url": "/rap-tap-app/static/vendors.pages/enter.pages/index.pages/room/rapper.pages/room/watcher.b9d0d38.js",
    "revision": "61202c9723c3c383f58216ca58e16b48"
  },
  {
    "url": "/rap-tap-app/static/vendors.pages/host.6e72678.js",
    "revision": "b79e73c6a42face623ad0926e300bf8a"
  },
  {
    "url": "/rap-tap-app/static/vendors.pages/room/rapper.pages/room/watcher.74aa897.js",
    "revision": "7566aa1dc8f2cbd450073a29c60f956e"
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
