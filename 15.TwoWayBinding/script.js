const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
		};
	},
	methods: {
		reset() {
			this.name = "";
		},
		login() {
			alert("Form submitted!");
		},
		setName(event) {
			// debugger;
			this.name = event.target.value;
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
