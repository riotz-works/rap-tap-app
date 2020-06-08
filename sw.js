importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.c5e9ac9dce01baa8df36.js",
    "revision": "3edaa9c256e5e184781055fb5edf340d"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.aae57794fc30fc99f73f.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.09738dee825c793ebd07.js",
    "revision": "416f7ac14ffef5f04400e0070eded800"
  },
  {
    "url": "/rap-tap-app/static/pages/about.eee20c58ccddd330615d.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.afdba6518de1853cf482.js",
    "revision": "2953bafec05bae9a7efb5fb84cdb6f27"
  },
  {
    "url": "/rap-tap-app/static/pages/host.3995cd8f6337e417c59a.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.accab1da6ac6e32438de.js",
    "revision": "273da1015cc7fcf4f8695e46a6ab2de3"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.db4a362693171ff4ecdd.js",
    "revision": "099972168421cd2f05ab0c84fd128d5d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.88fe40c359edfcae19f0.js",
    "revision": "8a9ec143ec0519ffaaf9cf1e353db016"
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





