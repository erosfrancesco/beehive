class OnlookerBee extends Bee {
	constructor(...args) {
		super(...args)
		this.interactions = {}
		this.delta = 2
	}

	
	get preferredFoodSource() {
		return Object.keys(this.computedValues).reduce((accumulator, key) => {
			const foodSource = this.computedValues[key]
			return (accumulator.value < foodSource.value) ? foodSource : accumulator
		}, 0)
	}


	interactWith(employedBee) {
		const {foodSourceValue: value, foodSource} = employedBee
		this.computedValues[employedBee.id] = {foodSource, value}
	}


	//
	update() {
		super.update()
		
		this.computedValues = {}
		this.hive.employed.forEach(employedBee => this.interactWith(employedBee) )

		// parameters
		const {value, foodSource} = this.preferredFoodSource
		if (value < this.delta) {
			this.hive.convertToEmployed(this.id, foodSource)
		}
	}
}