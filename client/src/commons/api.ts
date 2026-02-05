import { games } from "./games";

export async function createRoom(gameId: number, minPlayers: number, maxPlayers: number) {
    const response = await fetch("/api/rooms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            game: gameId,
            minPlayers: minPlayers,
            maxPlayers: maxPlayers
        })
    });
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    return response.json()
}   