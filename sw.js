importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.47f36f5.js",
    "revision": "d5e8bb512073e53de0afb18073de27bc"
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
    "url": "/rap-tap-app/static/pages/host.fc7e76e.js",
    "revision": "c523690d5573e1bae3e96dbba5f3c16e"
  },
  {
    "url": "/rap-tap-app/static/pages/index.ca073d9.js",
    "revision": "14a7c5e8fd4ea8fca04c2a25040b6dff"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.4087902.js",
    "revision": "c7aa32d9206b7be9c4fd3e0689b62fa8"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.c893f70.js",
    "revision": "2e6c489981fd4c341f21daad8f1b9e6f"
  },
  {
    "url": "/rap-tap-app/static/runtime.eb4d519.js",
    "revision": "cfb03910ae9d6b1f3b35610809f87a15"
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
