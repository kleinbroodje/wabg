export async function createRoom(gameId: string, minPlayers: number, maxPlayers: number) {
    const response = await fetch("/api/rooms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            gameId: gameId,
            minPlayers: minPlayers,
            maxPlayers: maxPlayers
        })
    });
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    console.log(response.json())
}   