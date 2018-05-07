function Person()
{
  let name = "Megan";
  let height = 68;
  let weight = 170;

  this.setHeight = function(newHeight) {height=newHeight;}
  this.getHeight = function() { return height; }
  this.setWeight = function(newWeight) {weight = newWeight;}
  this.getWeight = function() { return weight; }
  this.setName   = function(newName) {name=newName;}
  this.getName   = function() { return name; }

  return this;
}

var a = new Person();

a.getHeight();  //68
a.height;     // undefined
