function Vehicle(brand, model, maxSpeed) {
  this.brand = brand;
  this.model = model;
  this.maxSpeed = maxSpeed;
  this.speed = 0;
}

Vehicle.prototype.accelerate = function (speed) {
  if (speed > this.maxSpeed) {
    this.speed = this.maxSpeed;
  } else {
    this.speed = speed;
  }
};

Vehicle.prototype.stop = function () {
  this.speed = 0;
};

Vehicle.prototype.showInfo = function () {
  console.log(this.brand, this.model, this.maxSpeed);
};

function Car(brand, model, maxSpeed, doors) {
  Vehicle.call(this, brand, model, maxSpeed);
  this.doors = doors;
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.opendDoors = function () {
  console.log("doors open");
};

function Motorcycle(brand, model, maxSpeed, sidecar) {
  Vehicle.call(this, brand, model, maxSpeed);
  this.sidecar = sidecar;
}

Object.setPrototypeOf(Motorcycle.prototype, Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.showSidecar = function () {
  console.log(this.sidecar ? "has sidecar" : "does not have sidecar");
};

Vehicle.prototype.compareSpeed = function (vehicle) {
  if (this.maxSpeed < vehicle.maxSpeed) {
    console.log(
      `the vehicle model ${vehicle.model} and brand ${vehicle.brand} is faster than the vehicle model ${this.model} and brand ${this.brand}`
    );
  } else if (this.maxSpeed > vehicle.maxSpeed) {
    console.log(
      `the vehicle model ${this.model} and brand ${this.brand} is faster than the vehicle model ${vehicle.model} and brand ${vehicle.brand}`
    );
  } else {
    console.log("they have the same speed");
  }
};

let car1 = new Car("brand1", "model1", 300, 4);
let car2 = new Car("brand2", "model2", 100, 3);
let car3 = new Car("brand3", "model3", 250, 6);
let car4 = new Car("brand4", "model4", 60, 5);

car1.accelerate(120);
car2.showInfo();
car3.showInfo();
car4.opendDoors();
car3.compareSpeed(car1);
car1.stop();

console.log(Vehicle.prototype);

let motorcycle1 = new Motorcycle(
  "motorcycle brand1",
  "motorcycle model1",
  200,
  true
);
let motorcycle2 = new Motorcycle(
  "motorcycle brand2",
  "motorcycle model2",
  200,
  false
);
motorcycle1.showInfo();
motorcycle1.showSidecar();
motorcycle2.showInfo();
motorcycle2.showSidecar();
motorcycle2.compareSpeed(motorcycle1);
