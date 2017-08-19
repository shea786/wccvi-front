import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Squad from '@/components/Squad'
import LeagueTable from '@/components/LeagueTable'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/league-table',
      name: 'League-Table',
      component: LeagueTable
    },
    {
      path: '/squad',
      name: 'Squad',
      component: Squad
    }
  ]
})
