<template>
  <h3>Profile List</h3>
  <profile-list 
    :profiles="profiles"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Profile } from '../types/Profile';
import ProfileList from '../components/ProfileList.vue';

export default defineComponent({
  name: 'ProfileView',

  components: {
    ProfileList,
  },

  setup() {
    const profiles = ref<Profile[]>([
      {
        id: 1,
        fullname: 'Ion Pop',
        age: 22,
        city: 'Sovata',
        initials: 'IP',
        hobbies: [
          { id: 1, hobby: 'Fishing', rating: 5 },
          { id: 2, hobby: 'Reading', rating: 4 },
          { id: 3, hobby: 'Trips', rating: 4 },
        ],
      },
      {
        id: 2,
        fullname: 'Cristi Anghelescu',
        age: 33,
        city: 'Cugir',
        initials: 'CA',
        hobbies: [
          { id: 1, hobby: 'Cooking', rating: 5 },
        ],
      },
      {
        id: 3,
        fullname: 'Paul Constantin',
        age: 43,
        city: 'Navodari',
        initials: 'PC',
        hobbies: [
          { id: 1, hobby: 'Sailing', rating: 5 },
          { id: 2, hobby: 'Photography', rating: 3 },
        ],
      },
    ]);

    return { profiles };
  }
});
</script>
