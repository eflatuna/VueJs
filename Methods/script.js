const app = Vue.createApp({
	data() {
		return {
			firstGoal: "Html",
			website: "https://www.example.com",
		};
	},
	methods: {
		ourGoal() {
			return "HTML";
		},
	},
});

app.mount("#frontend");
