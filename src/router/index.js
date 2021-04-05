import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/views/SignUp'
import SignIn from '@/views/SignIn'
import UsersIndex from '@/views/users/UsersIndex'
import UsersShow from '@/views/users/UsersShow'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Setting from '@/views/Setting'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
      path: '/usersindex',
      name: 'usersindex',
      component: UsersIndex
    },
    {
      path: '/usersshow',
      name: 'usersshow',
      component: UsersShow
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
