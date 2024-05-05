class Car {
    constructor(make, model) {
        this.make = make,
            this.model = model
    }
    displayInfo() {
        console.log(`Car -> ${this.make}, ${this.model}`)
    }
}

class ElectricCar extends Car {
    constructor(make, model, batteryRange) {
        super(make, model)
        this.batteryRange = batteryRange
    }

    displayRange() {
        return `Battery Range ${this.batteryRange} km`;
    }
}

let electricCar1 = new ElectricCar("Tesla", "Model 3", 400);
console.log(electricCar1.displayInfo());
console.log(electricCar1.displayRange());