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

    <!-- ===== Main Form Section ===== -->
    <div class="flex flex-col items-center justify-center p-4 bg-center h-[500px]">
      <div
        class="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 rounded-md mt-[280px] md:mt-0"
      >
        <!-- ===== FORM ===== -->
        <div class="md:max-w-md w-full px-4 py-6 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] bg-white rounded-2xl">
          <form @submit.prevent="handleSubmit(signin ? 'signIn' : 'signUp')" novalidate>
            <div class="mb-10 text-center">
              <h1
                v-if="!signin"
                class="text-2xl font-bold cursor-pointer text-start"
                @click="signin = false"
              >
                Sign Up
              </h1>
              <h1
                v-if="signin"
                class="text-2xl font-bold cursor-pointer text-start"
                @click="signin = true"
              >
                Sign In
              </h1>
            </div>

            <!-- Email Field -->
            <div>
              <label class="text-slate-900 text-[13px] font-medium block mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
                class="w-full text-slate-900 text-sm border-b focus:border-green-600 pl-2 pr-8 py-3 outline-none transition-all duration-200"
                :class="[emailError ? 'border-red-500' : 'border-slate-300', shake ? 'animate-shake' : '']"
              />
            </div>

            <!-- Password Field -->
            <div class="mt-8">
              <label class="text-slate-900 text-[13px] font-medium block mb-2">Password</label>
              <input
                v-model="form.password"
                type="password"
                required
                placeholder="Enter password"
                class="w-full text-slate-900 text-sm border-b border-slate-300 focus:border-green-600 pl-2 pr-8 py-3 outline-none"
              />
            </div>

            <!-- Submit Button -->
            <div class="mt-10 pb-2">
              <button
                type="submit"
                class="w-full shadow-xl py-2.5 px-4 text-sm font-medium tracking-wide rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none cursor-pointer"
              >
                {{ signin ? 'Sign In' : 'Sign Up' }}
              </button>
            </div>

            <!-- Message -->
            <p v-if="message" :class="`text-sm text-center mt-3 transition-all ${msgType === 'error' ? 'text-red-600' : 'text-green-600'}`">
              {{ message }}
            </p>

            <!-- Toggle Links -->
            <p v-if="!signin" class="text-[15px] mt-6 text-slate-600 text-center">
              Already have an account?
              <a href="#" class="text-green-600 font-medium hover:underline ml-1" @click="signin = true">Sign In</a>
            </p>
            <p v-else class="text-[15px] mt-6 text-slate-600 text-center">
              Don’t have an account?
              <a href="#" class="text-green-600 font-medium hover:underline ml-1" @click="signin = false">Sign Up</a>
            </p>
          </form>
        </div>

        <!-- ===== IMAGE SIDE ===== -->
        <div class="[box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] w-[90%] flex items-center bg-green-600 rounded-[50%] p-8">
          <img :src="manage" alt="Illustration" class="w-full aspect-[15/15] object-contain" />
        </div>
      </div>
    </div>

    <!-- ✅ Continue Popup -->
    <transition name="fadeScale">
      <div
        v-if="showPopup"
        class="fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm z-50"
        @click="showPopup = false"
      >
        <div
          class="bg-white rounded-xl p-6 shadow-xl text-center w-80 animate-fadeScale"
          @click.stop
        >
          <h3 class="text-xl font-bold text-green-600">🎉 Account Created!</h3>
          <p class="text-gray-600 mt-2 mb-4">Your account has been created successfully.</p>
          <button
            class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-all"
            @click="continueToDashboard"
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import manage from '../assets/manage.png';

const router = useRouter();

// Reactive states
const signin = ref(false);
const data = ref([]);
const form = reactive({ email: '', password: '' });
const message = ref('');
const msgType = ref('');
const shake = ref(false);
const emailError = ref(false);
const showPopup = ref(false);

// Load stored users
onMounted(() => {
  const stored = localStorage.getItem('user');
  if (stored) data.value = JSON.parse(stored);
});

// Handle form submission
const handleSubmit = (type) => {
  const userEmail = form.email.trim();
  const userPassword = form.password.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

  if (!emailRegex.test(userEmail)) {
    message.value = "❌ Please enter a valid email address ending with '.com' (e.g. example@gmail.com)";
    msgType.value = 'error';
    emailError.value = true;
    shake.value = true;
    setTimeout(() => (shake.value = false), 400);
    return;
  } else emailError.value = false;

  if (userEmail && userPassword) {
    if (!localStorage.getItem('user')) {
      // First account creation
      localStorage.setItem('user', JSON.stringify([{ email: userEmail, password: userPassword }]));
      localStorage.setItem('loggedInEmail', userEmail);
      message.value = '✅ Account created successfully!';
      msgType.value = 'success';
      showPopup.value = true;
      return;
    } else {
      let found = false;
      for (let val of data.value) {
        if (val.email === userEmail) {
          found = true;
          if (type === 'signUp') {
            message.value = '⚠️ User already exists!';
            msgType.value = 'error';
            signin.value = true;
          } else {
            if (val.password === userPassword) {
              message.value = '✅ Login successful!';
              msgType.value = 'success';
              localStorage.setItem('loggedInEmail', userEmail);
              router.push('/home');
            } else {
              message.value = '❌ Password does not match!';
              msgType.value = 'error';
            }
          }
          break;
        }
      }
      if (!found && type === 'signUp') {
        localStorage.setItem('user', JSON.stringify([...data.value, { email: userEmail, password: userPassword }]));
        localStorage.setItem('loggedInEmail', userEmail);
        message.value = '✅ Account created successfully!';
        msgType.value = 'success';
        showPopup.value = true;
      } else if (!found && type === 'signIn') {
        message.value = '⚠️ User does not exist!';
        msgType.value = 'error';
        signin.value = false;
      }
    }
  }
};

// Continue to dashboard
const continueToDashboard = () => {
  showPopup.value = false;
  router.push('/home');
};
</script>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-6px); }
  40%, 80% { transform: translateX(6px); }
}
.animate-shake { animation: shake 0.3s; }

@keyframes fadeScale {
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}
.animate-fadeScale { animation: fadeScale 0.3s ease-out; }

.fadeScale-enter-active, .fadeScale-leave-active { transition: all 0.3s ease; }
.fadeScale-enter-from, .fadeScale-leave-to { opacity: 0; transform: scale(0.9); }
</style>
