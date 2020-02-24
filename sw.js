importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.46909df3f61f4bbd73ae.js",
    "revision": "2d2a005328456e061d941ed45bc2ba44"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.e47236f6f78751634841.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.056c3984a948b1616385.js",
    "revision": "9b862f575ef4a37105d01d4767444240"
  },
  {
    "url": "/rap-tap-app/static/pages/about.e92ef89cc88acb68d2e3.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.e4d1174a803e5e223337.js",
    "revision": "7fefc127e16ce8ae3c9f1934211e4879"
  },
  {
    "url": "/rap-tap-app/static/pages/host.1d499dceeb1b298bb49a.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.a5ffcec23d41caf71fcd.js",
    "revision": "d9ec5c627bc516822cc7b2d0cf63d2f4"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.fe8f18ffc239c447c30c.js",
    "revision": "2aedfc9fc21f2d9e937bca10b35e4f9f"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.a7fd0dd715b2c203c0a2.js",
    "revision": "6486fc57fb99f167ed02beec7ea70f28"
  },
  {
    "url": "/rap-tap-app/static/vendor.3ff17577d0aa45def7ac.js",
    "revision": "a0fc7bd70cc02fae93858b38fbed3850"
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





