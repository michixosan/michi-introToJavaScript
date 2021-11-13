
// A variable dont have types-values have types
// Variables can hold any value, at any time.
// A variable can hold a 'string' on one end, and a 'number' in the next end and so on.

var a = 42;
typeof a;           // "number"

a = true;
typeof a;           // "boolean"

// The typeof operator always returns a string.So:
typeof typeof 42;   // "string"

// The first typeof 42 returns "number", and typeof "number" is "string".