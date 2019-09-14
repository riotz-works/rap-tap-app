importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.c11f95bbf8d4ff3d5872.js",
    "revision": "e467dcc7e28587696baa6da12b2778f2"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.85797f9bf0a2b108bbe6.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.5eed3ba2baf156e58082.js",
    "revision": "41a7d2bebd9ff5c2d7049767e33a2af1"
  },
  {
    "url": "/rap-tap-app/static/pages/about.fccfe657b372ed57feee.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.cd14023b753fb386391e.js",
    "revision": "b67fc9dc194322e42a32a5532e838959"
  },
  {
    "url": "/rap-tap-app/static/pages/host.7d4ef49ba024acf9a084.js",
    "revision": "dae93b2a64d4d7bc7d5da3702723508a"
  },
  {
    "url": "/rap-tap-app/static/pages/index.21cf91e524439fe26e43.js",
    "revision": "7495164734bca32a1e76010f314bcb4f"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.7aedcb285b7b5a5a9d87.js",
    "revision": "861ea088caa332bdacdca3fbdea5465e"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.de692c1415e580f254cd.js",
    "revision": "6b19b7f8fda37008eee057c778d24588"
  },
  {
    "url": "/rap-tap-app/static/vendor.4520302cd135140617cf.js",
    "revision": "66741501b06439affa6ae602ca7717ee"
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





