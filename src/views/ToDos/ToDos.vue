<template>
    <h1> Lista de tarefas </h1>
    <hr>
    <ul>
        <li v-for="todo in todoList" :key="todo.identify">{{todo.title}}</li>
    </ul>
</template>

<script>
    import { onMounted, ref } from "vue";
    import TodoService from '@/services/todos.service';

    export default {
        name: 'ToDos',
        setup() {
            const todoList = ref([]);

            onMounted(() => {
                TodoService.getAll()
                    .then(response => {
                        // console.log(response);
                        todoList.value = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })

            return {
                todoList
            }
        }

    }
</script>