class Hive {
	constructor(numberOfBees) {
		this.bees = []
		this.employed = []
		this.scouts = []
		this.onlookers = []
		this.food = 0
		this.lastDeltaFood = 0

		Array(numberOfBees).forEach(foo => this.addBee())
	}

	//
	addBee() {
		this.bees.push( new Bee(this.bees.length, this) )
	}

	storeFood(value) {
		this.lastDeltaFood += value
	}

	discover() {}

	update() {
		this.lastDeltaFood = 0
		this.bees.forEach(bee => bee.update() )
		this.food += this.lastDeltaFood
	}


	// conversions
	convertToScout(id) {
		// what to do with the exausted foodSource?
		this.bees[id] = new ScoutBee(id, this)
		this.employed.splice(id - 1, 1)
		this.scouts[id] = this.bees[id]
	}

	convertToOnlooker(id) {
		this.bees[id] = new OnlookerBee(id, this)
		this.scouts.splice(id - 1, 1)
		this.onlookers[id] = this.bees[id]
	}

	convertToEmployed(id) {
		const employed = new EmployedBee(id, this)
		const {foodSource, foodSourceHistory} = this.bees[id]
		employed.foodSource = foodSource
		employed.foodSourceHistory = foodSourceHistory

		this.bees[id] = employed
		this.onlookers.splice(id - 1, 1)
		this.employed[id] = employed
	}
}