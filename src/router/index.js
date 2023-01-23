import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [{
    path: '/',
    name: 'mainView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/mainView.vue'),
}];

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