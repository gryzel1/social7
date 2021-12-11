import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import NewAccount from "@/views/NewAccount.vue";
import Profile from "@/views/Profile.vue";
import Notifications from "@/views/Notifications.vue";
import Events from "@/views/Events.vue";
import Research from "@/views/Research.vue";

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
        name: 'New Account',
        path: '/newAccount',
        component: NewAccount,
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
    },
    {
        name: 'Research',
        path: '/research',
        component: Research,
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes,
})

export default router;