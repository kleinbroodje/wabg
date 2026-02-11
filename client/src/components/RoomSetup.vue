<script setup lang="ts">
import useRoom from '@/composables/room'
import { games } from '@/commons/games';
import { useRouter } from 'vue-router';

const { createRoom } = useRoom()
const router = useRouter()
const props = defineProps<{gameId: string}>()

</script>

<template>
  <div class="btn-container">
    <button @click="createRoom(
      props.gameId, 
      games[props.gameId]!.players[0], 
      games[props.gameId]!.players[1],

    )">
      Create room
    </button>
    <button @click="router.push({name: 'join'})">Join room</button>
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
