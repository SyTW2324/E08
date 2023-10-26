var fib: number[] = [0, 1];
  function listFib(num: number) {
    for (var i: number = 2; i < num; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];  
    }
    return fib;    
  }