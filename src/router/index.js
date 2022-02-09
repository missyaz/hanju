import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: "/",
            redirect:"/index"
        },
        {
            path: "/index",
            component: () => import('@/pages/index')
        },
        {
            path: "/video",
            component: () => import('@/pages/eyesVideo')
        },
        {
            path: "/play",
            component: ()=> import('@/pages/play')
        }
    ]
})