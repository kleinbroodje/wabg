<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import GamePreview from '../components/GamePreview.vue';
import { gamePreviews } from '@/commons/gamePreviews'

// refs
const openCardIndex: Ref<number | null> = ref(null);

// functions
function onSetOpen(new_id: number) {
    // check if the same card is clicked: if so, close it (set active to null)
    if (new_id === openCardIndex.value) {
        openCardIndex.value = null;
    } else {
        openCardIndex.value = new_id
    }
}

</script>

<template>
    <GamePreview
        v-for="(preview, index) in gamePreviews"
        :key="index"
        v-bind="preview"
        :openCardIndex="openCardIndex"
        @set-open="onSetOpen"
    />
</template>

<style scoped></style>
