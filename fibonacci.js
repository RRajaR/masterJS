function fibonacci(n){
    var i;
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for(i=2; i<=n; i++)
    {
    fib[i] = fib[i-1] + fib[i-2];
    console.log(fib[i]);
    }
}






