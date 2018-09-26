<template>
    <div>
        <input type="checkbox" v-model = "todo.done">
        <span>
            {{todo.task}}
        </span>
        <span>
            {{msg.data}}
        </span>
    </div>
</template>

<script>
export default {
    props: ['todo', 'msg']
}
</script>

<style scoped>
    div {
        color: red;
    }
</style>


