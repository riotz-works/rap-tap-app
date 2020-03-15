importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.644576d5447a9ba672b5.js",
    "revision": "3339569c93cfe6136582312defca9a73"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.5bcd47d05d511afc98fe.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.544f34a1434202f69a3f.js",
    "revision": "98388b16f6ecd5589410253920bfa475"
  },
  {
    "url": "/rap-tap-app/static/pages/about.eee9a663e359be0a91da.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.b7aed1be0b3468f88e07.js",
    "revision": "dbfcbd1227e42abdb6c2cb2c4eafd946"
  },
  {
    "url": "/rap-tap-app/static/pages/host.9394e9288ceb6db0dc1d.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.aaf2cf7b12156685d45a.js",
    "revision": "772f2d0ac85a23696f1c8eab57cae131"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.35c712cb13fe696e8764.js",
    "revision": "9e82b7861f69a885709fd0f875ca1209"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.33afb1132b795518b1b7.js",
    "revision": "8aa630f871acc8818a3d58e7bd967cf5"
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





