<script setup lang="ts">
import type { IStory } from '../types'; 
import { computed } from 'vue';

// templates
const props = defineProps<IStory>()

// computers
const difficultyEmoji = computed(() => "★".repeat(props.difficulty) + "☆".repeat(5 - props.difficulty))

</script>

<template>
    <div id="card">
        <p id="difficulty">{{ difficultyEmoji }}</p>
        <p id="title">{{ title }}</p>
        <hr>
        <p id="description">{{ description }}</p>
        <button id="answer-button">show answer</button>
    </div>
</template>

<style scoped lang="scss">

#card {
    margin: 10px;

    transition:
        all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        background-color 0s;
    
    display: flex;
    flex-direction: column;

    height: calc(100vh - 240px);
    // background: #F8F8F8;
    // background: lime
    align-items: center;
    border: 2px solid #000000;
    border-radius: 16px;
    padding-left: 24px;
    padding-right: 24px;  
    padding-top: 28px;
    padding-bottom: 48px;
    gap: 8px;
}

#difficulty {
    align-self: flex-start;
    margin: 0px;
    margin-left: 10px;
    font-size: 18px;
}

#title {
    align-self: flex-start;
    margin: 0px;
    font-size: 28px;
}

hr {
    width: 100%;
}

#description {
    font-size: 22px;
}

#answer-button {
    margin-top: auto;
}

</style>