class Hive {
	constructor(numberOfBees) {
		// bees
		this.bees = []
		this.employed = []
		this.scouts = []
		this.onlookers = []
		// food
		this.food = 0
		this.lastDeltaFood = 0
		
		for(let i = 0; i < numberOfBees; i++) {
			this.addBee()
		}
	}

	//
	addBee() {
		this.bees.push( new Bee(this.bees.length, this) )
	}

	storeFood(value) {
		this.lastDeltaFood += value
	}

	update() {
		this.lastDeltaFood = 0
		// in case extraction / scouting are async?
		// hive must keep track of them? or the bees should report with events?
		this.bees.forEach(bee => bee.update() )
		this.food += this.lastDeltaFood
	}


	// interface
	discover() {}
	extract(bee, foodSource) {}


	// conversions
	convertToScout(id) {
		// what to do with the exausted foodSource?
		const {foodSourceHistory} = this.bees[id]
		const scout = new ScoutBee(id, this, foodSourceHistory)

		this.bees[id] = scout
		this.employed.splice(id - 1, 1)
		this.scouts[id] = scout
	}

	convertToOnlooker(id) {
		const {foodSourceHistory} = this.bees[id]
		const onlooker = new OnlookerBee(id, this, foodSourceHistory)

		this.bees[id] = onlooker
		this.scouts.splice(id - 1, 1)
		this.onlookers[id] = onlooker
	}

	convertToEmployed(id) {
		const {foodSourceHistory} = this.bees[id]
		const employed = new EmployedBee(id, this, foodSourceHistory)

		
		this.bees[id] = employed
		this.employed[id] = employed
		if (!this.bees[id].interactions) {
			// bee is not onlooker, so scout
			this.scouts.splice(id - 1, 1)
		} else {
			this.onlookers.splice(id - 1, 1)
		}
	}
}


