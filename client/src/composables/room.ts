import { ref } from "vue"
import type { createRoomResponse } from "../commons/types";
import { useRouter } from "vue-router";

const socket = ref<WebSocket | null>(null)

export default function useRoom() {
    const joined = ref(false)
    const router = useRouter()

    async function createRoom(gameId: string, minPlayers: number, maxPlayers: number) {
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

        const json: createRoomResponse = await response.json()
        joinRoom(json.roomId)
    }

    async function joinRoom(roomId: string) {

        const response = await fetch(`/api/rooms/${roomId}/players`, {
            method: "POST",
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        console.log(`joined room: ${roomId}`)

        socket.value = new WebSocket('ws://localhost:8080/ws')
        socket.value.onopen = () => { console.log("connected to websocket server") }
        socket.value.onclose = () => { socket.value = null }

        router.push({ name: 'room', params: { roomId: roomId } })
    }

    return { createRoom, joinRoom }
}