import { v4 as uuidv4 } from 'uuid';


<template>
  <div class="text-[#222] text-lg w-[70%] mx-auto mt-12 pt-10 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] p-10">
    <p v-if="errorMsg" class="text-[#f21e08] bg-[#fff0f0] p-2 rounded">{{ errorMsg }}</p>
    <form @submit.prevent="handleOnSubmit">
      <div class="mb-6">
        <label class="block font-semibold mb-2">Name</label>
        <input
          type="text"
          v-model="book.bookname"
          placeholder="Enter Name"
          class="block w-full border border-gray-300 text-gray-600 bg-white h-12 text-lg rounded-none mb-6 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-300"
        />
      </div>

      <div class="mb-6">
        <label>Package: vip or regular</label>
        <input
          type="text"
          v-model="book.author"
          placeholder="Enter Package"
          class="block w-full border border-gray-300 text-gray-600 bg-white h-12 text-lg rounded-none mb-6 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-300"
        />
      </div>

      <div class="mb-6">
        <label>Quantity</label>
        <input
          type="number"
          v-model="book.quantity"
          placeholder="Enter Quantity"
          class="block w-full border border-gray-300 text-gray-600 bg-white h-12 text-lg rounded-none mb-6 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-300"
        />
      </div>

      <div class="mb-6">
        <label>Price</label>
        <input
          type="text"
          v-model="book.price"
          placeholder="Enter Price ($)"
          class="block w-full border border-gray-300 text-gray-600 bg-white h-12 text-lg rounded-none mb-6 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-300"
        />
      </div>

      <button type="submit" class="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded transition-all duration-300 w-full">
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

// ✅ Single defineProps() call
const props = defineProps({
  book: Object,
  handleOnSubmit: Function
});

const book = reactive({
  bookname: props.book?.bookname || '',
  author: props.book?.author || '',
  quantity: props.book?.quantity || '',
  price: props.book?.price || '',
  date: props.book?.date || ''
});

const errorMsg = ref('');

const handleOnSubmit = () => {
  const values = [book.bookname, book.author, book.price, book.quantity];
  if (values.every(v => v !== '' && v !== '0')) {
    const newBook = {
      id: uuidv4(),
      ...book,
      date: new Date()
    };
    props.handleOnSubmit(newBook);
  } else {
    errorMsg.value = 'Please fill out all the fields.';
  }
};
</script>
