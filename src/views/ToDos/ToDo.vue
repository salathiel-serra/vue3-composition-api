<template>
    <div>
        {{ todo.title }} || {{ todo.body }}
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