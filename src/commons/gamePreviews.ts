import type { IGamePreview } from "./types"
import { color } from "./color"

export const gamePreviews = [
    {
        id: 0,
        title: "Werewolves",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        duration: 30,
        players: [4, Infinity],
        color: color.brand.peachy,
    },
    {
        id: 1,
        title: "Charades",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        duration: 15,
        players: [2, Infinity],
        color: color.brand.airBlue,
    },
    {
        id: 2,
        title: "30 seconds",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        duration: 10,
        players: [2, Infinity],
        color: color.brand.neonGreen,
    },
    {
        id: 3,
        title: "Chameleon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        duration: 15,
        players: [3, Infinity],
        color: color.brand.ultraSassyPink,
    }
] as IGamePreview[]
