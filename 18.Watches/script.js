const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			lastName: "",
			fullName: "",
		};
	},
	watch: {
		// name() {
		// 	if (this.name === "") {
		// 		this.fullName = "";
		// 	} else {
		// 		this.fullName = this.name + " " + "Bas";
		// 	}
		// },
		name(value) {
			if (value === "") {
				this.fullName = "";
			} else {
				this.fullName = value + " " + this.lastName;
			}
		},
		lastName(value) {
			if (value === "") {
				this.fullName = "";
			} else {
				this.fullName = this.name + " " + value;
			}
		},
	},
	computed: {
		fullNameComputed() {
			console.log("fullNameComputed called");
			if (this.name === "") {
				return "";
			}
			return this.name + " " + "Bas";
		},
	},
	methods: {
		// fullName() {
		// 	// console.log("fullName called");
		// 	if (this.name === "") {
		// 		return "";
		// 	}
		// 	return this.name + " " + "Bas";
		// },
		reset() {
			this.name = "";
			this.lastName = "";
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
