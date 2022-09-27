<template>
    <h1> 
        Lista de tarefas 
        <router-link :to="{name: 'todos.create'}"> <i class="fas fa-plus-square"></i> </router-link>
    </h1>
    <hr>
    <div v-if="isLoading"> Carregando ... </div>
    <ul>
        <li v-for="todo in todoList" :key="todo.identify">
            <to-do 
                :todo="todo" 
                @todoDeleted="removeTodoList"
                @todoUpdated="todoUpdated">
            </to-do>
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

            const removeTodoList = (todo) => {
                todoList.value.splice( todoList.value.indexOf(todo), 1 );
            };

            const todoUpdated = (todo) => {
                const todoIndex = todoList.value.indexOf(todo);
                todoList[todoIndex] = todo;
            };

            return {
                todoList,
                isLoading,
                removeTodoList,
                todoUpdated
            }
        }

    }
</script>