<template>
    <div>
        <input type="checkbox" name="completed" :checked="completed" @change="toogleStatus">
        {{ todo.title }} || {{ todo.body }} ||
        <router-link 
            :to="{name: 'todos.edit', params: {id: todo.identify}}"> Editar
        </router-link>
        <a href="#" @click.prevent="deleteTodo"> Remover </a>
    </div>
</template>

<script>
    import { computed } from 'vue';
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
            // METHODs
            const deleteTodo = () => {
                TodoService.deleteTodo(props.todo.identify)
                    .then(() => {
                        emit('todoDeleted', props.todo);
                    })
            };

            const toogleStatus = () => {
                const todoEdit = props.todo;
                const params = {
                    name: todoEdit.title,
                    description: todoEdit.body,
                    completed: !completed.value,
                };

                TodoService.editTodo(props.todo.identify, params)
                    .then(() => {
                        emit('todoUpdated', params);
                    });
            };

            // COMPUTEDs
            const completed = computed(() => {
                return props.todo.completed == 'S';
            })

            return {
                deleteTodo,
                completed,
                toogleStatus
            }
        }
    }
</script>