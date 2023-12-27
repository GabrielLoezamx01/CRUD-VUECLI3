import { createRouter, createWebHistory }   from 'vue-router';
import HomeView from './views/HomeView.vue';

const routes = [
    {
        path: '/Home',
        name: 'HomeView',
        component: HomeView,
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(''),
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
