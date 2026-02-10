import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue"
import NotFound from "../views/NotFound.vue";
import GameEntry from "@/views/GameEntry.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/games/:gameId",
        name: "game",
        component: GameEntry

    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router