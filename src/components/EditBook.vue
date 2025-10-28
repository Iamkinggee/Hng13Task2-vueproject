<template>
  <div className="pt-12">
 <Nav/>

    

    

    <div v-if="bookToEdit">
      <BookForm
        :book="bookToEdit"
        mode="edit"
        @handleOnSubmit="handleOnSubmit"
      />
    </div>

    <p v-else class="text-center mt-6 text-gray-600">Loading book...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Nav from './Nav.vue';
import BookForm from './BookForm.vue';

const route = useRoute();
const router = useRouter();
const bookToEdit = ref(null);

onMounted(() => {
  const id = route.params.id;
  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  const found = storedBooks.find((b) => String(b.id) === String(id));
  bookToEdit.value = found ? { ...found } : null;
});

const handleOnSubmit = (updatedBook) => {
  const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
  const id = route.params.id;
  const filtered = storedBooks.filter((b) => String(b.id) !== String(id));
  const updatedList = [updatedBook, ...filtered];
  localStorage.setItem('books', JSON.stringify(updatedList));
  router.push('/list');
};
</script>
