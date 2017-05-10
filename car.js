class Car {
	constructor(name, model) {
		if (name === undefined) {
			this.name = 'General';
		} else {
			this.name = name;
		}
		if (model === undefined) {
			this.model = 'GM';
		} else {
			this.model = model;
		}

		if (name === 'Porshe' || name === 'Koenigsegg') {
			this.numOfDoors = 2;
		} else {
			this.numOfDoors = 4;
		}
	}

	drive(gear) {
		this.speed = `${50 * gear} km/h`;
	}
}

module.exports = Car;