import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ToDos from '@/views/ToDos/ToDos.vue';
import AddToDo from '@/views/ToDos/AddToDo.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todos',
    name: 'todos.index',
    component: ToDos
  },
  {
    path: '/todos/create',
    name: 'todos.create',
    component: AddToDo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
