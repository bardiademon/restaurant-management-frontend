import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'mainView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/mainView.vue'),
        children: [
            {
                path: '',
                name: 'homePage',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/homePage.vue'),
            },
            {
                path: 'about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/aboutPage.vue'),
            },
            {
                path: 'login',
                name: 'login',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/loginPage.vue'),
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/dashboardPage.vue'),
            },
            {
                path: 'add-order',
                name: 'add-order',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/addOrder.vue'),
            },
            {
                path: 'foods',
                name: 'foods',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/foodsPage.vue'),
            },
            {
                path: 'add-foods',
                name: 'add-foods',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/addFood.vue'),
            },
            {
                path: 'users',
                name: 'users',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/usersPage.vue'),
            },
            {
                path: 'add-user',
                name: 'add-user',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/addUser.vue'),
            },
            {
                path: 'categories',
                name: 'categories',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/categoriesPage.vue'),
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// router.beforeEach(async (to, from, next) =>
// {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ['/login', ',/register'];
//     const authRequired = !publicPages.includes(to.path);
//     const auth = sessionStorage.getItem('token');
//
//     if (authRequired && !auth)
//     {
//         next({
//             path: '/login'
//         })
//     }
//     else next()
// });

export default router;