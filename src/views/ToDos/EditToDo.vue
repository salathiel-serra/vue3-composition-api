<template>
    <div>
        <h1>Atualizar tarefa</h1>

        <hr>

        <form action="#" method="post" @submit.prevent="editTodo">
            <input type="text" name="title" v-model="todoForm.name" placeholder="Título">
            <input type="text" name="description" v-model="todoForm.description" placeholder="Descrição">

            <button type="submit" :disabled="todoForm.isLoading"> 
                <span v-if="!todoForm.isLoading"> Atualizar </span>
                <span v-else> Atualizando... </span>
            </button>
        </form>
    </div>
</template>

<script>
    import { onMounted, reactive } from "vue";
    import TodoService from '@/services/todos.service';
    import router from "@/router";

    export default {
        name: 'EditToDo',

        props: {
            id: {
                require: true
            }
        },

        setup(props) {
            const todoForm = reactive({
                name: '',
                description: '',
                completed: false,
                isLoading: false
            });

            onMounted(async () => {
                todoForm.isLoading = true;

                TodoService.getTodo(props.id)
                    .then(response => {
                        const todoResponse = response.data.data;
                        todoForm.name = todoResponse.title;
                        todoForm.description = todoResponse.body;
                        todoForm.completed = todoResponse.completed == 'S';
                    })
                    .finally(()=>{
                        todoForm.isLoading = false;
                    });
            });

            const editTodo = () => {
                todoForm.isLoading = true;

                TodoService.editTodo(props.id, {...todoForm})
                    .then(() => {
                        router.push({name: 'todos.index'})
                    })
                    .finally(() => {
                        todoForm.isLoading = false;
                    })
            }

            return {
                editTodo,
                todoForm
            }
        }
        
    }
</script>