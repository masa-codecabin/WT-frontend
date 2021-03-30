import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/views/SignUp'
import SignIn from '@/views/SignIn'
import User from '@/views/users/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/v1/users',
      name: 'User',
      component: User
    }
  ]
})
