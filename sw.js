importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.63984f45a004e9e7bc2e.js",
    "revision": "ccd110688e583381d0c072fcfdf2acaf"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.aae57794fc30fc99f73f.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.c91e3919414970b86172.js",
    "revision": "2b2d3395ec49156699113a5812b4ee9d"
  },
  {
    "url": "/rap-tap-app/static/pages/about.eee20c58ccddd330615d.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.67363b484097440fd16c.js",
    "revision": "f9d5e547f1bff4684b3abc732905715e"
  },
  {
    "url": "/rap-tap-app/static/pages/host.3995cd8f6337e417c59a.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.dfd31d79044f2b86098f.js",
    "revision": "efa2a5118a3ad9e584c823e2c630b53f"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.a6f879bb0f472785a179.js",
    "revision": "c8ab30febe0347f413f2eb0d6fea9017"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.5495d33e0f9cc95646ed.js",
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





