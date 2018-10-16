importScripts('/rap-tap-app/static/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.5534fa8fdb3a4117ab7b.js",
    "revision": "c5837d2632508ef12e1e668b04e470bd"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.fa05af67111c9477d30a.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.2d6e409190cade8b4c6d.js",
    "revision": "a0bf957f9bf9e578e4980c77ea15d616"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b6a699a42550eb8da488.js",
    "revision": "736e620878af5b613859d67ab407a21f"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.6728f57f2f5983ab4ebf.js",
    "revision": "2cadd860ad57cd86d41f1beb6b301ee1"
  },
  {
    "url": "/rap-tap-app/static/pages/host.f64cb90e36e5b5800be0.js",
    "revision": "f3fb57290b3e07bb92a6cb00fe56b562"
  },
  {
    "url": "/rap-tap-app/static/pages/index.7304c14396f0e1c59675.js",
    "revision": "38430a0ba5b78cc50d126893a341e9d6"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.47d059ce3e90c91bfc4c.js",
    "revision": "e597d27c16ce6a3cc0f0ff74370de307"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.933ea86096710aa0dca9.js",
    "revision": "8b84bcb322b0e930f6b4ed66a7753b36"
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

workbox.routing.registerRoute(new RegExp('undefined/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





