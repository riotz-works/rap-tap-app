importScripts('/rap-tap-app/static/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.ab974b0bf228069184f8.js",
    "revision": "d1d0d187b1f77dbbd8a1a5378d23de58"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.957e86aab7dd8b031f11.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.792cde18975fe3858de8.js",
    "revision": "73e11d8111440e1e391e43bb6445b085"
  },
  {
    "url": "/rap-tap-app/static/pages/about.5de71f9403198fa52518.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.4a5d04d79a61f9c6faac.js",
    "revision": "7af931f05b3156ad9afde0b4f18d573b"
  },
  {
    "url": "/rap-tap-app/static/pages/host.44ac2a7af90eddc54d59.js",
    "revision": "00ff1a1c974cd33cb7d716e70e462461"
  },
  {
    "url": "/rap-tap-app/static/pages/index.df9908ddef271e109616.js",
    "revision": "8eecd5ee5f9b89548869c222558d6e11"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.909a567f528cc0096b70.js",
    "revision": "d102a61a22b079c2019733a83fd1358d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.fa3c957d0110aab24019.js",
    "revision": "3211ce44cc4a70c2f42d691c98c051d9"
  },
  {
    "url": "/rap-tap-app/static/vendor.029213348089b39ef627.js",
    "revision": "135613ea188ef36db9fb775480042f92"
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





