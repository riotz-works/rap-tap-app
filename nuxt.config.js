/* eslint-disable no-process-env */                 // 'cuz configuration file and requires environment variables
/* eslint-disable nuxt/no-cjs-in-config */          // 'cuz it conflicts with compiler
/* eslint-disable @typescript-eslint/camelcase */   // 'cuz key name of configuration is specified
const axiosRetry = require('axios-retry');
const pkg = require('./package.json');

module.exports = {
  mode: 'spa',
  target: 'static',
  srcDir: 'src/',
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? `/${pkg.name}/` : '/'
  },
  build: {
    publicPath: '/static/'
  },
  head: {
    titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | 'ラップ、タップ、アップ 🎶'` : 'ラップ、タップ、アップ 🎶'
  },
  meta: {
    ogHost: pkg.appHost
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
  css: [
    '@/assets/css/style.scss'
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/vuetify',
    [ '@nuxtjs/google-analytics', { id: 'UA-109297390-1' }]
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  plugins: [
    { src: '~/plugins/core-api', ssr: false }
  ],
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_REALTIME_DATABASE_URL: process.env.FIREBASE_REALTIME_DATABASE_URL,
    RAP_TAP_APP_CORE_API: process.env.RAP_TAP_APP_CORE_API,
    SKYWAY_API_KEY: process.env.SKYWAY_API_KEY
  },
  axios: {
    retry: {
      retries: 3,
      retryDelay: axiosRetry.exponentialDelay
    }
  },
  dotenv: {
    path: '.'
  },
  sitemap: {
    hostname: `${pkg.appHost}/${pkg.name}`
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
        urlPattern: '(?:.png|.gif|.jpg|.jpeg|.svg)$',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheExpiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 }}
      },
      {
        urlPattern: `${process.env.RAP_TAP_APP_CORE_API}/version`,
        handler: 'networkFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [ 0, 200 ]}}
      }
    ]
  }
};
