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
    "url": "/rap-tap-app/static/manifest.abce6d99555c39156718.js",
    "revision": "92a77effa14c1d72d9461fd65bfdb250"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b6a699a42550eb8da488.js",
    "revision": "736e620878af5b613859d67ab407a21f"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.6531a8cf8e391e496507.js",
    "revision": "5c685e7a386a46f5884d88496e0497a3"
  },
  {
    "url": "/rap-tap-app/static/pages/host.1659e06d05e4b88ba47e.js",
    "revision": "1865bef61494add3238e3d36a63ecf07"
  },
  {
    "url": "/rap-tap-app/static/pages/index.e669db8998fcb205185e.js",
    "revision": "281c0fecf00b1a13297931db1882da10"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.611b636bf1f4154258e4.js",
    "revision": "ebafae92a31032f960498fd1479356a5"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.030fed3d14d1d7b01086.js",
    "revision": "4fdec53226669c4a2c1a4a8b20fa713d"
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





