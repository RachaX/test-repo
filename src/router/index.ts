import { createRouter, createWebHistory } from "vue-router";
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';

const routes = [
    {
        path: '/',
        redirect: '/contact'
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
