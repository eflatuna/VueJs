const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
		};
	},
	methods: {
		setName(event, lastName) {
			debugger;
			this.name = event.target.value + " " + lastName;
		},
		add(number) {
			this.counter = this.counter + number;
		},
		reduce(number) {
			this.counter = this.counter - number;
		},
	},
});

app.mount("#frontend");
