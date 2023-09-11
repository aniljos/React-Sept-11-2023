interface Vehicle{

    name: string;
    gears?: number;
    speed: number;

    decrementSpeed(value: number): void;
}

class Car implements Vehicle{

    name: string;
    gears?: number;
    speed: number;
    private createdDate: Date;

    //multiple constructor declarations
    constructor();
    constructor(name: string, gears: number);
    constructor(name: string, gears: number, speed: number);

    //only one construtor implementation
    constructor(name?: string, gears?: number, speed?: number){
        this.name = name;
        this.speed = speed;
        this.gears = gears;
        this.createdDate = new Date();
    }

    decrementSpeed(value: number): void {
        this.speed -= value;
    }
}

var car: Vehicle = new Car();
car.name = "BMW"; car.gears=7; car.speed=100;
console.log("car", car);
car.decrementSpeed(20);
console.log("car", car);

var car1: Vehicle = new Car("Audi", 6);
console.log("car1", car1);
var car2: Vehicle = new Car("Audi", 6, 90);
console.log("car2", car2);