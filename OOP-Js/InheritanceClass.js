class Car
{
construcor(type,color,engine){
this.type = type;
this.color = color;
this.engine = engine;
}

carEngine()
{
console.log("this car is having " + this.engine);
}
}


class Benz extends Car
{
constructor(type,color,engine,speed)
{
super(type,color,engine);
this.speed = speed;
}

carEngine()
{
return this.engine;
}
}

let carOne = new Car("model s3","Lightgrey","Auto2400");
carOne.carEngine();
