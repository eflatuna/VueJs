const app = Vue.createApp({
	data() {
		return {
			firstGoal: "HTML",
			secondGoal: "<h3>CSS</h3>",
			website: "https://www.example.com",
		};
	},
	methods: {
		ourGoal() {
			const randomNumber = Math.random();
			if (randomNumber < 0.4) {
				return this.firstGoal;
			} else {
				return this.secondGoal;
			}
		},
	},
});

app.mount("#frontend");
