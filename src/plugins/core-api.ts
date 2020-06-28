import axios from 'axios';
import { config } from '~/mixins/config';
import { NuxtContext } from 'nuxt';

export default (_context: NuxtContext, inject: (key: string, value: object) => void): void => {
  const client = axios.create({
    baseURL: config.coreApiEndpoint
  });
  inject('coreApi', client);
};
