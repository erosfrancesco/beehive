class FoodSource {
	constructor(distance, energy, extractionCost) {
		this.total = energy
		this.available = energy
		this.distance = distance
		this.cost = extractionCost
	}

	extract(bee) {

		// Initial cost
		////////////////////////////////////////////////////
		// bee efficiency as a parameter?
		const extractionCost = this.cost + this.distance

		if (extractionCost >= this.available) {
			this.available = 0
			return 0
		}

		this.available -= extractionCost
		////////////////////////////////////////////////////


		// Extraction
		////////////////////////////////////////////////////
		// another type of bee efficiency as a parameter?
		const alpha = this.available * 3 / 100
		if (alpha >= this.available) {
			this.available = 0
			return 0
		}

		this.available -= alpha
		////////////////////////////////////////////////////

		return alpha
	}
}