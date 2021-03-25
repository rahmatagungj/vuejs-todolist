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
                localStorage.setItem('lists',JSON.stringify(this.todos))
            } else {
                console.info("data tidak valid")
            }
        },
        removeItem: function(index) {
            this.todos.splice(index,1)
            localStorage.setItem('lists',JSON.stringify(this.todos))
        },
        toggleC: function(todo){
            todo.done = !todo.done
        }
    },
    mounted: function() {
        this.todos = JSON.parse(localStorage.getItem('lists'))
    }
})