import type { Game } from "./types"
import { color } from "./color"

const games = [
    {
        id: 0,
        title: "Mystories",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        duration: 15,
        players: [2, Infinity],
        color: color.neutral.grey3,
        route: "/mystories",
    },
    {
        id: 1,
        title: "Werewolves",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        duration: 30,
        players: [4, Infinity],
        color: color.brand.peachy,
        route: "/werewolves",
    },
    {
        id: 2,
        title: "Half a minute",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        duration: 10,
        players: [2, Infinity],
        color: color.brand.neonGreen,
        route: "/halfAMinute",
    },
    {
        id: 3,
        title: "Chameleon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        duration: 15,
        players: [3, Infinity],
        color: color.brand.ultraSassyPink,
        route: "/chameleon",
    }
] as Game[]

for (let [index, preview] of games.entries()) {
    preview.id = index;
}

export { games };
