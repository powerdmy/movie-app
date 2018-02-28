import Vue from 'vue'
import Router from 'vue-router'

const hotList = () => import('@/components/hotList/hotList.vue')
const rank = () => import('@/components/rank/rank.vue')
const movieDetail = () => import('@/components/movieDetail/movieDetail.vue')
const actor = () => import('@/components/actor/actor.vue')
const search = () => import('@/components/search/search.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hotlist'
    },
    {
      path: '/hotlist',
      name: 'hotList',
      component: hotList
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/movieDetail/:id',
      name: 'movieDetail',
      component: movieDetail
    },
    {
      path: '/actor/:id',
      name: 'actor',
      component: actor
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
