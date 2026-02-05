<script setup lang="ts">
import { createRoom } from '@/commons/api';
import { games } from '@/commons/games';

const props = defineProps({
  id: Number,
})

</script>

<template>
  <div class="btn-container">
    <button @click="createRoom(
      props.id!, 
      games[props.id!]!.players[0], 
      games[props.id!]!.players[1]
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
