<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 p-5 text-black mt-6">
    <!-- Total Tickets -->
      <!-- Closed Tickets -->
    <div class="p-4  items-center text-center bg-gray-200 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] h-[200px] bg-green-100">
      <p class="text-2xl mt-5 font-semibold">RESOLVED TICKETS</p>
      <h1 className="text-4xl font items-center h-full p-5 ">478</h1>
    </div>

    <!-- Opened Tickets -->
  
    <div class="p-4  items-center text-center bg-gray-200 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] h-[200px] bg-red-100">
      <p class="text-2xl mt-5 font-semibold">OPENED TICKETS</p>
      <h1 className="text-4xl  items-center h-full p-5 ">42</h1>
    </div>

    <!-- Closed Tickets -->
    <div class="p-4  items-center text-center bg-gray-200 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] h-[200px] bg-gray-200">
      <p class="text-2xl mt-5 font-semibold">TOTAL TICKETS</p>
      <h1 className="text-4xl  items-center h-full p-5 ">42</h1>
    </div>
  </div>
</template>

<script setup>
// No state or props needed
</script>

<style scoped>
/* Optional extra styling */
</style>
