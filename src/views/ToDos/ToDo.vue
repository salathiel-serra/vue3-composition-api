<template>
    <div>
        {{ todo.title }} || {{ todo.body }} ||
        <router-link 
            :to="{name: 'todos.edit', params: {id: todo.identify}}"> Edit 
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'ToDo',
        props: {
            todo: {
                type: Object,
                require: true
            }
        }
    }
</script>