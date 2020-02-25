importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.191f554f88359b7f56e2.js",
    "revision": "9621551923b7378361efcdb62c352a89"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.e47236f6f78751634841.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.e8a2396c30dcc1a2c4aa.js",
    "revision": "c454b413ce553c0df98455e959938d8f"
  },
  {
    "url": "/rap-tap-app/static/pages/about.e92ef89cc88acb68d2e3.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.e9590c1fbc8cee0aaf83.js",
    "revision": "16e7d7b5bbc758749389b103ff7a2cad"
  },
  {
    "url": "/rap-tap-app/static/pages/host.1d499dceeb1b298bb49a.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.4e0450f9724777e15e6d.js",
    "revision": "ec480211a52bfc2130a925aa27d54436"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.e97ff1174dd71583abf0.js",
    "revision": "be11c04db553d0f7ce14a619eee45d2d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.d192e12a16463e8f2831.js",
    "revision": "e4cdb08c9cf9a77064bfe959640829d9"
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





