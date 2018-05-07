function Foo(fullName) {
  this.fullName = fullName;
}

Foo.prototype.introduction = function(a,b){
  console.log("This is Foo method1");
};

Foo.prototype.introduction = function(a,b,c){
console.log("hekoo");                                            //overloading isn't working
}

Foo.prototype.display = function(){
 console.log("Hi, I am " + this.fullName);
};

function Bar(fullName, nickName) {
  Foo.call(this, fullName);
   this.nickName = nickName;
};
Bar.prototype = Object.create(Foo.prototype); 

Bar.prototype.constructor = Bar;


Bar.prototype.introduction= function(a,b,c){
  console.log( this.fullName);
};

Bar.prototype.display = function(){
  console.log("overriden "+ this.nickName);
};


var One = new Bar("Htderabad","Hyd");
One.introduction();   //Hyderabad
One.display();       //overriden Hyd                  //overriding 

