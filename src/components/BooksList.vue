<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <Header />

    <!-- Book List Container -->
    <div class="flex flex-wrap justify-center items-center mt-8">
      <template v-if="books.length > 0">
        <Book
          v-for="book in books"
          :key="book.id"
          v-bind="book"
          :handleRemoveBook="handleRemoveBook"
        />
      </template>

      <p
        v-else
        class="text-[#0e1b1e] text-3xl font-bold pt-12 ml-2 text-center"
      >
        No Tickets available. Please add some Tickets.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from './Header.vue';
import Book from './Book.vue';

// Reactive array for all books
const books = ref([]);

// Load books from localStorage when component mounts
onMounted(() => {
  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  books.value = storedBooks;
});

// Function to delete a book
const handleRemoveBook = (id) => {
  books.value = books.value.filter((book) => book.id !== id);
  localStorage.setItem('books', JSON.stringify(books.value));
};
</script>

<style scoped>
/* Optional additional styles */
</style>
