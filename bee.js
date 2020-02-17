class Bee {
	constructor(id, hive) {
		this.id = id
		this.hive = hive
		this.foodSourceHistory = []
	}

	get foodSource() {
		return this._foodSource
	}
	set foodSource(v) {
		this._foodSource = v
		this.foodSourceHistory.push(v)
	}

	update() {}
}