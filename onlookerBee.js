class OnlookerBee extends Bee {
	constructor(...args) {
		super(...args)
		this.parameters.minFitness = 2
	}

	
	// this should have a probability factor
	get preferredFoodSource() {
		return Object.keys(this.fitnesses).reduce((accumulator, key) => {
			const foodSource = this.fitnesses[key]
			return (accumulator.fitness < foodSource.fitness) ? foodSource : accumulator
		}, 0)
	}


	danceWith(employedBee) {
		const {fitness, foodSource, id} = employedBee
		this.fitnesses[id] = {foodSource, fitness}
	}


	//
	update() {
		super.update()
		
		this.fitnesses = {}
		this.hive.employed.forEach(employedBee => this.danceWith(employedBee) )

		// parameters
		const {fitness, foodSource} = this.preferredFoodSource
		if (fitness < this.parameters.minFitness) {
			this.hive.convertToEmployed(this.id, foodSource)
		}
	}
}