function Car(name)
{
this.name = name;
}

Car.prototype.display = function()
{
console.log("this is "+this.name+ " Car.")
};

let carOne = new Car("Benz");
carOne.display();              //this is Benz Car.

let carTwo = new Car("Jaguar");
carTwo.display();             //this is Jaguar Car.
