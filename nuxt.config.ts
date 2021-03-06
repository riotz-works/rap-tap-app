/* eslint-disable no-magic-numbers */               // 'cuz configuration file
/* eslint-disable no-process-env */                 // 'cuz configuration file and requires environment variables
/* eslint-disable nuxt/no-cjs-in-config */          // 'cuz it conflicts with compiler
/* eslint-disable @typescript-eslint/camelcase */   // 'cuz key name of configuration is specified
import { fail } from 'assert';
import { Configuration } from '@nuxt/types';
import pkg from './package.json';

const production = process.env.NODE_ENV === 'production';


const config: Configuration = {
  mode: 'spa',
  target: 'static',
  srcDir: 'src/',
  components: true,
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? `/${pkg.name}/` : '/'
  },
  build: {
    publicPath: '/static',
    hardSource: !production,
    terser: {
      terserOptions: {
        compress: {
          drop_console: production
        }
      }
    }
  },
  generate: {
    dir: `dist/${pkg.name}`
  },
  head: {
    titleTemplate: (titleChunk: string): string => titleChunk ? `${titleChunk} | 'ラップ、タップ、アップ 🎶'` : 'ラップ、タップ、アップ 🎶'
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
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || fail(),
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || fail(),
    FIREBASE_REALTIME_DATABASE_URL: process.env.FIREBASE_REALTIME_DATABASE_URL || fail(),
    RAP_TAP_APP_CORE_API: process.env.RAP_TAP_APP_CORE_API || fail(),
    SKYWAY_API_KEY: process.env.SKYWAY_API_KEY || fail()
  },
  axios: {
    retry: true
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

export default config;
