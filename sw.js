importScripts('/rap-tap-app/static/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/rap-tap-app/static/app.d3e59c6690f578b95d5d.js",
    "revision": "cb5e0a00bf6d0305d26e036b37f68297"
  },
  {
    "url": "/rap-tap-app/static/layouts/default.5bcd47d05d511afc98fe.js",
    "revision": "8a76b4d33502743fe725fbfc19881497"
  },
  {
    "url": "/rap-tap-app/static/manifest.7e5199bb24ebe385e3b2.js",
    "revision": "a4fc04720275b482848d1d0d2e585bda"
  },
  {
    "url": "/rap-tap-app/static/pages/about.eee9a663e359be0a91da.js",
    "revision": "fb693ba1a42ab489265fe48dbfb14ee0"
  },
  {
    "url": "/rap-tap-app/static/pages/enter.c14cddfd83c22907f16c.js",
    "revision": "a244313b976a6415595826a05cb40aef"
  },
  {
    "url": "/rap-tap-app/static/pages/host.9394e9288ceb6db0dc1d.js",
    "revision": "5cb1119703a49bd6cc40d4f01d13f1e9"
  },
  {
    "url": "/rap-tap-app/static/pages/index.64f11a79fefd52c38fb7.js",
    "revision": "ae5f5593a9e787e9335de2ef7a5e1332"
  },
  {
    "url": "/rap-tap-app/static/pages/room/rapper.b36aea78f9a4784b83aa.js",
    "revision": "90105f2d8b1c4dc72fe5569365f6cef2"
  },
  {
    "url": "/rap-tap-app/static/pages/room/watcher.38a574cc766f96813156.js",
    "revision": "d8aa49b5fccabebe3f39c79a798d2092"
  },
  {
    "url": "/rap-tap-app/static/vendor.3ff17577d0aa45def7ac.js",
    "revision": "a0fc7bd70cc02fae93858b38fbed3850"
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





