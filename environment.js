// interface to set food sources and discovery methods

// Food sources. To be loaded externally
const foodSources = []
// distance, energy, extractionCost)
foodSources.push(new FoodSource(40, 100, 2))
foodSources.push(new FoodSource(10, 50, 3))
foodSources.push(new FoodSource(32, 20, 1))
foodSources.push(new FoodSource(15, 120, 1))


// Hive. Should:
// auto-organize itself with new and old bees and
// update the parameters of the bees (when exchanging roles?)
const hive = new Hive(7)
hive.convertToScout(0)
hive.convertToScout(1)


// Interface (Bridge pattern tecnically) for getting foodSources
hive.discover = bee => {
	// Should be filtered from the bee's history?

	// Get a random available source
	////////////////////////////////////////////////////
	const rnd = Math.round(Math.random() * (foodSources.length - 1))
	return foodSources[rnd]
	////////////////////////////////////////////////////
}

hive.extract = (bee, foodSource) => {

	const {cost, available, distance} = foodSource

	// Initial cost
	////////////////////////////////////////////////////
	// bee efficiency as a parameter?
	const extractionCost = cost + distance

	if (extractionCost >= available) {
		foodSource.available = 0 // not necessary...
		return 0
	}

	foodSource.available -= extractionCost
	////////////////////////////////////////////////////


	// Extraction
	////////////////////////////////////////////////////
	// another type of bee efficiency as a parameter?
	const alpha = available * 3 / 100
	if (alpha >= available) {
		foodSource.available = 0 // not necessary...
		return 0
	}

	foodSource.available -= alpha
	////////////////////////////////////////////////////

	return alpha
}