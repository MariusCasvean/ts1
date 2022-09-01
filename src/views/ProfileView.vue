<template>
  <h3>This is my profile</h3>
  <avatar
    initials="MC"
    color="brown"
    bgColor="white"
    bold
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Avatar from '../components/Avatar.vue';

export default defineComponent({
  name: 'ProfileView',

  components: {
    Avatar,
  },
});
</script>
