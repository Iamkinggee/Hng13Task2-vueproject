<template>
  <div class="flex justify-center mt-10 w-full items-center  ">
    <form @submit.prevent="onSubmit" class="bg-white p-8 rounded-xl shadow-md  w-[70%]  max-w-m ">
  

      <div class="mb-4">
        <label class="block text-gray-700"> Name</label>
        <input v-model="book.bookname" type="text" class="border rounded w-full p-2" placeholder="Enter name" required />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700">Package: vip or regular</label>
        <input v-model="book.author" type="text" class="border rounded w-full p-2" required placeholder=" Enter Package" />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700">Quantity</label>
        <input v-model="book.quantity" type="number" class="border rounded w-full p-2" required placeholder="Enter Quantity" />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700">Price</label>
        <input v-model="book.price" type="number" class="border rounded w-full p-2" required placeholder="Enter Price ($)"/>
      </div>

      <button
        type="submit"
        class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
      >
        {{ isEditing ? 'Update Ticket' : 'submit' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(['handleOnSubmit']);
const props = defineProps({
  book: {
    type: Object,
    default: () => ({}),
  },
});

const router = useRouter();

// ✅ Initialize form state
const book = ref({
  id: props.book.id || Date.now().toString(),
  bookname: props.book.bookname || '',
  author: props.book.author || '',
  quantity: props.book.quantity || '',
  price: props.book.price || '',
  date: props.book.date || new Date().toISOString(),
});

// ✅ Computed flag to check if in edit mode
const isEditing = computed(() => !!props.book.id);

// ✅ Watch for prop changes (important for edit mode)
watch(
  () => props.book,
  (newVal) => {
    if (newVal && Object.keys(newVal).length > 0) {
      book.value = { ...book.value, ...newVal };
    }
  },
  { immediate: true }
);

const onSubmit = () => {
  emit('handleOnSubmit', { ...book.value });
};
</script>
