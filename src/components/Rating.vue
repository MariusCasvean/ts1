<template>
    <span
        v-for="(item, index) in rating"
        :key="index"
        class="rating"
    >
        ⭐
    </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'Rating',

    props: {
        rating: {
            required: true,
            // TODO: check for this type syntax, to be correct
            type: Number as PropType<number>,
        },
    },
})
</script>

<style>
@import "../style/rating.css"; 
</style>
