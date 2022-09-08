<template>
  <div
    class="avatar"
    :class="{ 'bold': bold }"
    :style="{ background: bgColor, color }"
>
    <span>{{ initials }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Avatar',

    props: {
        initials: {
            type: String,
            required: true,
        },
        bgColor: {
            type: String,
            default: 'lightgrey'
        },
        color: {
            type: String,
            default: 'purple',
        },
        bold: {
            type: Boolean,
            default: false,
        },
    },
});
</script>

<style>
@import "../style/avatar.css"; 
</style>
