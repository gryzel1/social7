import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import Notifications from "@/views/Notifications.vue";
import Events from "@/views/Events.vue";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
    },
    {
        name: 'Profile',
        path: '/profile',
        component: Profile,
    },
    {
        name: 'Notifications',
        path: '/notifications',
        component: Notifications,
    },
    {
        name: 'Events',
        path: '/events',
        component: Events,
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes,
})

export default router;