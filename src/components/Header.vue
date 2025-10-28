<template>
  <div class="text-center my-4">
    <div
      class="
        uppercase 
        text-xl 
        mb-5 
        flex 
        flex-col 
        items-center 
        space-y-2 
        md:flex-row 
        md:justify-center 
        md:space-x-6 
        md:space-y-0
      "
    >
      <RouterLink
        to="/home"
        :class="linkClass('/home')"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/list"
        :class="linkClass('/list')"
      >
        Ticket List
      </RouterLink>

      <RouterLink
        to="/add"
        :class="linkClass('/add')"
      >
        Add Ticket
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();

// Function to apply active styles
const linkClass = (path) => {
  const base = 'px-3 py-1 font-bold transition-all duration-300 no-underline hover:no-underline';
  return route.path === path
    ? `${base} text-black border-b-2 border-green-600`
    : `${base} text-gray-700 hover:text-green-600`;
};
</script>
