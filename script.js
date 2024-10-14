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
