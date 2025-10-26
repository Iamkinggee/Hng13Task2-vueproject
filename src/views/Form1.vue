<template>
  <div class="relative h-screen">
    <!-- SVG Shape -->
    <div class="custom-shape-divider-bottom-1761434110">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 110"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="fill-green-600"
        />
      </svg>
    </div>

    <div class="flex flex-col items-center justify-center p-4 h-[500px]">
      <div class="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full p-4">
        <!-- Form -->
        <div class="md:max-w-md w-full px-4 py-6 bg-white rounded-2xl shadow-lg">
          <form @submit.prevent="handleSubmit">
            <div class="mb-10 text-center">
              <h1
                class="text-2xl font-bold cursor-pointer"
                v-if="!signin"
                @click="signin = false"
              >
                Sign Up
              </h1>
              <h1
                class="text-2xl font-bold cursor-pointer"
                v-if="signin"
                @click="signin = true"
              >
                Sign In
              </h1>
            </div>

            <!-- Email Input -->
            <div>
              <label class="block mb-2 text-[13px] font-medium text-slate-900">Email</label>
              <input
                v-model="email"
                type="email"
                placeholder="Enter email"
                class="w-full text-slate-900 text-sm border-b pl-2 pr-8 py-3 outline-none border-slate-300 focus:border-green-600"
              />
            </div>

            <!-- Password Input -->
            <div class="mt-8">
              <label class="block mb-2 text-[13px] font-medium text-slate-900">Password</label>
              <input
                v-model="password"
                type="password"
                placeholder="Enter password"
                class="w-full text-slate-900 text-sm border-b border-slate-300 pl-2 pr-8 py-3 outline-none focus:border-green-600"
              />
            </div>

            <!-- Submit -->
            <div class="mt-10 pb-2">
              <button
                type="submit"
                class="w-full py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-green-600 hover:bg-green-500"
              >
                {{ signin ? 'Sign In' : 'Sign Up' }}
              </button>
            </div>

            <!-- Message -->
            <p
              v-if="message"
              :class="msgType === 'error' ? 'text-red-600 text-center mt-3' : 'text-green-600 text-center mt-3'"
            >
              {{ message }}
            </p>
          </form>
        </div>

        <!-- Illustration -->
        <div class="w-[90%] flex items-center bg-green-600 rounded-full p-8 shadow-lg">
         <img :src="manage" alt="Illustration" class="w-full aspect-[15/15] object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import manage from '../assets/manage.png'; 


const router = useRouter();
const signin = ref(false);
const email = ref('');
const password = ref('');
const message = ref('');
const msgType = ref('');

const handleSubmit = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
  if (!emailRegex.test(email.value)) {
    message.value = "❌ Please enter a valid email ending with '.com'";
    msgType.value = 'error';
    return;
  }
  message.value = '✅ Success!';
  // Example navigation:
  // router.push('/home');
};
</script>

<style scoped>
/* Removed shake animation, safe for Vue 3 */
</style>
