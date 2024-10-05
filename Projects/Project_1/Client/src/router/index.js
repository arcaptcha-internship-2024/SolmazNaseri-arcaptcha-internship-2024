// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import UserForm from '../components/UserForm.vue';
import AdminLogin from '../components/AdminLogin.vue';

const routes = [{
        path: '/',
        name: 'UserForm',
        component: UserForm, // فرم کاربر به عنوان صفحه پیش‌فرض
    },
    {
        path: '/admin-login',
        name: 'AdminLogin',
        component: AdminLogin, // صفحه لاگین مدیر
    },
    // مسیر 404 برای مسیرهای اشتباه
    {
        path: '/:pathMatch(.*)*',
        redirect: '/', // هر مسیر اشتباه به صفحه اصلی (فرم کاربر) ریدایرکت می‌شود
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;