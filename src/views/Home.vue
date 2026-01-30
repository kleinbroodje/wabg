<script setup lang="ts">
import { ref } from 'vue';
import GamePreview from '../components/GamePreview.vue';

const showCover = ref(true)
</script>

<template>
    <div v-if="showCover" id="cover">
        <h1>We are Bored Games</h1>
    </div>

    <GamePreview 
        title="Werewolves"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
    />
    <GamePreview 
        title="30 seconds"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
    />
    <GamePreview 
        title="Chameleon"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
    />
</template>

<style scoped>
#cover {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
}
</style>
