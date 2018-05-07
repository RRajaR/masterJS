class Foo {
    constructor(text){
       this.text = text;
    }
    fooFunction() {
        console.log("This is super class. "+this.text);
    }
}
 
class Bar extends Foo {
    constructor(text){
       super(text);
    }
    fooFunction() {
        console.log('This is child class. '+this.text);
    }
    barFunction() {
       console.log('Method implemented successfully.');
    } 
}
 
let b = new Bar('Hey!');
b.fooFunction();   //running from child class. Hey!

b.barFunction();   // Method implemented successfully
