import { createRouter, createWebHistory } from 'vue-router';
import Hero from '../views/Hero.vue';
import Form1 from '../views/Form1.vue';
import Home from '../views/Home.vue';
import AddBook from '../components/AddBook.vue';
import BooksList from '../components/BooksList.vue';
import EditBook from '../components/EditBook.vue';



const routes = [
  { path: '/', component: Hero },
  { path: '/form1', component: Form1 },
  { path: '/home', component: Home },
  { path: '/list', component: BooksList },
  { path: '/add', component: AddBook },
  { path: '/edit/:id', component: EditBook },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
