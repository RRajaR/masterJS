
var x = function isPrime(a){
    for (var i = 2; i < a;i++) 
     {
         if (a%i!==0) {
             return true;
         }
         else{
             return false;
         }
     }
    }

    x(5);
