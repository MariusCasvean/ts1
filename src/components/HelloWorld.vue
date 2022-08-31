<template>
  <h1>Component</h1>
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
