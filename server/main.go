package main

import (
	"encoding/json"
	"fmt"
	"math/rand/v2"
	"net/http"

	"github.com/gorilla/websocket"
)

type Room struct {
	RoomId string
}

// consts
const roomIdLength int = 4

var roomIds = []Room{}
var upgrader = websocket.Upgrader{
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

	fmt.Println("Client connected")
}

// creates a new room and returns the room to the client
func handleCreateRoom(w http.ResponseWriter, r *http.Request) {

	//create new room instance
	roomId := generateRoomId(roomIdLength, roomIds)
	room := Room{RoomId: roomId}

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
	roomIds = append(roomIds, room)
	w.WriteHeader(http.StatusCreated)
	w.Write(j)
}

func generateRoomId(length int, currentRoomIds []Room) string {
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
	mux.HandleFunc("POST /api/room", handleCreateRoom)
	mux.HandleFunc("/ws", handleWebSocket)

	fmt.Println("Websocket server started on on port 8080")
	if err := http.ListenAndServe(":8080", mux); err != nil {
		fmt.Println("Error starting server: ", err)
	}
}
