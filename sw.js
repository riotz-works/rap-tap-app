importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.91ef1c23895bb83ffa3c.js",
    "revision": "6cfcb2c8f772724e0bd6349b7c89d14c"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.62a06186122964fcdbfd.js",
    "revision": "70b9a61776266a6175978be564ac287b"
  },
  {
    "url": "/rap-tap-app/static/manifest.c77d7e475febf9f52902.js",
    "revision": "0423f8deaf004a29d0be142e409ed434"
  },
  {
    "url": "/rap-tap-app/static/pages/about.46400de8106c79f2ba61.js",
    "revision": "1cd1bebf5a88663cd3f0e941c890ebb9"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.ecbf4cb4e13b670de3fd.js",
    "revision": "ce32ab8d3a87cdfc7451024041887e26"
  },
  {
    "url": "/rap-tap-app/static/pages/host.41b2cbce400983ee6357.js",
    "revision": "8692f5a073f6cb18b57db74146cb80bb"
  },
  {
    "url": "/rap-tap-app/static/pages/index.cc7fd7450a7a55a4eb17.js",
    "revision": "b7feb7fe390956873ffbb2eaaba2b4c9"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.90b8f75f7adcf4c3e0a6.js",
    "revision": "81c417f13d05d7703786c59616710f4c"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.c977a345a7031a9af869.js",
    "revision": "5c80924f5d8fa7ae5041b82dfe007559"
  },
  {
    "url": "/rap-tap-app/static/vendor.dd46d48c30d8f32ec01a.js",
    "revision": "edf7ca2c8eecd3bc32217cda7f076f45"
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





