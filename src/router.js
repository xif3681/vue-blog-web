import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const lazyLoadView = (AsyncView) => {
  const AsyncComponent = () => ({
    component: AsyncView,
    loading: require('./views/Loading.vue').default,
    error: require('./views/Loading.vue').default,
    delay: 200,
    timeout: 30000
  })

  return Promise.resolve({
    functional: true,
    render (h, { data, children }) {
      return h(AsyncComponent, data, children)
    }
  })
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/home/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => lazyLoadView(import(/* webpackChunkName: "about" */ './views/about/About.vue'))
    },
    {
      path: '/article',
      name: 'article',
      component: () => lazyLoadView(import(/* webpackChunkName: "article" */ './views/article/Article.vue'))
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => lazyLoadView(import(/* webpackChunkName: "details" */ './views/details/Details.vue'))
    },
    { path: '**', name: 'pageNotFound',
      component: () => import(/* webpackChunkName: "postedit" */ './views/PageNotFound.vue')
    }
  ]
})
