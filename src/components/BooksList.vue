<template>
  <div>
    <Header />

    <div class="flex flex-wrap justify-center items-center">
      <!-- Loop through books -->
      <Book
        v-for="book in props.books"
        :key="book.id"
        v-bind="book"
        :handleRemoveBook="handleRemoveBook"
      />

      <!-- Show message if no books -->
      <p v-if="!props.books || props.books.length === 0" class="text-[#0e1b1e] text-3xl font-bold pt-12 ml-2">
        No Tickets available. Please add some Tickets.
      </p>
    </div>
  </div>
</template>

<script setup>
import Book from './Book.vue';
import Header from './Header.vue';

// ✅ Only one defineProps call
const props = defineProps({
  books: Array,
  setBooks: Function
});

// Function to remove a book
const handleRemoveBook = (id) => {
  props.setBooks(props.books.filter((book) => book.id !== id));
};
</script>

<style scoped>
/* optional scoped styling if needed */
</style>
