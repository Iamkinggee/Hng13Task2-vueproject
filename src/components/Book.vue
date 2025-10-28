<template>
  <div>
    <!-- Book Card -->
    <div
      class="bg-white rounded-lg shadow-md p-4 w-60 m-1 flex flex-col items-center"
      style="box-shadow: 0 2px 10px -3px rgba(6,81,237,0.3);"
    >
      <h3 className="font-bold text-2xl font-mono py-5 ">{{ bookname }}</h3>

      <div class="book-details text-sm text-gray-700 mb-3">
         <div>Package: <span className="text-xl font-mono">{{author}}</span></div>
         <div>Quantity: <span className="text-xl font-mono">{{quantity}}</span></div>
         <div>Price: <span className="text-xl font-mono">{{price}}</span></div>
        <div>Date: {{ formattedDate }}</div>
      </div>

      <div class="flex gap-2">
        <button
          class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-all font-semibold"
          @click="navigateToEdit"
        >
          Edit
        </button>
        <button
          class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-all font-semibold"
          @click="open = true"
        >
          Delete
        </button>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div
      v-if="open"
      class="fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-sm z-10"
      @click="open = false"
    >
      <div
        class="relative bg-white rounded-xl shadow-lg p-6 w-72 transition-all scale-100 opacity-100"
        @click.stop
      >
        <!-- Close button -->
        <button
          class="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          @click="open = false"
        >
          ✕
        </button>

        <div class="text-center">
          <!-- Trash Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto text-red-500 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="48"
            height="48"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M10 3h4a1 1 0 011 1v2H9V4a1 1 0 011-1z"
            />
          </svg>

          <h3 class="text-lg font-bold text-gray-800">Confirm Delete</h3>
          <p class="text-sm text-gray-500 mt-1 mb-4">
            Are you sure you want to delete <b>{{ bookname }}</b>?
          </p>

          <div class="flex gap-3">
            <button
              class="bg-red-500 text-white w-full py-1 rounded hover:bg-red-600 transition-all"
              @click="confirmDelete"
            >
              Delete
            </button>
            <button
              class="bg-gray-200 w-full py-1 rounded hover:bg-gray-300 transition-all"
              @click="open = false"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  id: [String, Number],
  bookname: String,
  author: String,
  price: [String, Number],
  quantity: [String, Number],
  date: String,
  handleRemoveBook: Function
})

const router = useRouter()
const open = ref(false)

// Navigate to Edit page
const navigateToEdit = () => {
  router.push(`/edit/${props.id}`)
}






// Confirm deletion
const confirmDelete = () => {
  if (typeof props.handleRemoveBook === 'function') {
    props.handleRemoveBook(props.id)
  }
  open.value = false
}

// Format date nicely
const formattedDate = computed(() => {
  if (!props.date) return ''
  return new Date(props.date).toDateString()
})
</script>

<style scoped>
.book-title {
  font-weight: 600;
}
.book-details > div {
  margin-bottom: 0.25rem;
}
</style>
