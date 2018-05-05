class Car{
constructor(type,color,engine){
this.type = type;
  this.color = color;
  this.engine = engine
}
  
  makeEngine()
  {
  console.log("this is having "+this.engine);
  }
}

class Audi extends Car
{
  constructor(type, color, engine, speed)
  {
    super(type, color, engine);
    this.speed = speed;
  }
 
   makeEngine()
  {
  console.log(this.engine);
  }
}

let carOne = new Car("Range", "gold", "Auto2400", "500");
carOne.makeEngine();  // this is having Auto2400

let carTwo = new Audi("Range", "gold", "Auto2400");
carTwo.makeEngine();  // Auto2400
