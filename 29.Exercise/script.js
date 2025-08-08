const app = Vue.createApp({
	data() {
		return {
			todo: "",
			todos: [],
			isVisible: true,
		};
	},
	watch: {},
	computed: {},
	methods: {
		toggleTodosVisbility() {
			this.isVisible = !this.isVisible;
		},
		deleteTodo(index) {
			this.todos.splice(index, 1);
		},
		addTodo() {
			this.todos.push(this.todo);
		},
	},
});

app.mount("#frontend");
