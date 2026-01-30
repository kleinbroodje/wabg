<script setup lang="ts">
import { ref } from 'vue';

defineProps({
    title: String,
    description: String,
})

const isOpen = ref(false)

function toggleOpen() {
    isOpen.value = !isOpen.value
}

</script>

<template>
    <div class="card" :class="{ open: isOpen }">
        <button id="toggle-button" @click="toggleOpen">{{ title }}</button>
        <p v-if="isOpen">2 min • 2+ players</p>
        <p v-if="isOpen" id="description">{{ description }}</p>
        <button v-if="isOpen" id="play-button">Play now</button>
    </div>  
</template>

<style scoped>
.card {
    margin: 10px;
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0s;
}

.card.open {
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
