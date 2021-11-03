// Coercion

/**
 * Coercion comes in two forms in JavaScript: explicit and implicit.
 * Explicit - you can see from the code that a conversion from one type to another will occur.
 * Implicit - is when type of conversion can happen as more of a non-obvious side effect of some other operation.
 */

//Explicit version
var a = "42";
var b = Number( a );

a;      // "42"
b;      // 42--the number!

//Implicit version
var a = "42";
var b = a * 1;      // "42" implicitly coerced to 42 here

a;        // "42"
b;        // 42--the number1

// The specific list of "falsy" values in JavaScript is as follows:

/**
 * " " - empty string
 * 0, -0, NaN (invalid number)
 * null, undefined
 * false
 */

// any value that is not in the list of "falsy" is considered "truthy"

/**
 * "hello"
 * 42
 * true
 * [ ], [1, "2", 3] (arrays)
 * { }, {a: 42} (objects)
 * function foo() {..} (functions)
 */

/**
 * 
There are four equality operators: ==, ===, !=, and !==. The ! forms
are of course the symmetric “not equal” versions of their counter‐
parts; non-equality should not be confused with inequality.
The difference between == and === is usually characterized that ==
checks for value equality and === checks for both value and type
equality. However, this is inaccurate. The proper way to characterize
them is that == checks for value equality with coercion allowed, and
=== checks for value equality without allowing coercion; === is often
called “strict equality” for this reason.
 */

var a = "42";
var b = 42;

a == b;     // true
a === b;    // false

/*
To boil down a whole lot of details to a few simple takeaways, and
help you know whether to use == or === in various situations, here
are my simple rules:
• If either value (aka side) in a comparison could be the true or
false value, avoid == and use ===. • If either value in a comparison could be of these specific values
(0, "", or []—empty array), avoid == and use ===. • In all other cases, you’re safe to use ==. Not only is it safe, but in
many cases it simplifies your code in a way that improves read‐
ability.
*/

var a = [1, 2, 3];
var b = [1, 2, 3];
var c = "1, 2, 3";

a == c;     // true
b == c;     // true
a == b;     // false

//Inequality comparison

var a = 41;
var b = "42";
var c = "43";

a < b;      // true
b < c;      // true

/*
What happens here? In section 11.8.5 of the ES5 specification, it says
that if both values in the < comparison are strings, as it is with b <
c, the comparison is made lexicographically (aka alphabetically like
a dictionary). But if one or both is not a string, as it is with a < b,
then both values are coerced to be numbers, and a typical numeric
comparison occurs.
*/

var a = 42;
var b = "foo";

a < b;      // false
a > b;      // false
a == b;     // false