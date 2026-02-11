import type { IStory } from "./types";

const stories = [
    {
        id: 0,
        title: "Silence in the Elevator",
        description: "A man is found unconscious in an elevator. The doors are closed, and no one else is around.",
        answer: `
            The man sneezed violently while holding a sandwich.
            He choked on a piece, dropped the sandwich, slipped on it, and hit his head.
            His head hit one of the buttons and the doors closed. He lay there, unconscious, for a very long time.
        `,
        difficulty: 2,
    },
    // {
    //     id: 0,
    //     title: "Hot Shower",
    //     description: "George turns on his shower at noon, and immediately realizes that his father has died.",
    //     answer: `
    //         They lived in an old building with shared water heaters in each apartment - his hot water came from the unit above, his father's from his.
    //         Every morning at 9am his father showered like clockwork. His father was an obsessive ex-military with severe PTSD, who never, ever broke his routine.
    //         George knew that cold water touching his skin meant the demise of his parent.
    //     `,
    //     difficulty: 3,
    // }
] as IStory[]

for (let [index, story] of stories.entries()) {
    story.id = index;
}

export { stories };
