class Car {
	constructor(name, model, type) {
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

		if (type === 'trailer') {
			this.numOfWheels = 8;
			this.isSaloon = false;
			this.speed = '0 km/h';
			this.type = 'trailer';
		} else {
			this.numOfWheels = 4;
			this.isSaloon = true;
		}
	}

	drive(gear) {
		if (this.type === 'trailer') {
			this.speed = `${11 * gear} km/h`;
		} else {
			this.speed = `${50 * gear} km/h`;
		}
		return this;
	}
}

module.exports = Car;