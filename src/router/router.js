import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main';
import Article from "@/pages/Article";
const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/About')
    },
    {
        path: '/article',
        name: 'Article',
        component: Article
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;