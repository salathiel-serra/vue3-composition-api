<template>
    <div>
        {{ todo.title }} || {{ todo.body }} ||
        <router-link 
            :to="{name: 'todos.edit', params: {id: todo.identify}}"> Editar
        </router-link>
        <a href="#" @click.prevent="deleteTodo"> Remover </a>
    </div>
</template>

<script>
    import TodoService from '@/services/todos.service';

    export default {
        name: 'ToDo',

        props: {
            todo: {
                type: Object,
                require: true
            }
        },

        setup(props, {emit}) {
            
            const deleteTodo = () => {
                TodoService.deleteTodo(props.todo.identify)
                    .then(() => {
                        emit('todoDeleted', props.todo);
                    })
            };

            return {
                deleteTodo
            }
        }
    }
</script>