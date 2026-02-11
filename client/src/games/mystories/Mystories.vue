<script setup lang="ts">

import Story from './components/Story.vue';
import { stories } from './stories';

</script>

<template>
    <main>
        <Story
            v-for="(preview, index) in stories"
            :key="index"
            v-bind="preview"
        />
    </main>
</template>

<style scoped>
</style>
