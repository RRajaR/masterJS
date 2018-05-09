const debounce = (fn, time) => {
    let timeout;
  
    return function (...args) { // <-- not an arrow function
      const functionCall = () => fn.apply(this, args);
  
      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    }
  }
  
  const obj = {
    name: 'foo',
    sayMyName() {
      console.log('My name is', this.name);
     this.sayMyName = debounce(this.sayMyName,2000);
      
    }
  }
  
  obj.sayMyName(); 
  obj.sayMyName = debounce(obj.sayMyName, 1000);
  obj.sayMyName = debounce(obj.sayMyName, 1000);
  obj.sayMyName(); 


 
