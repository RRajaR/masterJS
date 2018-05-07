function Person()
{
  let height = 68;

  this.setHeight = function(newHeight) {height=newHeight;}
  this.getHeight = function() { return height; }
}

var a = new Person();

a.getHeight();  //68
a.height;     // undefined
