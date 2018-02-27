import Vue from 'vue'
import Router from 'vue-router'
import hotList from '@/components/hotList/hotList.vue'
import rank from '@/components/rank/rank.vue'
import movieDetail from '@/components/moviedetail/movieDetail.vue'
import actor from '@/components/actor/actor.vue'
import search from '@/components/search/search.vue'

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
