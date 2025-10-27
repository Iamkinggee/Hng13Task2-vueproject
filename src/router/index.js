import { createRouter, createWebHistory } from 'vue-router';
import Hero from '../views/Hero.vue';
import Form1 from '../views/Form1.vue';
import Home from '../views/Home.vue';
import AddBook from '../components/AddBook.vue';
import BooksList from '../components/BooksList.vue';
import EditBook from '../components/EditBook.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddBook',
    component: AddBook,
  },
  {
    path: '/edit/:id',
    name: 'EditBook',
    component: EditBook,
    props: true,
  },
  {
    path: '/list',
    name: 'BooksList',
    component: BooksList,
  },
  // Optional: catch-all for undefined routes
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
