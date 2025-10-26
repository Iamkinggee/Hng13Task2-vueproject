<template>
  <div>
    <BookForm :book="bookToEdit" @submitBook="handleOnSubmit" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import BookForm from './BookForm.vue'; // Make sure BookForm is the Vue version

// ✅ Single defineProps call
const props = defineProps({
  books: Array,
  setBooks: Function
});

const router = useRouter();
const route = useRoute();

// Find the book to edit
const bookToEdit = computed(() => {
  return props.books.find(book => book.id === route.params.id);
});

// Handle form submission
const handleOnSubmit = (book) => {
  const filteredBooks = props.books.filter(b => b.id !== route.params.id);
  props.setBooks([book, ...filteredBooks]);
  router.push('/list');
};
</script>
