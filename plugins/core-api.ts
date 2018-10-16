/* tslint:disable */
import axios from 'axios';
import { NuxtContext } from 'nuxt';

export default ({}: NuxtContext, inject) => {

  const client = axios.create({
    baseURL: process.env.RAP_TAP_APP_CORE_API
  });

  inject('coreApi', client);

};
