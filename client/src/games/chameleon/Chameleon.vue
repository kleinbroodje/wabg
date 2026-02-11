<script setup lang="ts">
import useRoom from '@/composables/room'
import { games } from '@/commons/games';

const { createRoom, joinRoom } = useRoom()

</script>

<template>
  <div class="btn-container">
    <button @click="createRoom(
      'chameleon', 
      games.chameleon!.players[0], 
      games.chameleon!.players[1],

    )">
      Create room
    </button>
    <button>Join room</button>
  </div>
</template>

<style scoped>
.btn-container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
