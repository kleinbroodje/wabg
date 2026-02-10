<script setup lang="ts">
import {computed } from "vue"
import { useRoute } from "vue-router"
import { games } from "@/commons/games"
import NotFound from "./NotFound.vue"

const route = useRoute()

const game = computed(() => {
  const gameId = route.params.gameId as string
  return games[gameId]
})
</script>

<template>
  <component
    v-if="game"
    :is="game.entry"
  />
  <NotFound v-else />   
</template>