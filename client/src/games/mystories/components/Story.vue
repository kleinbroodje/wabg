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
    <main>
        <div id="card" :class="{ flipped: flipped }">
            <div id="card-inner">
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
                    <button id="show-clue-button" class="flip-button" @click="onFlip()">show clue</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">

main {
    display: flex;
    justify-content: center;
}

// CARD
#card {
    background-color: transparent;
    width: 354px;
    height: 700px;
}

#card.flipped #card-inner {
    transform: rotateY(180deg);
}

#card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
}

// FRONT AND BACK
#card-front, 
#card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-backface-visibility: hidden; 
    backface-visibility: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    align-items: center;
    border: 1px solid #000000;
    border-radius: 16px; 
    padding: 24px;
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

#show-clue-button {
    background-color: white;
    color: black;
}

</style>