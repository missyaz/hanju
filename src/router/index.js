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
            path: "/:category",
            component:() => import('@/pages/category')
        },
        {
            path: "/:category/:teleplayName/:no",
            component: () => import('@/pages/play')
        },
        {
            path: "/:category/:teleplayName",
            component:() => import('@/pages/detail')
        },

    ]
})