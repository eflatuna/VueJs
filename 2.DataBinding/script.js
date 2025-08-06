const app = Vue.createApp({
	data() {
		return {
			firstGoal: "Html",
			website: "https://www.example.com",
		};
	},
	methods: {
		ourGoal() {
			const randomNumber = Math.random();
			if (randomNumber < 0.4) {
				return "Html";
			} else {
				return "Css";
			}
		},
	},
});

app.mount("#frontend");
