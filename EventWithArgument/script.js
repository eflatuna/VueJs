const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		add(number) {
			this.counter = this.counter + number;
		},
		reduce(number) {
			this.counter = this.counter - number;
		},
	},
});

app.mount("#frontend");
