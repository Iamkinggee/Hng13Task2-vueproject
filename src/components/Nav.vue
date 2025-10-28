<template>
  <div class="w-full bg-white shadow-md relative z-10">
    <!-- ====== TOP BAR ====== -->
    <div class="flex justify-between items-center px-4 py-3 md:py-4 md:px-8">
      <!-- Welcome Text -->
      <div class="text-center md:text-left">
        <RouterLink to="/home">
          <h1 class="inline-block text-green-600 text-2xl font-extrabold font-mono">
            KingsTickets
          </h1>
        </RouterLink>



        <p class="text-gray-700 text-sm">
          <span class="font-semibold">User : </span>{{ userEmail || "Loading..." }}
        </p>





      </div>

      <!-- Desktop Header Component -->
      <div class="hidden md:flex">
        <Header />
      </div>

      <!-- Desktop Logout Button -->
      <div class="hidden md:block">
        <button
          class="font-bold text-white px-4 py-2 rounded bg-red-700 hover:bg-red-800 transition-all"
          @click="open = true"
        >
          Logout
        </button>
      </div>


      













      <!-- ===== MOBILE HAMBURGER ===== -->
      <button
        class="md:hidden flex flex-col justify-between w-7 h-5 focus:outline-none"
        @click="menuOpen = !menuOpen"
      >
        <span
          class="block h-1 rounded bg-gray-700 transform transition-all duration-300"
          :class="menuOpen ? 'rotate-45 translate-y-2' : ''"
        ></span>
        <span
          class="block h-1 rounded bg-gray-700 transition-all duration-300"
          :class="menuOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="block h-1 rounded bg-gray-700 transform transition-all duration-300"
          :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"
        ></span>
      </button>
    </div>

    <!-- ===== MOBILE MENU ===== -->
    <div
      class="md:hidden absolute top-full left-0 w-full bg-white shadow-md transform transition-all duration-300 origin-top"
      :class="menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'"
    >
      <div class="flex flex-col items-center gap-4 py-4">
        <Header />
        <button
          class="font-bold text-white px-4 py-2 rounded bg-red-700 hover:bg-red-800 transition-all"
          @click="menuOpen = false; open = true"
        >
          Logout
        </button>
      </div>
    </div>

    <!-- ===== LOGOUT CONFIRMATION MODAL ===== -->
    <div
      v-if="open"
      class="fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-sm z-50"
      @click="open = false"
    >
      <div
        class="relative bg-white rounded-xl shadow-lg p-6 w-72 transition-all scale-100 opacity-100 animate-fadeScale"
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
import { useRouter, useRoute, RouterLink } from "vue-router";
import Header from "../components/Header.vue";

const router = useRouter();
const route = useRoute();

const open = ref(false);
const menuOpen = ref(false);
const userEmail = ref("");

// ✅ Load user email from route state or localStorage
onMounted(() => {
  const routeEmail = route?.state?.email;
  const storedEmail = localStorage.getItem("loggedInEmail");

  if (routeEmail) {
    localStorage.setItem("loggedInEmail", routeEmail);
    userEmail.value = routeEmail;
  } else if (storedEmail) {
    userEmail.value = storedEmail;
  }

  // If no email is found, redirect
  if (!userEmail.value) router.push("/");
});

// ✅ Confirm logout
const confirmLogout = () => {
  localStorage.removeItem("loggedInEmail");
  open.value = false;
  userEmail.value = "";
  router.push("/");
};
</script>
