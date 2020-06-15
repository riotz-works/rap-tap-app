importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.96ac927814b2de4e4256.js",
    "revision": "c93eba84173a2d3a90894d5486cdd8ba"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.277a5d9cf41a1d45df8f.js",
    "revision": "3949683104cf48d77153f939cf2e27dc"
  },
  {
    "url": "/rap-tap-app/static/manifest.8ba087b3e0ed58376b6e.js",
    "revision": "b537a04620eed9532084f6bc813f6da4"
  },
  {
    "url": "/rap-tap-app/static/pages/about.3cae0d71b7cdcf21467a.js",
    "revision": "b7be38182f3a5ccd298cfdf67de5d546"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.5d484900205d0caaea89.js",
    "revision": "fada697a1a598f29ba800abdd2394049"
  },
  {
    "url": "/rap-tap-app/static/pages/host.acacbedcc006def5c448.js",
    "revision": "68b7c27760b030dd5758ccc28180b0f8"
  },
  {
    "url": "/rap-tap-app/static/pages/index.80fa8ea58c7521c1a68c.js",
    "revision": "aec70bb6c34697f66a1d0d5fa3d1ee81"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.738e6aa510d5a2a753a8.js",
    "revision": "7e569a374480c1cc4398069e8949cb0f"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.db404776ceb8154089e2.js",
    "revision": "e198c7d698f06ed99bdcc5584c9a24e0"
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





