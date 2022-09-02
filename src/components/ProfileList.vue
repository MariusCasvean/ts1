<template>
    <div class="profile-list">
        <ul>
            <li
                v-for="profile in profiles"
                :key="profile.id"
                class="profile"
            >
                <avatar :initials="profile.initials" />
                <div>
                    <span class="name">{{ profile.fullname }}</span>
                    <span class="location">{{ profile.city }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Profile } from '../types/Profile';
import Avatar from '../components/Avatar.vue';

export default defineComponent({
    components: {
        Avatar,
    },

    props: {
        profiles: {
            required: true,
            type: Array as PropType<Profile[]>,
        },
    },
})
</script>

<style>
@import "../style/profile-list.css"; 
</style>
