<template>
    <div>
        <h1>Todo List</h1>
        <ul>
            <li v-for="todo in todos">
                <TodoItem :todo="todo" :msg="{data : 'abc'}"/>
            </li>
        </ul>
    </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'
export default {
  components: { TodoItem },
  data() {
      return {
          todos: [
            {task: 'first task', done: true},
            {task: 'second task', done: false},
            {task: 'first task', done: true}
          ]
      }
  }
      
}
</script>
