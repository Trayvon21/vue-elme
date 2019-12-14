import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/a',
        redirect: '/'
    },
    {

        path: '/',
        component: Home,
        children: [{
            path: '',
            name: 'main',
            component: () =>
                import ('../views/main/Main')
        }]
    },
    {
        path: '/my',
        component: Home,
        children: [{
            path: '',
            name: 'my',
            component: () =>
                import ('../views/my/My.vue')
        }]
    },
    {
        path: '/order',
        component: Home,
        children: [{
            path: '',
            name: 'order',
            component: () =>
                import ('../views/order/Order.vue')
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router