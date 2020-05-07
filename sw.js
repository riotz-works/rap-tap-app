importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.52c845f747de1149d6e1.js",
    "revision": "ee642372ba6ece050daf08e936e63f28"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.3dec328dab68a4e6eeb9.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.535f6e194190bf9471b5.js",
    "revision": "cb88ab5307af455c216a0703e593d3b0"
  },
  {
    "url": "/rap-tap-app/static/pages/about.4b094921b5d6508ec037.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.17acd4ccb430c5ec587d.js",
    "revision": "8622b7d611ca020d3defde2ac79450c4"
  },
  {
    "url": "/rap-tap-app/static/pages/host.3f8d2a3a1129cee5edba.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.9bea2e9958917b1b6c31.js",
    "revision": "9745a73d2a6216d213ceb5bf07c61568"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.a470b7d77687df8438c0.js",
    "revision": "83b0c75f614f2fef25bd872826d4138e"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.20aec6795d5e7cb8fe8d.js",
    "revision": "eb8845d65ad342ba95273cb4b99405be"
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





