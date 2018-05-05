class Foo {
    constructor(text){
       this.text = text;
    }
 
    genericMethod() {
        console.log("This is super class. "+this.text);
    }

    doSomething() {
       throw new Error('You have to implement the method doSomething');
    }
 
}
 
class Bar extends Foo {
 
    constructor(text){
       super(text);
    }
 
    genericMethod() {
        console.log('This is child class. '+this.text);
    }
    
    doSomething() {
       console.log('Method implemented successfully.');
    }
    
}
 
let b = new Bar('Hey!');
b.genericMethod();   //running from child class. Hey!

b.doSomething();   // Method implemented successfully
