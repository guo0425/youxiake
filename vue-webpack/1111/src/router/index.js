import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import City from '../components/city/City'
import Deatil from '../components/home/Detail'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/city',
        name: City,
        component: City
    }, {
        path: '/detail',
        name: Deatil,
        component: Deatil
    }]
})