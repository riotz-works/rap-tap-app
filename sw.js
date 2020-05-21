importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.1cee68fae65fb2c35d71.js",
    "revision": "a746d3a76be01dcbdac8efae991e0b60"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.b6868ef9f52dd51e845b.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.42ca176bfdac743a559b.js",
    "revision": "c0ab0cfe2a27ac113775932bdcbec3c2"
  },
  {
    "url": "/rap-tap-app/static/pages/about.b2694edb374bcb63371c.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.ce3c36fce4563548d1e4.js",
    "revision": "f9d5e547f1bff4684b3abc732905715e"
  },
  {
    "url": "/rap-tap-app/static/pages/host.92cb885a7eb3dd15ff32.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.184e520685a9db7da562.js",
    "revision": "efa2a5118a3ad9e584c823e2c630b53f"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.1b189a2478e594432d8c.js",
    "revision": "c8ab30febe0347f413f2eb0d6fea9017"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.1a8ecc627503f49b61cf.js",
    "revision": "3a494c8b6635f10404af3926a7af89e7"
  },
  {
    "url": "/rap-tap-app/static/vendor.dd46d48c30d8f32ec01a.js",
    "revision": "edf7ca2c8eecd3bc32217cda7f076f45"
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





