/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from 'vue';
import { Store } from 'vuex';
import { Route } from 'vue-router';


/**
 * Type definition of Nuxt.js.
 */
declare module 'vue/types/options' {

  /**
   * Definition of Nuxt.js extension for Vue component.
   *
   * @see https://nuxtjs.org/api
   */
  export interface ComponentOptions<
    V extends Vue,
    Data=DefaultData<V>,
    Methods=DefaultMethods<V>,
    Computed=DefaultComputed,
    PropsDef=PropsDefinition<DefaultProps>,
    Props=DefaultProps> {
      asyncData?(context: NuxtContext): Promise<object>;
      fetch?(context: NuxtContext): Promise<object>;
      head?(): object;
      layout?(context: NuxtContext): string;
      middleware?: string | string[];
      scrollToTop?: boolean;
      transition?(to: string, from: string): string | Transition;
      validate?(context: NuxtContext): boolean;
      watchQuery?: string[];
  }

  /**
   * An additional context object provided by Nuxt.js.
   *
   * The `context` provides additional objects/params from Nuxt not traditionally available to Vue components.
   * The `context` is available in special nuxt lifecycle areas like `asyncData`, `plugins`, 'middlewares', 'modules', and 'store/nuxtServerInit`.
   *
   * @see https://nuxtjs.org/api/context
   */
  interface NuxtContext {
    app: Vue;
    isClient: boolean;
    isServer: boolean;
    isStatic: boolean;
    isDev: boolean;
    isHMR: boolean;
    route: Route;
    store: Store<any>;
    env: object;
    params: object;
    query: object;
    req: Request;
    res: Response;
    nuxtState: object;
    beforeNuxtRender: ({ Components, nuxtState }) => void;
    redirect: (path: string) => void;
    error: (params: { statusCode?: string; message?: string }) => void;
  }

  /**
   * Specific transition for the page.
   *
   * @see https://nuxtjs.org/api/pages-transition
   */
  interface Transition {
    name: string;
    mode: string;
    css: boolean;
    duration: number;
    type: string;
    enterClass: string;
    enterToClass: string;
    enterActiveClass: string;
    leaveClass: string;
    leaveToClass: string;
    leaveActiveClass: string;
    beforeEnter: (el: HTMLElement) => void;
    enter: (el: HTMLElement, done: () => void) => void;
    afterEnter: (el: HTMLElement) => void;
    enterCancelled: (el: HTMLElement) => void;
    beforeLeave: (el: HTMLElement) => void;
    leave: (el: HTMLElement, done: () => void) => void;
    afterLeave: (el: HTMLElement) => void;
    leaveCancelled: (el: HTMLElement) => void;
  }
}
