class Car {
    //only one construtor implementation
    constructor(name, gears, speed) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
        this.createdDate = new Date();
    }
    decrementSpeed(value) {
        this.speed -= value;
    }
}
var car = new Car();
car.name = "BMW";
car.gears = 7;
car.speed = 100;
console.log("car", car);
car.decrementSpeed(20);
console.log("car", car);
var car1 = new Car("Audi", 6);
console.log("car1", car1);
var car2 = new Car("Audi", 6, 90);
console.log("car2", car2);
