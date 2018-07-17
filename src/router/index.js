import Vue from 'vue'
import Router from 'vue-router'
import Tournaments from '@/components/Tournaments'
import Teams from '@/components/Teams'
import TournamentInfo from '@/components/TournamentInfo'
import TeamPage from '@/components/TeamPage'
import Players from '@/components/Players'
import PlayerPage from '@/components/PlayerPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tournaments',
      component: Tournaments
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/tournament',
      name: 'Tournament',
      component: TournamentInfo
    },
    {
      path: '/team',
      name: 'TeamPage',
      component: TeamPage
    },
    {
      path: '/players',
      name: 'Player',
      component: Players
    },
    {
      path: '/player',
      name: 'Playe',
      component: PlayerPage
    }  
  ]
})
