import Chameleon from "./views/Chameleon.vue"
import Room from "./views/Room.vue"

const routes = [
    {
        path: "/chameleon",
        name: "chameleon",
        component: Chameleon,
    },
    {
        path: "/chameleon/rooms/:id",
        name: "chameleonRoom",
        component: Room,
    },
]

export default routes
