import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue"
import NotFound from "../views/NotFound.vue";
import GameEntry from "@/views/GameEntry.vue";
import Room from "@/views/Room.vue";
import Join from "@/views/Join.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/games/:gameId",
        name: "game",
        component: GameEntry,
    },
    {
        path: "/rooms/:roomId",
        name: "room",
        component: Room,
    },
    {
        path: "/join",
        name: "join",
        component: Join,
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