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
                    <span class="name">
                        <span v-html="profile.mood || '&#128578;'" /> {{ profile.fullname }} | {{ profile.age }} years
                    </span>
                    <span class="location">🌏{{ profile.city }}</span>
                    <span class="hobbies">
                        <span v-for="hobby in profile.hobbies" :key="hobby.id">
                            💖{{ hobby.hobby }}
                        </span>
                    </span>
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
