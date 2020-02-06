import axios from 'axios';
import { NuxtContext } from 'nuxt';

export default (_context: NuxtContext, inject: (key: string, value: object) => void): void => {
  const client = axios.create({
    baseURL: process.env.RAP_TAP_APP_CORE_API
  });

  inject('coreApi', client);
};
