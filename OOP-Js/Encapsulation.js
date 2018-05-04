let a = (b,c,d){
function makePrivate(){
console.log(d);
}
this.b = b;
this.c = c;
}


let e = a('Hi','there','fine');

e.makePrivate();   // "fine"   here we don't have access to d variable even though makePrivate is using it. 
//we are binding the method and variable together so that not allowing anything change variable outside the function.
