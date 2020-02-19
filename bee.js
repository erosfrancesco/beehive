class Bee {
	constructor(id, hive, foodSourceHistory) {
		this.id = id
		this.hive = hive
		this.foodSourceHistory = foodSourceHistory || []
		this.parameters = {}
	}

	get foodSource() {
		return this.foodSourceHistory[this.foodSourceHistory.length - 1]
	}
	set foodSource(v) {
		this.foodSourceHistory.push(v)
	}

	update() {}
}