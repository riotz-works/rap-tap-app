importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.67e6ee7a643ab7698fff.js",
    "revision": "b779239d21a4ab8f276f95afea7ae86a"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.a8913b25accd1c9e84b4.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.05e717f45f613dcf5149.js",
    "revision": "6a288efb10faccce9f308ef725f62503"
  },
  {
    "url": "/rap-tap-app/static/pages/about.3bf7302cec63e724c98d.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.710f595ff97117a58fb1.js",
    "revision": "d67f3bde15ff59f1b32f7e2a53f7cd1a"
  },
  {
    "url": "/rap-tap-app/static/pages/host.5e24ea952a396f9445b8.js",
    "revision": "ea4fe794484bf4da5a2ee420439925e1"
  },
  {
    "url": "/rap-tap-app/static/pages/index.fc7631bade3625200889.js",
    "revision": "69d7da03468df3ce545d44d670b4a702"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.d750301084182352c7b6.js",
    "revision": "25a51533efb865d03001ad7627f3efe8"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.49fbe94353251a3acee6.js",
    "revision": "a747143f8c94d93a9a3543e4f9b2f013"
  },
  {
    "url": "/rap-tap-app/static/vendor.90831afbcfb3c7075a30.js",
    "revision": "9b4febe1bcbc66ecab5116546021b645"
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

workbox.routing.registerRoute(new RegExp('https://ra0izso5i7.execute-api.us-west-2.amazonaws.com/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





