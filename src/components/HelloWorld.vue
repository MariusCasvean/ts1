<template>
  <h1>Component</h1>
  <h3>{{ msg }}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',

  props: {
    msg: String,
  },
});
</script>
