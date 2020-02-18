class ScoutBee extends Bee {
	constructor(...args) {
		super(...args)
	}


	get foodSourceValue() {
		if (!this.foodSource) {
			return 0
		}
		// some parameters
		const {distance, available, cost} = this.foodSource
		return available / distance / cost
	}


	//
	update() {
		super.update()

		this.foodSource = this.hive.discover()

		// check the history, or the ratio of employed
		if (this.hive.employed.length < this.hive.bees.length * 2 / 3) {
			this.hive.convertToEmployed(this.id)
		} else {
			this.hive.convertToOnlooker(this.id)
		}
		
		// It should be interesting setting a cost for scouting new resources

		// when it should become a onlooker and when a employed?
	}

}