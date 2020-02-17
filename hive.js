class Hive {
	constructor(numberOfBees) {
		this.bees = []
		this.employed = []
		this.scouts = []
		this.onlookers = []
		this.food = 0

		for (let i = 0; i < numberOfBees; i++) {
			this.addBee()
		}
	}

	//
	addBee() {
		this.bees.push( new Bee(this.bees.length, this) )
	}

	storeFood(value) {
		this.food += value
	}

	update() {


		this.bees.forEach(bee => {
			console.log(bee)
			bee.update()
		})
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

	convertToEmployed(id, foodSource) {
		this.bees[id] = new EmployedBee(foodSource, id, this)
		this.onlookers.splice(id - 1, 1)
		this.employed[id] = this.bees[id]
	}
}