importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.98e46e08e4d961953fdc.js",
    "revision": "37a9873011fa1fb3da64be789512087f"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.5bcd47d05d511afc98fe.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.ebec3b7b951c6c75f336.js",
    "revision": "644fd76580176b288990d539abbb71b3"
  },
  {
    "url": "/rap-tap-app/static/pages/about.eee9a663e359be0a91da.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.cd39ea3d4330826bb128.js",
    "revision": "d5fd25c23781aca5aa2f34ff545c1704"
  },
  {
    "url": "/rap-tap-app/static/pages/host.9394e9288ceb6db0dc1d.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.eccb23ffe6c36f75f5c2.js",
    "revision": "7c070768df043535e8bc42f6084bdc76"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.896c2624a1bda1d9856e.js",
    "revision": "9d0634c5cdcd7ce7dab9f6448dc548b8"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.e957ca34dfbab963c63c.js",
    "revision": "e29d7425868b304b055a9c764144dbeb"
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





