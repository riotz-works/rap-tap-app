importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.bc89d59.js",
    "revision": "532ce71dde24df466cde7f55304c979e"
  },
  {
    "url": "/rap-tap-app/static/commons.app.b2058c4.js",
    "revision": "d161df137c842fea9a494763e6ec75de"
  },
  {
    "url": "/rap-tap-app/static/pages/about.87564ae.js",
    "revision": "66ab7ee2bf7cfbec00784432b27a5219"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.34bdfda.js",
    "revision": "b875527dc910982cac4ab86df56b60d6"
  },
  {
    "url": "/rap-tap-app/static/pages/host.290a247.js",
    "revision": "3f3594fc2e93ef67626af72dff11c17b"
  },
  {
    "url": "/rap-tap-app/static/pages/index.6014253.js",
    "revision": "2f4156663afc3ead79bff15c58080828"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.ce8babb.js",
    "revision": "1e685e2a8a38172db543ac16956e92e9"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.242a3ad.js",
    "revision": "36b947444d87dd2c618fbaeb4a160815"
  },
  {
    "url": "/rap-tap-app/static/runtime.919da0e.js",
    "revision": "280ea661fd25e642a99fb233decfce54"
  },
  {
    "url": "/rap-tap-app/static/vendors.app.c5b57b3.js",
    "revision": "719099ba125a346538482e7d52f159ca"
  },
  {
    "url": "/rap-tap-app/static/vendors.pages/enter.pages/index.pages/room/rapper.pages/room/watcher.2da2c77.js",
    "revision": "eb6d2ff2a47aa716f3f363058b7302ca"
  },
  {
    "url": "/rap-tap-app/static/vendors.pages/host.dfa41b1.js",
    "revision": "a3efded57adfe8fc1b2e009f856e26ce"
  },
  {
    "url": "/rap-tap-app/static/vendors.pages/room/rapper.pages/room/watcher.624a26f.js",
    "revision": "426bca99e20022d602e04e980611ae42"
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
