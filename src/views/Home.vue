<template>
  <div class="w-full">
    <!-- Top Bar -->
    <div class="flex p-2 justify-evenly items-center">
      <!-- Welcome Message -->
      <div class="text-center">
        <p class="text-black font-bold text-xl">Welcome,</p>
        <p>{{ userEmail }}</p>
      </div>

      <!-- Header Component -->
      <Header />

      <!-- Logout Button -->
      <div>
        <button
          class="font-bold text-white p-2 rounded bg-red-700"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </div>

    <!-- Stats Section -->
    <div>
      <Stat />
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import Header from '../components/Header.vue';
import Stat from '../components/Stat.vue';

const route = useRoute();
const router = useRouter();

// Grab email from route state (passed from login)
const userEmail = route?.state || 'Guest';

// Logout function
const logout = () => {
  router.push('/Form1'); // Redirect to login/signup page
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
