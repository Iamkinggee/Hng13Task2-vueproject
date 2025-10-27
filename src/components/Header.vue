<template>
  <header class="text-center my-2">

    <router-link to="/home">
      <h1 class="inline-block p-5 text-black text-4xl font-old font-mono">KingsTickets</h1>
    </router-link>
    <hr class="my-2 border-gray-600" />
    <div class="uppercase text-center text-xl mb- p-5">
    
      <router-link to="/home" class="px-3 py-1 mx-4 font-bold hover:border-white">Home</router-link>
    
      <router-link to="/list" class="px-3 py-1 mx-4 font-bold hover:border-white">Ticket List</router-link>

      <router-link to="/add" class="px-3 py-1 mx-4 font-bold text-black hover:border-white">Add TICKET</router-link>
    </div>

  </header>
</template>

<script setup></script>
