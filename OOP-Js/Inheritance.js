function Car(type,color,engine)
{
this.type = type;
this.color = color;
this.engine = engine;
};

Car.prototype.carEngine = function(){
console.log("this car is having " + this.engine);
}

Car.prototype.carColor = function()
{
 return this.color; 
}


function Benz(type,color,engine,speed)
{
Car.call(this,type,color,engine);
this.speed = speed;
}

Benz.prototype = Object.create(Car.prototype);
Car.prototype.constructor = Car;

Car.prototype.carEngine = function(){
return this.engine;
}


var carOne = new Car("Model S3","LightGrey","Auto2400");
console.log(carOne.carColor());   // LightGrey
console.log(carOne.carEngine());  // Auto2400

