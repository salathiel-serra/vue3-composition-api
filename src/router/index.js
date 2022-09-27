import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ToDos from '@/views/ToDos/ToDos.vue';
import AddToDo from '@/views/ToDos/AddToDo.vue';
import EditToDo from '@/views/ToDos/EditToDo.vue';

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
  },
  {
    path: '/todos/:id/edit',
    name: 'todos.edit',
    component: EditToDo,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
