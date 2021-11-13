
// Built in Types

/**
null, undefined, boolean, number, string, object, symbol-added in ES6
All of the above types except "object" are called "primitives"
 */

typeof undefined === "undefined";   // true
typeof true === "true";             // true
typeof 42 === "number";             // true
typeof "42" === "string";           // true
typeof {life: 42} === "object";     // true

// added din ES6!
typeof Symbol() === "symbol";       // true

// null from the above is excluded, because it's special-special in the sense that it's buggy when combined with typeof operator

typeof null === "object";           // true
/**
 * This original bug has existed more than two decades, and will remain the same most probably
 * because there are so much web content that relies on its buggy behaviour that 'fixing' the bug would
 * create more "bugs" and break a lot of web software 
 */

// If you want to test for a null value using its type, you need a compound condition:
var a = null;
(!a && typeof a === 'object');      // true

typeof function a(){/*...*/} === "function";    // true

// Specifically, a function is referred to as a "callable object"
// an object that has an internal [[Call]] property that allows it to be invoked

// The fact that functions are actually objects is quite useful. Most importantly, they can have properties. For example
function a(b, c) {
    /*...*/
}

// The function object has a length property set to the number of formal parameters it is declared with:
a.length;   // 2
// Since we declared the function with two formal named parameters (b and c), the "length of the fuction" is 2

typeof [1, 2, 3] === "object";      // true


