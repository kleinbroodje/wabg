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
	GameId     string          `json:"gameId"`
	RoomId     string          `json:"roomId"`
	MinPlayers int             `json:"minPlayers"`
	MaxPlayers int             `json:"maxPlayers"`
	Players    map[int]*Player `json:"players"`
}

type Player struct {
	Id   int
	Name string
	Conn *websocket.Conn
}

// requests
type CreateRoomRequest struct {
	GameId     string `json:"gameId"`
	MinPlayers int    `json:"minPlayers"`
	MaxPlayers int    `json:"maxPlayers"`
}

type JoinRoomRequest struct {
	Name string `json:"name"`
}

// consts
const roomIdLength int = 4

// globals
var rooms = map[string]*Room{}

// specifies the parameters for upgrading http conn to ws
var upgrader = websocket.Upgrader{
	// CheckOrigin is a security function that controls which clients can connect
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func handleWebSocket(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println("Error upgrading connection to websocket: ", err)
		return
	}

	defer conn.Close()

	for {
		_, msg, err := conn.ReadMessage()
		if err != nil {
			break
		}
		conn.WriteMessage(websocket.TextMessage, msg) // echo back
	}
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
		MaxPlayers: req.MaxPlayers,
		Players:    map[int]*Player{},
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
	room, exists := rooms[r.PathValue("roomId")]
	if !exists {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	var req JoinRoomRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	playerId := len(room.Players) + 1
	player := Player{
		Id:   playerId,
		Name: req.Name,
		Conn: nil,
	}

	room.Players[playerId] = &player
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
