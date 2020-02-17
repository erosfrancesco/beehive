class ScoutBee extends Bee {
	constructor(...args) {
		super(...args)
	}


	get foodSourceValue() {
		if (!(this.foodSource)) {
			return 0
		}
		// some parameters
		const {distance, energy, extractionCost} = this.foodSource
		return energy / distance / extractionCost
	}


	//
	update() {
		super.update()
		
		// Get new foodSource
		// void for now. It should be interesting setting a cost for scouting new resources

		// when it should become a onlooker?
	}

}