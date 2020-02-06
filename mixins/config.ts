/* eslint-disable no-process-env */
export const config = Object.freeze({
  coreApiEndpoint: process.env.RAP_TAP_APP_CORE_API,
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_REALTIME_DATABASE_URL
  }
});
