class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`Car ${this.make}, ${this.model}`);
    }
}

let car1 = new Car("Toyota", "Corolla");
console.log(car1.displayInfo());