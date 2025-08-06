const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		add() {
			this.counter++;
		},
		reduce() {
			this.counter = this.counter - 1;
		},
	},
});

app.mount("#frontend");
