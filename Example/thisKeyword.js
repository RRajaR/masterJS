let bob = {
  firstName: "Bob",
  lastName: "Robertson",
  displayMe: function() {
    for (let m in this) {
      console.log(m,"=",this[m]);
    }
  }
};

bob.displayMe(); 

Result:
firstName = Bob
lastName = Robertson
displayMe = function () {
    for (let m in this) {
      console.log(m,"=",this[m]);
    }
  }

// this is the parameter that references the object on which a method is being invoked.
//The above parameter clearly references the instance bob, and dutifully prints out the name and values of firstName, lastName, and (since it too is a member of the object) the displayMe method.


Things get a little weirder when this is referenced from a function that exists at the global scope:


let displayThis = function() {
  for (let m in this) {
    console.log(m);
  }
};

displayThis(); 

Result:
global
process
Buffer
clearImmediate
clearInterval
clearTimeout
setImmediate
setInterval
setTimeout
console

//For the uninitiated, ECMAScript defines the global scope as an object, so when used from a function in the global scope, this references the global scope object. In the case above it would dutifully print out each member of the global scope, including top-level global variables, functions, and objects.
