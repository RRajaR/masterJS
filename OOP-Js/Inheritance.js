function Car(type,color,engine)
{
this.type = type;
this.color = color;
this.engine = engine;
};

Car.prototype.carEngine = function(){
console.log("this car is having " + this.engine);
}


function Benz(type,color,engine,speed)
{
Car.call(this,type,color,engine);
this.speed = speed;
}
var x = new Car("Benz","Red","R500");
x.carEngine();
