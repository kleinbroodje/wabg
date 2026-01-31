<script setup lang="ts">
</script>

<template>
    <div id="not-found-container">
        <h1>This page doesn't exist</h1>
        <RouterLink :to="{name: 'home'}">Back to homepage</RouterLink>
    </div>
</template>

<style scoped>
#not-found-container {
    display: flex;
    flex-direction: column;
    height: 500px;
    align-items: center;
    justify-content: center;
}
</style>
