package main

import (
	"encoding/json"
	"fmt"
	"math/rand/v2"
	"net/http"

	"github.com/gorilla/websocket"
)

// models
type Room struct {
	GameId     int
	RoomId     string
	MinPlayers int
	MaxPlayers int
}

// requests
type CreateRoomRequest struct {
	GameId     int `json:"gameId"`
	MinPlayers int `json:"minPlayers"`
	MaxPlayers int `json:"maxPlayers"`
}

// consts
const roomIdLength int = 4

// globals
var rooms = map[string]*Room{}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func handleWebSocket(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println("Error upgrading connection to websocket: ", err)
		return
	}

	defer conn.Close()

	fmt.Println("Client connected")
}

// creates a new room and returns the room to the client
func handleCreateRoom(w http.ResponseWriter, r *http.Request) {

	// parse req body json
	var req CreateRoomRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	//create new room instance
	room := Room{
		GameId:     req.GameId,
		RoomId:     generateRoomId(roomIdLength, rooms),
		MinPlayers: req.MinPlayers,
	}

	//serialize room instance to json
	j, err := json.Marshal(room)
	if err != nil {
		http.Error(
			w,
			err.Error(),
			http.StatusInternalServerError,
		)
		return
	}

	//server response
	rooms[room.RoomId] = &room
	w.WriteHeader(http.StatusCreated)
	w.Write(j)
}

func handleJoinRoom(w http.ResponseWriter, r *http.Request) {
	_, exists := rooms[r.PathValue("id")]
	if !exists {
		w.WriteHeader(http.StatusNotFound)
	}
	w.WriteHeader(http.StatusOK)

}

func generateRoomId(length int, currentRoomIds map[string]*Room) string {
	const charset string = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"

	for {
		id := ""
		for i := 0; i < length; i++ {
			id += string(charset[rand.IntN(len(charset))])
		}
		for _, v := range currentRoomIds {
			if v.RoomId == id {
				continue
			}
		}
		return string(id)
	}
}

func main() {
	mux := http.NewServeMux()

	//handle http requests
	mux.HandleFunc("POST /api/rooms", handleCreateRoom)
	mux.HandleFunc("POST /api/rooms/{roomId}/players", handleJoinRoom)
	mux.HandleFunc("/ws", handleWebSocket)

	//start http server
	fmt.Println("Websocket server started on on port 8080")
	if err := http.ListenAndServe(":8080", mux); err != nil {
		fmt.Println("Error starting server: ", err)
	}
}
