importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.6514e8bef15ddf2a9fd2.js",
    "revision": "551573c5deae9adc98d998fe4bc60334"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.85797f9bf0a2b108bbe6.js",
    "revision": "ae03145919c54b8d31062d5a6e0a348c"
  },
  {
    "url": "/rap-tap-app/static/manifest.2276389cd0a143edee47.js",
    "revision": "83806ddc3f22186d665522e49f9d8405"
  },
  {
    "url": "/rap-tap-app/static/pages/about.fccfe657b372ed57feee.js",
    "revision": "e0693cb3df4b8185832b77b3e0640767"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.52fde2d734bfd58c95f0.js",
    "revision": "9f2e853b5a13f5407af5cfe09c1b2cb2"
  },
  {
    "url": "/rap-tap-app/static/pages/host.7d4ef49ba024acf9a084.js",
    "revision": "dae93b2a64d4d7bc7d5da3702723508a"
  },
  {
    "url": "/rap-tap-app/static/pages/index.3a0c6f98704332d61217.js",
    "revision": "8bc7a577a0d3ee336bff07c438b1e062"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.8a38249b57a3949f992c.js",
    "revision": "7e26c60f835ce616e47e62bab9c1c16c"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.8584c83d5afb18546225.js",
    "revision": "5c80d11c78b2c6f8cfbb2260b3bcbc86"
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





