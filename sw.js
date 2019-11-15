importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.103c1e134d4c50f3dc70.js",
    "revision": "f6036ece02e0586e02c41ada645dcec7"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.1144655d8cdd258a0a9b.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.f53e9fd4a0947010f9d7.js",
    "revision": "df073883e2954eae89356d58b715b357"
  },
  {
    "url": "/rap-tap-app/static/pages/about.10a591e2a8ef9ad76a35.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.24a4bd857ae1ca8706c0.js",
    "revision": "f05c8537207b2ae844acdb258e7498f2"
  },
  {
    "url": "/rap-tap-app/static/pages/host.23035beb8429a7f25aed.js",
    "revision": "9ef3e8bff56fdc27c850a8192a35183d"
  },
  {
    "url": "/rap-tap-app/static/pages/index.48a01e69f60694f41ca6.js",
    "revision": "9e1eacad95fc29a858518a22422b57a1"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.3eff60367794a0da7db5.js",
    "revision": "06fc8f67224071cbd55f5c037d17dbe5"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.905faed37985616cb1ca.js",
    "revision": "d550b21505fb692cf445b008ee46657d"
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





