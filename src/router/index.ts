import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import NotFound from "../views/NotFound.vue";

import mystoriesRoutes from '@/modules/mystories/routes'
import werewolvesRoutes from '@/modules/werewolves/routes'
import chameleonRoutes from '@/modules/chameleon/routes'
import halfAMinuteRoutes from '@/modules/halfAMinute/routes'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    mystoriesRoutes,
    werewolvesRoutes,
    chameleonRoutes,
    halfAMinuteRoutes,
    {
        path: "/:pathMatch(.*)",
        name: "NotFound",
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router