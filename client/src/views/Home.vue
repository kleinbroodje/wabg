<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import GamePreview from '../components/GamePreview.vue';
import { games } from '@/commons/games'

// refs
const openCardId: Ref<string | null> = ref(null);

// functions
function onSetOpen(new_id: string) {
    // check if the same card is clicked: if so, close it (set active to null)
    if (new_id === openCardId.value) {
        openCardId.value = null;
    } else {
        openCardId.value = new_id
    }
}

</script>

<template>
    <main>
        <GamePreview
            v-for="(preview, _, index) in games"
            :key="index"
            v-bind="preview"
            :openCardId="openCardId"
            @set-open="onSetOpen"
        />
    </main>
</template>

<style scoped>

</style>
