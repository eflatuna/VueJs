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
		deleteSkill(index) {
			this.skills.splice(index, 1);
		},
		addSkill() {
			debugger;
			this.skills.push(this.skill);
		},
	},
});

app.mount("#frontend");
