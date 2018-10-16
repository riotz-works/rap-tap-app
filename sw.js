importScripts('/rap-tap-app/static/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.da007facfbe4ddf0b3a7.js",
    "revision": "23e35469445b6cc3dba705a0842b859b"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.fea183ceea22ec38efdc.js",
    "revision": "6a89e643089ee5ec7cbc409be1e2f394"
  },
  {
    "url": "/rap-tap-app/static/manifest.890fd1c3c7bc6bb7031a.js",
    "revision": "f7ca7106ec3f6e22009f4e2bafb22e95"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b5d3673a063aa9ff4930.js",
    "revision": "63272597ac3afa4065b6faa22ae79ac5"
  },
  {
    "url": "/rap-tap-app/static/pages/index.cd0a03a144243751e78a.js",
    "revision": "c04d55e72feb2722035b5b7267668bcc"
  },
  {
    "url": "/rap-tap-app/static/vendor.22f8107c53a68c9afa48.js",
    "revision": "4e11b9111f315f4685bf5678126263b1"
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





