import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue'
import Menu from './views/Menu.vue'
import Lecture from './views/Lecture.vue'

import Lecture1 from './views/Lectures/Lecture1.vue'
import Lecture2 from './views/Lectures/Lecture2.vue'
import Lecture3 from './views/Lectures/Lecture3.vue'
import Lecture4 from './views/Lectures/Lecture4.vue'
import Lecture5 from './views/Lectures/Lecture5.vue'
import Lecture6 from './views/Lectures/Lecture6.vue'
import Lecture7 from './views/Lectures/Lecture7.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/lecture',
      name: 'lecture',
      component: Lecture,
      children:[
        {
          path: '/lecture1',
          name: 'Lecture1',
          component: Lecture1
        },
        {
          path: '/lecture2',
          name: 'Lecture2',
          component: Lecture2
        },
        {
          path: '/lecture3',
          name: 'Lecture3',
          component: Lecture3
        },
        {
          path: '/lecture4',
          name: 'Lecture4',
          component: Lecture4
        },
        {
          path: '/lecture5',
          name: 'Lecture5',
          component: Lecture5
        },
        {
          path: '/lecture6',
          name: 'Lecture6',
          component: Lecture6
        },
        {
          path: '/lecture7',
          name: 'Lecture7',
          component: Lecture7
        },
      ]
    }
  ]
})
