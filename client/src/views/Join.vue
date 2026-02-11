<script setup lang="ts">
import useRoom from '@/composables/room';

const {joinRoom} = useRoom()

function onJoinButtonClick() {
    event?.preventDefault()
    const roomId = (document.getElementById("roomId") as HTMLFormElement).value
    joinRoom(roomId)
}
</script>

<template>
    <form @submit="onJoinButtonClick">
        <input type="text" id="roomId">
        <input type="submit" value="join">
    </form>
</template>