<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

import GamePreview from '../components/GamePreview.vue';
import _gamePreviewsJson from '@/static/gamePreviews.json'
import type { IGamePreview } from "@/commons/types.ts"

// globals
const previews: IGamePreview[] = _gamePreviewsJson as IGamePreview[];

// refs
const openCardIndex: Ref<number | null> = ref(null);

// functions
function onSetOpen(new_id: number) {
    openCardIndex.value = new_id
}

</script>

<template>
    <GamePreview
        v-for="(preview, index) in previews"
        :key="index"
        v-bind="preview"
        :openCardIndex="openCardIndex"
        @set-open="onSetOpen"
    />
</template>

<style scoped></style>
