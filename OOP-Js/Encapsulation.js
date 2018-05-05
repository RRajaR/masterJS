function Person()
{
  var name = "Megan";
  var height = 68;
  var weight = 170;

  this.setHeight = function(newHeight) {height=newHeight;}
  this.getHeight = function() { return height; }
  this.setWeight = function(newWeight) {weight = newWeight;}
  this.getWeight = function() { return weight; }
  this.setName   = function(newName) {name=newName;}
  this.getName   = function() { return name; }

  return this;
}

var boone = new Person();
var boone = aPerson.name;  //undefined
var boone = aPerson.getName();  //Megan
