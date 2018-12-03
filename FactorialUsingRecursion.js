//===========================================
// SOLVING FACTORIALS USING RECURSION - Expanded
//===========================================
factorialExpanded = n => {
    // Check to determine if recursive case or base case
    if (n === 2) {
        return n * (n - 1); // terminal base case
    } else {
        return n * factorial(n - 1); // recursive case
    }
};
// console.log(factorialExpanded(10)); // O/P => 3628800

//===========================================
// SOLVING FACTORIALS USING RECURSION - Minified
//===========================================
factorial = n => n * (n === 2 ? n - 1 : factorial(n - 1));

console.log(factorial(1000)); // O/P => 3628800
