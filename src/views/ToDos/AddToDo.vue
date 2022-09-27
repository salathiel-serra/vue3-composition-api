<template>
    <div>
        <h1>Adicionar nova tarefa</h1>

        <hr>

        <form action="#" method="post" @submit.prevent="addTodo">
            <input type="text" name="title" v-model="todoForm.name" placeholder="Título">
            <input type="text" name="description" v-model="todoForm.description" placeholder="Descrição">

            <button type="submit" :disabled="todoForm.isLoading"> 
                <span v-if="!todoForm.isLoading"> Adicionar </span>
                <span v-else> Adicionando... </span>
            </button>
        </form>
    </div>
</template>

<script>
    import { reactive } from "vue";
    import TodoService from '@/services/todos.service';
    import router from "@/router";

    export default {
        name: 'AddToDo',
        setup() {
            const todoForm = reactive({
                name: '',
                description: '',
                completed: false,
                isLoading: false
            });

            const addTodo = () => {
                todoForm.isLoading = true;

                TodoService.addTodo({...todoForm})
                    .then(() => {
                        router.push({name: 'todos.index'})
                    })
                    .finally(() => {
                        todoForm.isLoading = false;
                    })
            }

            return {
                addTodo,
                todoForm
            }
        }
        
    }
</script>