importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.3e8097325da77e4fc8fb.js",
    "revision": "2710ae9cddb3ceeff12ee9bbe886d6cd"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.61009cfd502cca954ff0.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.353d804d79d8f7e8d87f.js",
    "revision": "0bfd200386e80517e17eef03f3d786ed"
  },
  {
    "url": "/rap-tap-app/static/pages/about.86675348bf44bb8c1abc.js",
    "revision": "c509c11cd00dbcd62e9568defdf7fe57"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.6aaa23cc77569f6c5699.js",
    "revision": "8fec0e1f3ebcc0cc3ecf7f622ebcaf70"
  },
  {
    "url": "/rap-tap-app/static/pages/host.0f75a7727093489498cc.js",
    "revision": "ea4fe794484bf4da5a2ee420439925e1"
  },
  {
    "url": "/rap-tap-app/static/pages/index.3a1631bb908d22b9eecc.js",
    "revision": "268cd70b63a9c2d33853bd0527874895"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.b695f30c988eb409da0c.js",
    "revision": "a245debaedff5b0fcbc306c1a7869faa"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.9d09a4d0d3be70e82448.js",
    "revision": "caf168cba963831bf8ded95e04740808"
  },
  {
    "url": "/rap-tap-app/static/vendor.4691131cc4c6b1de6c19.js",
    "revision": "a48f37f00c6a23cc446421104078c46a"
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

workbox.routing.registerRoute(new RegExp('https://ra0izso5i7.execute-api.us-west-2.amazonaws.com/dev/version'), workbox.strategies.networkFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')





