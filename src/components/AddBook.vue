<template>
  <div>
    <Nav/>
    
    <BookForm @handleOnSubmit="handleOnSubmit" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Header from './Header.vue';
import Nav from './Nav.vue';
import BookForm from './BookForm.vue';

const router = useRouter();

// Save book to localStorage and navigate
const handleOnSubmit = (book) => {
  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  const updatedBooks = [book, ...storedBooks];
  localStorage.setItem('books', JSON.stringify(updatedBooks));

  router.push('/list');
};
</script>
