import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue';
import test from '../views/test.vue';
import BelajarComponent from '../views/BelajarComponent.vue';
import Product from '../views/Product.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test',
        name: 'test',
        component: test
    },
    {
        path: '/BelajarComponent',
        name: 'BelajarComponent',
        component: BelajarComponent
    },
    {
        path: '/Product',
        name: 'Product',
        component: Product
    }
    
]
const router = createRouter({
    history: createWebHistory(),routes
})
export default router //agar bisa digunakan oleh file lainnya
