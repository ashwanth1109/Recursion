//===========================================
// SOLVING FACTORIAL USING LOOPS
//===========================================
factorial = (n, product = 1) => {
    for (i = n; i > 0; i--) {
        product *= i;
    }
    return product;
};

console.log(factorial(10)); // O/P => 3628800
