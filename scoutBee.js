class ScoutBee extends Bee {
	constructor(...args) {
		super(...args)
		this.parameters.hiveEmployedRatio = 2 / 3
	}


	get fitness() {
		if (!this.foodSource) {
			return 0
		}
		// some parameters
		const {distance, total, cost} = this.foodSource
		return total / distance / cost
	}


	//
	update() {
		super.update()

		this.foodSource = this.hive.discover()

		// check the history of food source, or the ratio of employed
		if (this.hive.employed.length < this.hive.bees.length * this.parameters.hiveEmployedRatio) {
			this.hive.convertToEmployed(this.id)
		} else {
			this.hive.convertToOnlooker(this.id)
		}
		
		// It should be interesting setting a cost for scouting new resources

		// when it should become a onlooker and when a employed?
	}

}