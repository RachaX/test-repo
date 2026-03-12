import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },

    // ci trigger 

    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
