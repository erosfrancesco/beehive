// interface to set food sources and discovery methods

// Food sources
const foodSources = []
foodSources.push(new FoodSource(20, 100, 2))
foodSources.push(new FoodSource(10, 50, 3))
foodSources.push(new FoodSource(12, 20, 1))
foodSources.push(new FoodSource(15, 120, 1))


// Hive
const hive = new Hive(5)
hive.convertToScout(0)
hive.convertToScout(1)
// hive.convertToEmployed(0, foodSources[1])
// hive.convertToEmployed(1, foodSources[2])
hive.discover = bee => {
	console.log("Discovering new food sources...")
	const rnd = Math.round(Math.random() * (foodSources.length - 1))
	return foodSources[rnd]
}