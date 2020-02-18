class EmployedBee extends Bee {
	constructor(...args) {
		super(...args)
		this.delta = 0.2
	}

	processFoodSource() {
		if (!(this.foodSource && this.foodSource.available)) {
			return 0
		}

		return this.foodSource.extract(this)
	}

	update() {
		super.update()

		const food = this.processFoodSource()
		this.hive.storeFood(food)

		if (food < this.delta) {
			this.hive.convertToScout(this.id)
		}
	}
}