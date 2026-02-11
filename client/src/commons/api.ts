import { ref } from "vue"

const socket = ref<WebSocket | null>(null)

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
    joinRoom()
}

export async function joinRoom() {
    socket.value = new WebSocket('ws://localhost:8080/ws')
    socket.value.onopen = () => { console.log("Connected to websocket server") }
    socket.value.onclose = () => { socket.value = null }
}