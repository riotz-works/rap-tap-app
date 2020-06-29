importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.bc012b7.js",
    "revision": "e59bd9eea1b0254015fe5dff73f2e27d"
  },
  {
    "url": "/rap-tap-app/static/commons.app.b083936.js",
    "revision": "98773e9b703ab79c5e1519a7dc9b9675"
  },
  {
    "url": "/rap-tap-app/static/pages/about.7530324.js",
    "revision": "5f62d895f440004125f148e5a43d331f"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.619608c.js",
    "revision": "86d55c621aea29906ed38d193c26158b"
  },
  {
    "url": "/rap-tap-app/static/pages/host.71a453a.js",
    "revision": "9147c571fe849c74eb579876f57e4c54"
  },
  {
    "url": "/rap-tap-app/static/pages/index.ab278e3.js",
    "revision": "a131b63c91d46f8d6fcf5944fb243699"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.ab61d95.js",
    "revision": "de85bb3496de8abee8f9be4687421496"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.ac26278.js",
    "revision": "44ca98b8a498b33fb17e6bca65e4c779"
  },
  {
    "url": "/rap-tap-app/static/runtime.8f86dd5.js",
    "revision": "8fd99664326efac2276d978d32ff7458"
  },
  {
    "url": "/rap-tap-app/static/vendors.app.a4cfbdb.js",
    "revision": "beb0c5e35a40b65dbd6e1db9f993b2b1"
  },
  {
    "url": "/rap-tap-app/static/vendors.pages/enter.pages/index.pages/room/rapper.pages/room/watcher.5fe9218.js",
    "revision": "6e5f9b13651206fc5965aa9269c2d5d8"
  },
  {
    "url": "/rap-tap-app/static/vendors.pages/host.be855a8.js",
    "revision": "a33cd7a9d5774b516f151684a93d127b"
  },
  {
    "url": "/rap-tap-app/static/vendors.pages/room/rapper.pages/room/watcher.681c75a.js",
    "revision": "9b4faf08295aa7c86ffc1ca1cd6ba2e1"
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
