import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _41ac9e00 = () => interopDefault(import('..\\pages\\nav_pages\\Apps.vue' /* webpackChunkName: "pages/nav_pages/Apps" */))
const _4eaa4257 = () => interopDefault(import('..\\pages\\nav_pages\\Cloud_Managed.vue' /* webpackChunkName: "pages/nav_pages/Cloud_Managed" */))
const _6ad8a65c = () => interopDefault(import('..\\pages\\nav_pages\\Managed_Hosting.vue' /* webpackChunkName: "pages/nav_pages/Managed_Hosting" */))
const _e771a9dc = () => interopDefault(import('..\\pages\\nav_pages\\Who_we_are.vue' /* webpackChunkName: "pages/nav_pages/Who_we_are" */))
const _379e5a98 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/nav_pages/Apps",
    component: _41ac9e00,
    name: "nav_pages-Apps"
  }, {
    path: "/nav_pages/Cloud_Managed",
    component: _4eaa4257,
    name: "nav_pages-Cloud_Managed"
  }, {
    path: "/nav_pages/Managed_Hosting",
    component: _6ad8a65c,
    name: "nav_pages-Managed_Hosting"
  }, {
    path: "/nav_pages/Who_we_are",
    component: _e771a9dc,
    name: "nav_pages-Who_we_are"
  }, {
    path: "/",
    component: _379e5a98,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
