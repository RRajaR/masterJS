function debounce(func, wait)
{
let timeout;
return function(...args){
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(()=>func.apply(context,args),wait);
}
}

function sayHi()
{
console.log("my name is "+ this.name);
}

const megan = {name : "Megan", callfun : debounce(sayHi)}

megan.callfun();
