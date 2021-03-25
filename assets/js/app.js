new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: [],
        done: true
    },
    methods: {
        add: function(){
            let itemValid = this.newTodo.trim()
            if (itemValid) {
                this.todos.push({ text: itemValid,done: false})
                this.newTodo = '';
            } else {
                console.info("data tidak valid")
            }
        },
        removeItem: function(index) {
            this.todos.splice(index,1)
            // console.log(index);
        },
        toggleC: function(todo){
            todo.done = !todo.done
        }
    }
})