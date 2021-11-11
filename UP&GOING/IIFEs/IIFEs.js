
// There's another way to execute a function expression, which is typically referred to as an immediately invoked function expression

(function IIFE() {
    console.log("Hello!")
})();
// "Hello!"

// Explanation
/**
Tje piter (..) tjat surrounds the (function IIFE() {...}) function is just a nuance
of JS Grammar needed to prevent it from being treated as a normal function declaration.

The fina() on the end of the expression-the })(); line-is what actually executes the function
expression referenced immediately before it.
 */

function foo() {}
    // `foo` function reference expression,
    // then `()` executes it

    // `IIFE` function expression
    // then `()` executes it
    (function IIFE() {}) ();

/** Using this kind of fashion of JavaScript code is often used to declare variables
 * that won't affect the surrounding code outside the IIFE
 */

var a = 42;

(function IIFE() {
    var a = 10;
    console.log(a);     // 10
}) ();

console.log(a);         // 42
// IIFEs can also have have return values

var x = (function IIFE() {
    return 42;
}) ();

x;      // 42

// The 42 value gets returned from the IIFE-named function being executed, and is often assigned to x.