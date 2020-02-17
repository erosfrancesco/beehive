class EmployedBee extends Bee {
	constructor(foodSource, ...args) {
		super(...args)
		this.foodSource = foodSource
	}

	processFoodSource() {
		console.log("processing food", this.foodSource)
		if (!(this.foodSource && this.foodSource.available)) {
			return 0
		}

		return this.foodSource.extract(this)
	}

	update() {
		super.update()

		const food = this.processFoodSource()
		this.hive.storeFood(food)

		console.log(food)

		// This limit could be changed or set based on...?
		const limit = 0.2
		if (food < limit) {
			this.hive.convertToScout(this.id)
		}
	}
}