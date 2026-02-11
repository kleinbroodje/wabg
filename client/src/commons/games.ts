import type { Game } from "./types"
import { color } from "./color"
import Mystories from "@/games/mystories/Mystories.vue";
import Werewolves from "@/games/werewolves/Werewolves.vue";
import HalfAMinute from "@/games/halfAMinute/HalfAMinute.vue";
import Chameleon from "@/games/chameleon/Chameleon.vue";

const games: Record<string, Game> = {
    mystories: {
        id: "mystories",
        title: "Mystories",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        duration: 15,
        players: [2, Infinity],
        color: color.neutral.grey3,
        entry: Mystories,
    },
    werewolves: {
        id: "werewolves",
        title: "Werewolves",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        duration: 30,
        players: [4, Infinity],
        color: color.brand.peachy,
        entry: Werewolves,
    },
    halfAMinute: {
        id: "halfAMinute",
        title: "Half a minute",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        duration: 10,
        players: [2, Infinity],
        color: color.brand.neonGreen,
        entry: HalfAMinute,
    },
    chameleon: {
        id: "chameleon",
        title: "Chameleon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        duration: 15,
        players: [3, Infinity],
        color: color.brand.ultraSassyPink,
        entry: Chameleon,
    }
}

export { games };
