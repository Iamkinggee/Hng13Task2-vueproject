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
          class="font-bold text-white p-2 rounded bg-red-700 hover:bg-red-800 transition-all"
          @click="open = true"
        >
          Logout
        </button>
      </div>
    </div>

    <!-- Stats Section -->
    <div>
      <Stat />
    </div>

    <!-- Logout Confirmation Modal -->
    <div
      v-if="open"
      class="fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-sm z-10"
      @click="open = false"
    >
      <div
        class="relative bg-white rounded-xl shadow-lg p-6 w-72 transition-all scale-100 opacity-100"
        @click.stop
      >
        <!-- Close Button -->
        <button
          class="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          @click="open = false"
        >
          ✕
        </button>

        <div class="text-center">
          <!-- Logout Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto text-red-500 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="48"
            height="48"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
            />
          </svg>

          <h3 class="text-lg font-bold text-gray-800">Confirm Logout</h3>
          <p class="text-sm text-gray-500 mt-1 mb-4">
            Are you sure you want to log out, <b>{{ userEmail }}</b>?
          </p>

          <div class="flex gap-3">
            <button
              class="bg-red-500 text-white w-full py-1 rounded hover:bg-red-600 transition-all"
              @click="confirmLogout"
            >
              Logout
            </button>
            <button
              class="bg-gray-200 w-full py-1 rounded hover:bg-gray-300 transition-all"
              @click="open = false"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "../components/Header.vue";
import Stat from "../components/Stat.vue";

const router = useRouter();
const route = useRoute();
const userEmail = ref("Guest");
const open = ref(false);

// ✅ Load user info on page mount
onMounted(() => {
  const emailFromRoute = route.query?.email || null;
  const storedUsers = JSON.parse(localStorage.getItem("user")) || [];

  if (emailFromRoute) {
    userEmail.value = emailFromRoute;
    localStorage.setItem("loggedInEmail", emailFromRoute);
  } else if (localStorage.getItem("loggedInEmail")) {
    userEmail.value = localStorage.getItem("loggedInEmail");
  } else if (storedUsers.length > 0) {
    userEmail.value = storedUsers[0].email;
  }
});

// ✅ Confirm Logout
const confirmLogout = () => {
  localStorage.removeItem("loggedInEmail");
  open.value = false;
  router.push("/Form1"); // Navigate back to login
};
</script>

<style scoped></style>
