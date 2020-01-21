import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";

Vue.use(Router);

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    }
];

export default new Router({
    history: true,
    base: null,
    routes
})
