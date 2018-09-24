let app = new Vue({
    el: '#app',
    data: {
        title : "to do list",
        taskList : [],
        newTask: "",       
    },
    methods: {
        titleUpperCase() {
            this.title = this.title.toUpperCase()
        },
        addTask() {
            console.log("running")
            this.taskList.push({name : this.newTask, done : false})
        }
    }
})