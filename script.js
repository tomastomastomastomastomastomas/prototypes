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
  let vehicle = new Vehicle(brand, model, maxSpeed);
  this.brand = vehicle.brand;
  this.model = vehicle.model;
  this.maxSpeed = vehicle.maxSpeed;
  this.speed = vehicle.speed;

  this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.opendDoors = function () {
  console.log("doors open");
};

function Motorcycle(brand, model, maxSpeed, sidecar) {
  let vehicle = new Vehicle(brand, model, maxSpeed);
  this.brand = vehicle.brand;
  this.model = vehicle.model;
  this.maxSpeed = vehicle.maxSpeed;
  this.speed = vehicle.speed;

  this.sidecar = sidecar;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
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
