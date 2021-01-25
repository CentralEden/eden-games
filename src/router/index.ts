import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

// // 1. Define route components.
// // These can be imported from other files
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// // 2. Define some routes
// // Each route should map to a component.
// // We'll talk about nested routes later.
// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
// ]

// // 3. Create the router instance and pass the `routes` option
// // You can pass in additional options here, but let's
// // keep it simple for now.
// const router = createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: createWebHistory(),
//     routes, // short for `routes: routes`
// });