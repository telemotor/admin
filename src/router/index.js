import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import DefineEvent from '@/components/DefineEvent'
import CreateReport from '@/components/CreateReport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/define_event',
      name: 'DefineEvent',
      component: DefineEvent
    },
    {
      path: '/create_report',
      name: 'CreateReport',
      component: CreateReport
    }
  ]
})
