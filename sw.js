importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.eb9aa8d771b6c3745baa.js",
    "revision": "292da76fa03bc3eedfc4f87abda8a10a"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.85797f9bf0a2b108bbe6.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.37ec3c53e6e4b7936f20.js",
    "revision": "7dfec4921cabb88045363fcc7516647c"
  },
  {
    "url": "/rap-tap-app/static/pages/about.fccfe657b372ed57feee.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.0a0863fb141dc2dd4ce4.js",
    "revision": "fe8925e463cc43638ae69fc6e432b51a"
  },
  {
    "url": "/rap-tap-app/static/pages/host.7d4ef49ba024acf9a084.js",
    "revision": "dae93b2a64d4d7bc7d5da3702723508a"
  },
  {
    "url": "/rap-tap-app/static/pages/index.adc76abb116c9fc22f62.js",
    "revision": "3e46a608e7aa02f8498b2e3a0b96e372"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.0287eb9ab8b2e0414a61.js",
    "revision": "6fe34eef0c56e03ca25ddf0e28b758c8"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.6943533e07bd799d1944.js",
    "revision": "bba0a3cbf813760ffb295a86a90555a5"
  },
  {
    "url": "/rap-tap-app/static/vendor.4520302cd135140617cf.js",
    "revision": "66741501b06439affa6ae602ca7717ee"
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





