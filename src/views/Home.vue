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
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from '../components/Header.vue';
import Stat from '../components/Stat.vue';

const route = useRoute();
const router = useRouter();
const userEmail = ref('Guest');

onMounted(() => {
  // 1️⃣ First check if route.state contains an email (from navigation)
  const emailFromRoute = route?.state;

  // 2️⃣ Then check if user data is in localStorage
  const storedUsers = JSON.parse(localStorage.getItem('user')) || [];

  // 3️⃣ If emailFromRoute exists, use it and persist it
  if (emailFromRoute) {
    userEmail.value = emailFromRoute;
    localStorage.setItem('loggedInEmail', emailFromRoute);
  } 
  // 4️⃣ Else, fallback to stored loggedInEmail
  else if (localStorage.getItem('loggedInEmail')) {
    userEmail.value = localStorage.getItem('loggedInEmail');
  }
  // 5️⃣ Finally, fallback to the first stored user's email
  else if (storedUsers.length > 0) {
    userEmail.value = storedUsers[0].email;
  }
});

// Logout function
const logout = () => {
  localStorage.removeItem('loggedInEmail');
  router.push('/Form1');
};
</script>

<style scoped></style>
