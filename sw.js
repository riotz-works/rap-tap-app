importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.7271c2aa6505a690f0ac.js",
    "revision": "208473a94ec2f6b77158896bb633d426"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.e47236f6f78751634841.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.215be5567292ce10f954.js",
    "revision": "616cac527a68f41ec734b2da048aa779"
  },
  {
    "url": "/rap-tap-app/static/pages/about.e92ef89cc88acb68d2e3.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.b3e26077671a7bc6a282.js",
    "revision": "3ffe0bbf5404a67e95e56ad3517b8529"
  },
  {
    "url": "/rap-tap-app/static/pages/host.1d499dceeb1b298bb49a.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.f8a2b141b6a77f2eefff.js",
    "revision": "d969b0d0dd2aea05ae90df791ddc191d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.f41c3ff901ae9a00126b.js",
    "revision": "03856a4c6abc0a54bc5426cac2232cdb"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.b2fb2d0618bbc4842fe1.js",
    "revision": "40001af24db15a6569188e4b83e795ec"
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





