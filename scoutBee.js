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

		this.hive.convertToEmployed(this.id)
		
		// Get new foodSource
		// void for now. It should be interesting setting a cost for scouting new resources

		// when it should become a onlooker and when a employed?
		// how to get a new food resource?
	}

}