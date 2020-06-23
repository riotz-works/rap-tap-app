importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.b4166f2d221d85f2398a.js",
    "revision": "45c01fb6c5c9ffab3fc1711988d61059"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.2ad477e133637c2d6180.js",
    "revision": "4ccd1193ed7d8a0926e3288a8728de30"
  },
  {
    "url": "/rap-tap-app/static/manifest.af56f83bd4df0a5745dd.js",
    "revision": "fd82061a6792e814d33c8e207958099c"
  },
  {
    "url": "/rap-tap-app/static/pages/about.3cae0d71b7cdcf21467a.js",
    "revision": "b7be38182f3a5ccd298cfdf67de5d546"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.541e2efb96943c66eb46.js",
    "revision": "0b04c2d6765c3145e06ee8b1a56d8799"
  },
  {
    "url": "/rap-tap-app/static/pages/host.acacbedcc006def5c448.js",
    "revision": "68b7c27760b030dd5758ccc28180b0f8"
  },
  {
    "url": "/rap-tap-app/static/pages/index.63855ecda5a35d422553.js",
    "revision": "9a3ce696e4246cb670d66a78337e00f1"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.47ea77b5c096a859db45.js",
    "revision": "5f60c825717c2a712327de90ca67def2"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.06a72c330c0b58002b2e.js",
    "revision": "62a931302c009538ff0d195dd4ed6f29"
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

workbox.routing.registerRoute(new RegExp('(?:.png|.gif|.jpg|.jpeg|.svg)$'), workbox.strategies.cacheFirst({"cacheExpiration":{"maxEntries":60,"maxAgeSeconds":2592000}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://6llw9ziqp5.execute-api.ap-northeast-1.amazonaws.com/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





