const app = Vue.createApp({
	data() {
		return {
			number: 0,
		};
	},
	watch: {},
	computed: {
		result() {
			if (this.number < 25) {
				return "Counter is less than 25";
			} else if (this.number == 25) {
				return this.number;
			} else {
				return "Counter is greater than 25";
			}
		},
	},
	methods: {
		add(num) {
			this.number = this.number + num;
		},
		reduce(num) {
			this.number = this.number - num;
		},
	},
});

app.mount("#frontend");
