importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.dc276456126ade177d99.js",
    "revision": "8f95b6af520ec107c4aec82adc7d887b"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.f29623e86aa6696cf8b2.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.76f030588842f170243b.js",
    "revision": "86552e61da5091c8c194c3ef4355258c"
  },
  {
    "url": "/rap-tap-app/static/pages/about.9f1e3a4218722c0f9bc1.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.43be1643deef67df2c1e.js",
    "revision": "228d4dfbadcfd6755624052fbd25a8f4"
  },
  {
    "url": "/rap-tap-app/static/pages/host.82bb182d0b18397a3254.js",
    "revision": "dae93b2a64d4d7bc7d5da3702723508a"
  },
  {
    "url": "/rap-tap-app/static/pages/index.37e9cae341030af8ae37.js",
    "revision": "c15bd84200bf462ed155b3db13ebaf0d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.bf067f8d8e503421f1e6.js",
    "revision": "2e7e141f5e557912f8c587a80a49f48e"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.711c7f416afb15c7a794.js",
    "revision": "b60a3f026852f527974b99853f435a41"
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





