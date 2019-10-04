importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.036964dd3449288ef3e4.js",
    "revision": "98e8d6bcbd3c1c0ce9337b09075d2526"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.85797f9bf0a2b108bbe6.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.353880973be4aadc6a6d.js",
    "revision": "d227670da6c473c1b22870f97a11e120"
  },
  {
    "url": "/rap-tap-app/static/pages/about.fccfe657b372ed57feee.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.7ea760796732eca45a98.js",
    "revision": "228d4dfbadcfd6755624052fbd25a8f4"
  },
  {
    "url": "/rap-tap-app/static/pages/host.7d4ef49ba024acf9a084.js",
    "revision": "dae93b2a64d4d7bc7d5da3702723508a"
  },
  {
    "url": "/rap-tap-app/static/pages/index.51ead7c00738f7673fe1.js",
    "revision": "c15bd84200bf462ed155b3db13ebaf0d"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.62da5311d14319e8d037.js",
    "revision": "2e7e141f5e557912f8c587a80a49f48e"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.aa9e0f90e93b177c06ff.js",
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





