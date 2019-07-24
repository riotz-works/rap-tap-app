importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.3f48b4dd63ac6f1ef029.js",
    "revision": "c1d2cbba586b7f02c6d65fd79c3e9b7b"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.8d908eac2f7baf585fd0.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.ae0ef4fc323525842ab4.js",
    "revision": "79ea9614ab1d257bbf132c76882ac0ef"
  },
  {
    "url": "/rap-tap-app/static/pages/about.114c21626c875c1bcbdb.js",
    "revision": "529d769d23131e9df29001381d95f535"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.b29fa79545ad9fcda1b2.js",
    "revision": "e97abba69491e320f49a7300daab5bb5"
  },
  {
    "url": "/rap-tap-app/static/pages/host.0e16b2193856590fec95.js",
    "revision": "dae93b2a64d4d7bc7d5da3702723508a"
  },
  {
    "url": "/rap-tap-app/static/pages/index.6c576032d425930a6f88.js",
    "revision": "0d95f99c6b480dd1f2b26c19fc65d3bb"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.ff0c33a70b9f4dac14f4.js",
    "revision": "ddb4afe418a526c03a938bed27fe2e6b"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.f95a83e8580e97b65bf0.js",
    "revision": "135a5a2bb2e250e327aeea4f9480de59"
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





