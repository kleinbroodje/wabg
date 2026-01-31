import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"
import NotFound from "@/views/NotFound.vue";
import Mystories from "@/views/Mystories.vue";
import Werewolves from "@/views/Werewolves.vue";
import HalfAMinute from "@/views/HalfAMinute.vue";
import Chameleon from "@/views/Chameleon.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/mystories",
        name: "mystories",
        component: Mystories,
    },
    {
        path: "/werewolves",
        name: "werewolves",
        component: Werewolves,
    },
    {
        path: "/chameleon",
        name: "chameleon",
        component: Chameleon,
    },
    {
        path: "/half-a-minute",
        name: "halfAMinute",
        component: HalfAMinute,
    },
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