<script setup lang="ts">
import { computed } from 'vue';
import type { IGamePreview } from '@/commons/types';

// props
const props = defineProps<IGamePreview & { openCardIndex: number | null }>()

// emits
const emit = defineEmits<{
    (e: "setOpen", id: number): void
}>()

// refs


// computers
const formattedPlayers = computed(() => `${props.players[0]}` + (
    props.players[1] === 999
    ? "+"
    : `- ${props.players[1]}`
) + " players")
const isOpen = computed(() => props.openCardIndex === props.id)

// functions
function toggleOpen() {
    emit("setOpen", props.id)
}

</script>

<template>
    <div class="card" :class="{ open: isOpen }">
        <button id="toggle-button" @click="toggleOpen">{{ title }}</button>

        <template v-if="isOpen">
            <p>{{ duration }} min • {{ formattedPlayers }}</p>
            <p id="description">{{ description }}</p>
            <button id="play-button">Play now</button>
        </template>

    </div>  
</template>

<style scoped lang="scss">
.card {
    margin: 10px;
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0s;
    
    &.open {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 400px;
        background: #F8F8F8;
        border: 2px solid #000000;
        border-radius: 16px;
        padding-left: 24px;
        padding-right: 24px;  
        padding-top: 48px;
        padding-bottom: 48px;
    }
}

#description {
    width: 100%;
    height: 100%;
}

#toggle-button {
    color: #000000;
    align-self: flex-start;
    width: auto;
    font-size: 40px;
    background-color: transparent;
    border: none;
    -webkit-tap-highlight-color: transparent;
    padding: 0%;
}

#play-button {
    color: #F8F8F8;
    width: 280px;
    height: 100px;
    background: #000000;
    border-radius: 16px;
    align-self: center;
}
</style>
