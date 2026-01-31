<script setup lang="ts">
import type { IStory } from '../types'; 
import { computed, ref } from 'vue';
import type { Ref } from 'vue';

// templates
const props = defineProps<IStory>()

// refs
const flipped: Ref<boolean> = ref(false);

// computers
const difficultyEmoji = computed(() => "★".repeat(props.difficulty) + "☆".repeat(5 - props.difficulty))

// functions
function onFlip() {
    flipped.value = !flipped.value
}

</script>

<template>
    <div id="card" :class="{ flipped: flipped }">

        <div id="card-front">
            <p id="difficulty">{{ difficultyEmoji }}</p>
            <p id="title">{{ title }}</p>
            <hr>
            <p id="description">{{ description }}</p>
            <button class="flip-button" @click="onFlip()">show answer</button>
        </div>

        <div id="card-back">
            <p id="difficulty">{{ difficultyEmoji }}</p>
            <p id="title">{{ title }}</p>
            <hr>
            <p id="answer-indicator">Answer:</p>
            <p id="answer">{{ answer }}</p>
            <button class="flip-button" @click="onFlip()">show clue</button>
        </div>

    </div>
</template>

<style scoped lang="scss">

// CARD
#card {
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

#card.flipped {
    transform: rotateY(180deg);
}

// FRONT AND BACK
#card-front,
#card-back {
    // 3d shit
    position: absolute;
    backface-visibility: hidden;

    margin: 10px;
    transition:
        all 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    display: flex;
    flex-direction: column;

    width: 300px;
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

hr {
    width: 100%;
}

.flip-button {
    margin-top: auto;
}

// FRONT
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


#description {
    font-size: 22px;
}

// BACK
#card-back {
    // start at opposite angle as the front (and have different colors)
    transform: rotateY(180deg);
    background-color: black;
    color: white;
}

#answer-indicator {
    margin-top: 8px;
    margin-bottom: 0px;
    font-size: 22px;
    align-self: flex-start;
}

#answer {
    font-size: 18px;
}

</style>