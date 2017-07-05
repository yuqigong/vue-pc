import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes'
import store from '../store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import '../stylesheet/all.scss'

if (__MOCK__) {
    require('../mock/index');
}

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
    routes: routes.constant
});

const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
    debugger
    
    NProgress.start();
    
    if (store.getters.token) {
        debugger
        if (to.path === '/login') {
            debugger
            next({path: '/'});
            return false;
        }
        
        if (!store.getters.access) {
            debugger
            store.dispatch('GetInfo').then((response) => {
                debugger
                store.dispatch({
                    type: 'GenerateRoutes',
                    menus: response.data.data.menus,
                    routes
                }).then(() => {
                    router.addRoutes(store.getters.addRouters);
                    // hack
                    next(to.path);
                }).catch(err => {
                    console.log(err);
                });
                
            }).catch(err => {
                debugger
                
                store.dispatch('CLogout').then(() => {
                    
                    next('/login');
                    
                }).catch(err => {
                    console.log(err);
                });
                
                //if (to.path === '/500') {
                //    next();
                //} else {
                //    next({
                //        path: '/500',
                //        query: {redirect: to.fullPath}
                //    });
                //}
            });
            
        } else {
            debugger
            next();
        }
        
        return false;
    }
    
    if (whiteList.indexOf(to.path) !== -1) {
        debugger
        next();
    } else {
        debugger
        next('/login');
        NProgress.done();
    }
    
});

router.afterEach(() => {
    NProgress.done();
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
