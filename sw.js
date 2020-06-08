importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.55a81461596c2b14ba43.js",
    "revision": "03c69ff109e7f24c0f890d10a967acc5"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.e0525ce5749e1923d26c.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.7aa3588be893c4218326.js",
    "revision": "0624f4ddbc8981d10e8634e4ade10fb3"
  },
  {
    "url": "/rap-tap-app/static/pages/about.d00c4c686b86747b2660.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.cd0f3852991e0f31f981.js",
    "revision": "5e7ae050888b5950d73d3e4290e4ee6c"
  },
  {
    "url": "/rap-tap-app/static/pages/host.3c18b6210e99ab80a5f3.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.7554db84aa46eb50a307.js",
    "revision": "c454880ea48b57d69862c8bcf7613b5f"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.3edcbb1a14425a4b98a2.js",
    "revision": "5f1000cd65e2e4a4c7ed0b0ea4ad98ed"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.4ffd6d1204c4510c3147.js",
    "revision": "4ecf7d75165587aacf86613efcaf4007"
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





