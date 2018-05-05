function Car(fullName) {
  this.fullName = fullName;
}

Car.prototype.display = function(){
  console.log("this is "+this.fullName+"Car.")
};
Car.prototype.introduction = function(){
 console.log("Hi, I am "+this.fullName);
};

function Suv(fullName, model) {

  Suv.call(this, fullName);
   this.model = model;
   
};

Suv.prototype = Object.create(Car.prototype); 
Suv.prototype.constructor = Suv;


Suv.prototype.introduction= function(){
 console.log(this.fullName);

Student.prototype.display = function(){
  console.log("overriden "+ this.fullName);
};


var carOne = new Suv("Bentley");
caOne.introduction();   // Bentley
carOne.display();  // overriden Bentley
