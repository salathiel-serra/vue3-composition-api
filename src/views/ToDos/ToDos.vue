<template>
    <h1> 
        Lista de tarefas 
        <router-link :to="{name: 'todos.create'}"> + </router-link>
    </h1>
    <hr>
    <div v-if="isLoading"> Carregando ... </div>
    <ul>
        <li v-for="todo in todoList" :key="todo.identify">
            <to-do :todo="todo"></to-do>
        </li>
    </ul>
</template>

<script>
    import { onMounted, ref } from "vue";
    import TodoService from '@/services/todos.service';
    import ToDo from '@/views/ToDos/ToDo.vue';

    export default {
        name: 'ToDos',
        components: {ToDo},
        setup() {
            const todoList = ref([]);

            const isLoading = ref(false);

            onMounted(() => {
                isLoading.value = true;

                TodoService.getAll()
                    .then(response => {
                        todoList.value = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    .finally(() => {
                        isLoading.value = false;
                    });
            });

            return {
                todoList,
                isLoading
            }
        }

    }
</script>