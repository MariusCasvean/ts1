<template>
    <h4>Here we have a list of jokes for you</h4>
    <button @click="getJoke()">
        Press me to get a random joke
    </button>
    <p>Joke:</p>
    <h3 class="joke">{{ joke }}</h3>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Jokes',

    setup() {
        const joke = ref('Nothing here yet!');

        const getJoke = async () => {
            const res = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await res.json();

            joke.value = data.value;
        };

        return { joke, getJoke };
    }
});
</script>

<style>
@import "../style/jokes.css"; 
</style>
