class EmployedBee extends Bee {
	constructor(...args) {
		super(...args)
		this.parameters.minAvailable = 0.2
	}

	processFoodSource() {
		if (!this.foodSource) {
			return 0
		}

		if (this.available === null || this.available === undefined) {
			this.available = this.foodSource.total
		}

		const extracted = this.hive.extract(this, this.foodSource)
		this.available -= extracted
		// this.available -= this.foodSource.extractionCost
		return extracted
	}

	update() {
		super.update()

		const food = this.processFoodSource()
		this.hive.storeFood(food)

		if (food < this.parameters.minAvailable) {
			this.hive.convertToScout(this.id)
		}
	}
}