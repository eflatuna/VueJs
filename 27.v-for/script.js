const app = Vue.createApp({
	data() {
		return {
			skills: [],
			skill: "",
		};
	},
	watch: {},
	computed: {},
	methods: {
		addSkill() {
			debugger;
			this.skills.push(this.skill);
		},
	},
});

app.mount("#frontend");
