<script setup>
import { useRouter } from 'vue-router'; // ✅
import BookForm from './BookForm.vue';
import Header from './Header.vue';

// ✅ Single defineProps() call
defineProps({
  books: Array,
  setBooks: Function
});

const router = useRouter();

// Function to handle submission
const handleOnSubmit = (book) => {
  // @ts-ignore
  props.setBooks([book, ...props.books]);
  router.push('/list');
};
</script>

<template>
  <Header />
  <BookForm @handleOnSubmit="handleOnSubmit" />
</template>
