<script setup lang="ts">
import { computed, setDevtoolsHook } from 'vue';
import type { Game } from '@/commons/types';
import { useRouter } from 'vue-router';

// props
const props = defineProps<Game & { openCardIndex: number | null }>()

// emits
const emit = defineEmits<{
    (e: "setOpen", id: number): void
}>()

// consts
const router = useRouter()

// computers
const formattedPlayers = computed(() => `${props.players[0]}` + (
    isFinite(props.players[1])
    ? `- ${props.players[1]}`
    : "+"
) + " players")
const isOpen = computed(() => props.openCardIndex === props.id)

// functions
function toggleOpen() {
    emit("setOpen", props.id)
}

</script>

<template>
    <div class="card" :class="{ open: isOpen }" :style="{ backgroundColor: isOpen ? props.color : '#FFFFFF' }">
        <button id="toggle-button" @click="toggleOpen">{{ title }}</button>

        <template v-if="isOpen">
            <p id="info">{{ duration }} min • {{ formattedPlayers }}</p>
            <p id="description">{{ description }}</p>
            <button id="play-button" @click="router.push(props.route)">Play now</button>
        </template>

    </div>  
</template>

<style scoped lang="scss">
.card {
    margin: 10px;

    transition:
        all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        background-color 0s;
    
    &.open {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 400px;
        // background: #F8F8F8;
        // background: lime
        border: 2px solid #000000;
        border-radius: 16px;
        padding-left: 24px;
        padding-right: 24px;  
        padding-top: 48px;
        padding-bottom: 48px;
    }
}

#info {
    font-size: 18px;;
}

#description {
    width: 100%;
    height: 100%;
    font-size: 16px;
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
    align-self: center;
    flex-shrink: 0;
}
</style>
