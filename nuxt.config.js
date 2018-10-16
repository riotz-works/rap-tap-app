const axiosRetry = require('axios-retry');
const pkg = require('./package.json');

module.exports = {
  mode: 'spa',
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? `/${pkg.name}/` : '/'
  },
  build: {
    publicPath: '/static/',
    vendor: [ 'axios' ]
  },
  head: {
    titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | ${require('~/package.json').displayName}` : pkg.displayName
  },
  meta: {
    ogHost: pkg.applicationHost
  },
  manifest: {
    name: pkg.displayName,
    short_name: pkg.displayShortName,
    description: pkg.description,
    display: 'standalone',
    lang: 'ja',
    scope: `/${pkg.name}/`,
    theme_color: '#000',
    background_color: '#000'
  },
  loading: {
    color: '#000'
  },
  modules: [
    [ '@nuxtjs/axios' ],
    [ '@nuxtjs/pwa' ],
    [ '@nuxtjs/sitemap' ],
    [ '~/modules/typescript.js' ]
  ],
  axios: {
    retry: {
      retries: 3,
      retryDelay: axiosRetry.exponentialDelay
    }
  },
  sitemap: {
    hostname: `${pkg.applicationHost}/${pkg.name}`,
    gzip: true,
    generate: true
  },
  workbox: {
    dev: true,
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.(?:googleapis|gstatic).com/(.*)',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [ 0, 200 ]}}
      },
      {
        urlPattern: '\.(?:png|gif|jpg|jpeg|svg)$',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheExpiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 }}
      }
    ]
  }
};
