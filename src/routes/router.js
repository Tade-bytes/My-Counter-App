import {createRouter, createWebHistory} from 'vue-router'
import CounterView from '../components/CounterView'  
import  HelloWorld from '../components/HelloWorld'
import  NotFound from '../components/NotFound'

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/counter',
        name: 'CounterView',
        component: CounterView,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    },



] 

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;