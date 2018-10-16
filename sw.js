importScripts('/rap-tap-app/static/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.549ac9067dfefef5ca65.js",
    "revision": "20e2b175e88dc9c413f4b0badaf98402"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.fb473685444c899be733.js",
    "revision": "5ba11d55134ec4d7b37711ebe157e4a9"
  },
  {
    "url": "/rap-tap-app/static/manifest.4ff845a03a3049a9a436.js",
    "revision": "374323554c5269567c1ed927b4a5a794"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b5d3673a063aa9ff4930.js",
    "revision": "63272597ac3afa4065b6faa22ae79ac5"
  },
  {
    "url": "/rap-tap-app/static/pages/index.d5ac7eae2f3e9473521b.js",
    "revision": "92e95990b7ae29a654b2adf22aef12ae"
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





