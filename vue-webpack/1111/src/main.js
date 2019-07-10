// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false
    //fasrclick
import FastClick from 'fastclick'
FastClick.attach(document.body)
    //自适应文件
import './assets/js/html5'

//reset.css 
import './assets/css/reset.css'
//axios 
import axios from 'axios'
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})