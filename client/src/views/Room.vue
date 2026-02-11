<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const roomId = computed(() => {return route.params.roomId as string})

</script>

<template>
    <h1>{{ roomId }}</h1>
</template>