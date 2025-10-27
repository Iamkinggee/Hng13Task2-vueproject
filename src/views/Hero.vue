<template>
  <div class="h-full relative">
    <div class="custom-shape-divider-bottom-1761434110">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 110" preserveAspectRatio="none">
        <path class="fill-green-600" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
    </div>

    <div class="flex flex-col md:flex-row h-[400px] justify-center items-center gap-20 p-4">
      <div class="flex-1 px-10">
        <h1 class="font-mono text-black text-3xl font-bold mb-6">KingsTickets</h1>
        <p class="text-[20px] text-black mt-6">
          Manage, track and resolve tickets effortlessly with our intuitive CRUD-based ticket management system.
        </p>

        <div class="flex flex-col md:flex-row gap-5 mt-6">
          <router-link to="/form1">
            <button class="w-[250px] h-[60px] rounded bg-green-600 text-white font-bold">Login</button>
          </router-link>
          <router-link to="/form1">
            <button class="w-[250px] h-[60px] rounded text-black font-bold border-2 border-green-600">Get started</button>
          </router-link>
        </div>
      </div>

      <div class="flex-1  rounded-[100%] pt-[160px] p-8 flex items-center justify-center ">
        <img src="../assets/manage.png" alt="Illustration" class="bg-green-600 rounded-[100%] p- aspect-[15/15] object-contain"/>
      </div>
    </div>
  </div>
</template>

<script setup></script>
