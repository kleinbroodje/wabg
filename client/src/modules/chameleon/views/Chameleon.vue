<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

async function createRoom() {
    console.log(router.getRoutes())
    const response = await fetch("/api/chameleon/rooms", {
        method: "POST",
    });
try {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    router.push({ name: "chameleonRoom", params: { id: String(result.RoomId)}})
    console.log(result);
  } catch (error : any) {
    console.error(error.message);
  }
}
</script>

<template>
  <div class="btn-container">
    <button @click="createRoom">Create room</button>
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
