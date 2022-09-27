<template>
    <h1> Lista de tarefas </h1>
    <hr>
    <div v-if="isLoading"> Carregando ... </div>
    <ul>
        <li v-for="todo in todoList" :key="todo.identify">
            {{todo.title}}
        </li>
    </ul>
</template>

<script>
    import { onMounted, ref } from "vue";
    import TodoService from '@/services/todos.service';

    export default {
        name: 'ToDos',
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
            })

            return {
                todoList,
                isLoading
            }
        }

    }
</script>