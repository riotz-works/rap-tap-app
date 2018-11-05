importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.94bbac8d0ff39ef3fe0c.js",
    "revision": "7371192fa073ef75d6e8bef55baf712a"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.957e86aab7dd8b031f11.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.b3559e65d633a75c8646.js",
    "revision": "85507ebc2ec9b1964cb3206fb152124c"
  },
  {
    "url": "/rap-tap-app/static/pages/about.5de71f9403198fa52518.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.d8e94594bed66ebdc586.js",
    "revision": "a31e2de7abc5a894d2ddfd194bbc1406"
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
    "url": "/rap-tap-app/static/pages/room/rapper.96bfac9946e34192df3b.js",
    "revision": "7f2a59caeafaff9072f6c5466871b9bf"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.f9c308154eeb8b4dedb8.js",
    "revision": "eda6c86a39950a9ee6da241bd2bed2be"
  },
  {
    "url": "/rap-tap-app/static/vendor.036c02dddfe6630d417a.js",
    "revision": "4f256545501ea4d72b2bc8b15aea3646"
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





