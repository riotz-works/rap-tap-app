importScripts('/rap-tap-app/static/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.ec6bbd6b234c3186ad32.js",
    "revision": "3081a715cfe3a6eecfd4c672511cba17"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.8919193f117bad6e20e6.js",
    "revision": "6a89e643089ee5ec7cbc409be1e2f394"
  },
  {
    "url": "/rap-tap-app/static/manifest.2aee9fd8fab8ed426ce7.js",
    "revision": "3e5716a31ada8f3be325788d3744481d"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b56cd86b0edfc38cf367.js",
    "revision": "97ae98bb84cac6807ac81b9786171d2d"
  },
  {
    "url": "/rap-tap-app/static/pages/index.810d4974d1f8b84710bc.js",
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





