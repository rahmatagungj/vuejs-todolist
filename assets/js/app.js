new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: [],
        done: false
    },
    methods: {
        add: function(){
            let itemValid = this.newTodo.trim()
            if (itemValid) {
                this.todos.push({ text: itemValid})
                this.newTodo = '';
            } else {
                console.info("data tidak valid")
            }
        },
        removeItem: function(index) {
            this.todos.splice(index,1)
            // console.log(index);
        }
    }
})