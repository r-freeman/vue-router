<template>
    <nav>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
    </nav>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
nav {
    display: flex;
    justify-content: center
}

nav a {
    margin: 0 10px;
}
</style>
