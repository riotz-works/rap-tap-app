/* tslint:disable */
import axios from 'axios';
import { NuxtContext } from 'nuxt';

export default ({}: NuxtContext, inject) => {

  const client = axios.create({
    baseURL: ''
  });

  inject('coreApi', client);

};
