function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
	data() {
		return {
			winner: null,
			myHealth: 100,
			computerHealth: 100,
		};
	},
	watch: {},
	computed: {
		computerBarStyles() {
			if (this.computerHealth < 0) {
				return { width: "0%" };
			} else {
				return { width: this.computerHealth + "%" };
			}
		},
		myBarStyles() {
			if (this.myHealth < 0) {
				return { width: "0%" };
			} else {
				return { width: this.myHealth + "%" };
			}
		},
	},
	methods: {
		attackToComputer() {
			const attackValue = getRandomValue(7, 15);
			this.computerHealth = this.computerHealth - attackValue;
			this.attackMe();
		},
		attackMe() {
			const attackValue = getRandomValue(10, 20);
			this.myHealth = this.myHealth - attackValue;
		},
		specialAttack() {
			const attackValue = getRandomValue(15, 30);
			this.computerHealth = this.computerHealth - attackValue;
			this.attackMe();
		},
		healMe() {
			const healValue = getRandomValue(15, 20);
			this.myHealth = this.myHealth + healValue;
			this.attackMe();
		},
	},
});

app.mount("#frontend");
