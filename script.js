// Car constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Method on Car prototype to get make and model
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor to inherit make and model properties
    Car.call(this, make, model); 
    this.topSpeed = topSpeed; 
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor of SportsCar back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Method on SportsCar prototype to get top speed
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Example usage
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel());  // Output: Ferrari Testarossa
console.log(car.getTopSpeed());   // Output: 200
