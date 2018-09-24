let app = new Vue({
    el: '#app',
    data: {
        title : "to do list",
        UserName : ""           
    },
    methods: {
        titleUpperCase() {
            this.title = this.title.toUpperCase()
        }
    }
})