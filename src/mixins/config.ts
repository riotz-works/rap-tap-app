/* eslint-disable no-process-env */
import { displayName } from '../../package.json';

export const config = Object.freeze({
  displayName,
  coreApiEndpoint: process.env.RAP_TAP_APP_CORE_API,
  skywayApiKey: process.env.SKYWAY_API_KEY,
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_REALTIME_DATABASE_URL
  }
});
