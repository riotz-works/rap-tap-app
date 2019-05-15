importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.e310b078e8ac87b92250.js",
    "revision": "db9aa699f7a5e11132b7d7abf1f6c1e7"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.317ab608734abaa1f044.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.583318082d7fdc8a31f0.js",
    "revision": "d21ee4ec79545ab679221b48f2473a65"
  },
  {
    "url": "/rap-tap-app/static/pages/about.3f5df1e638e911039951.js",
    "revision": "ddf33465e1c163dc15d0a347c0e7c249"
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
    "url": "/rap-tap-app/static/pages/index.6f5ef0a003a32fb1b3fb.js",
    "revision": "23cefa92a55b14a02acdc3af42c9de3d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.b7777ed491d5d0167d2c.js",
    "revision": "65c113c43df36f267876009881b009c2"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.7b74f150781cd62b733f.js",
    "revision": "44e83cf9b613925980ae62c76a93ee82"
  },
  {
    "url": "/rap-tap-app/static/vendor.4691131cc4c6b1de6c19.js",
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

workbox.routing.registerRoute(new RegExp('https://6llw9ziqp5.execute-api.ap-northeast-1/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





